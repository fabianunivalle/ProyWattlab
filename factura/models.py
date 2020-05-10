from django.db import models
from django.contrib.auth.models import User
from  django.db.models.signals import post_save
# Create your models here.

class TipoIdentificacion(models.Model):
    dscrpcn_tpo_idntfcn = models.CharField(max_length=50)

    def __str__(self):
        return self.dscrpcn_tpo_idntfcn

class TipoCliente(models.Model):
    dscrpcn_tpo_clnte = models.CharField(max_length=50)

    def __str__(self):
        return self.dscrpcn_tpo_clnte

class Tarifa(models.Model):
    vlr_kwh = models.FloatField()
    inco_vgnca = models.DateField()
    fn_vgnca = models.DateField()
    obsrvcn = models.CharField(max_length=150)

    def __str__(self):
        return self.obsrvcn

class Departamento(models.Model):
    nmbre_dprtmnto = models.CharField(max_length=150)

    def __str__(self):
        return self.nmbre_dprtmnto

class Transformador(models.Model):
    nmro_unco_idntfccn_sub_estcn = nmro_unco_idntfccn_sub_estcn = models.ForeignKey('SubEstacion',on_delete=models.CASCADE)
    tnsn_prmra = models.IntegerField()
    tnsn_mxma_srvco = models.IntegerField()
    tnsn_scndra = models.IntegerField()
    ptnca_nmnl = models.IntegerField()
    rlcn_trnsfrmcn = models.IntegerField()
    intnsdd_nmnl_prmra = models.IntegerField()
    tnsn_crto_crcto = models.IntegerField()
    grpo_cnxn = models.IntegerField()
    lngtd = models.FloatField()
    lttd = models.FloatField()
    obsrvcn = models.CharField(max_length=150, default = '')

    def __str__(self):
        return self.obsrvcn

class Pago(models.Model):
    nmro_unco_idntfccn_bnco = models.ForeignKey('Banco',on_delete=models.CASCADE)
    cnsctvo_fctra = models.OneToOneField('Facturacion',on_delete=models.CASCADE, unique = True)
    vlr_pgdo = models.FloatField()
    nmro_unco_idntfccn_usro = models.ForeignKey(User,on_delete=models.CASCADE)
    fcha_pgo = models.DateField()
    obsrvcn = models.CharField(max_length=150, default = '')

    def __str__(self):
        return self.obsrvcn

class Banco(models.Model):
    nmbre_bnco = models.CharField(max_length=50)
    drccn = models.CharField(max_length=150)
    tlfno = models.CharField(max_length=50)
    cnsctvo_cdd = models.ForeignKey('Ciudad',on_delete=models.CASCADE)

    def __str__(self):
        return self.nmbre_bnco

class Cliente(models.Model):
    cnsctvo_tpo_idntfcn = models.ForeignKey('TipoIdentificacion',on_delete=models.CASCADE)
    nmro_idntfccn = models.CharField(max_length=50)
    prmr_nmbre = models.CharField(max_length=50)
    sgndo_nmbre = models.CharField(max_length=50)
    prmr_aplldo = models.CharField(max_length=50)
    sgndo_aplldo = models.CharField(max_length=50)
    fcha_ncmnto = models.DateField()
    cnsctvo_tpo_clnte = models.ForeignKey('TipoCliente',on_delete=models.CASCADE)

    def __str__(self):
        return self.prmr_nmbre+' '+self.sgndo_nmbre+' '+self.prmr_aplldo+' '+self.sgndo_aplldo

class Contrato(models.Model):
    nmro_unco_idntfccn_clnte = models.IntegerField()
    estrt_scl = models.CharField(max_length=150)
    drccn = models.CharField(max_length=150)
    cnsctvo_cdd = models.ForeignKey('Ciudad',on_delete=models.CASCADE)

    def __str__(self):
        return self.drccn

class Consumo(models.Model):
    nmro_unco_idntfccn_cntrto = models.ForeignKey('Contrato',on_delete=models.CASCADE)
    kwh = models.IntegerField()
    prdo_cnsmo = models.IntegerField()
    obsrvcn = models.CharField(max_length=150, default = '')

    def __unicode__(self):
        return self.obsrvcn
        
    def post_save(self, **kwargs):
        fact = Facturacion()
        tari = Tarifa(vlr_kwh = 300,    inco_vgnca = '2020-02-02',    fn_vgnca = '2020-02-02',    obsrvcn = 'models.CharField(max_length=150))')
        fact.cnsctvo_cnsmo = self
        fact.cnsctvo_trfa = tari
        fact.vlr_cnsmo = self.kwh*tari.vlr_kwh
        fact.vlr_intrss_mra = 0
        fact.vlr_rcnxn = 0
        fact.vlr_ttl = fact.vlr_cnsmo+fact.vlr_intrss_mra+fact.vlr_rcnxn
        fact.fcha_lmte_pgo = '2020-02-02'
        fact.cntdd_fctrs_pndts = 1
        fact.fcha_crte_srvco = '2020-02-02'
        fact.save()

# def save_consumo(sender, instance, **kwargs):
#     fact = Facturacion()
#     fact.cnsctvo_cnsmo = sender
#     fact.save()

# post_save.connect(save_consumo, sender= Consumo)

class Facturacion(models.Model):
    cnsctvo_cnsmo = models.ForeignKey('Consumo',on_delete=models.CASCADE)
    cnsctvo_trfa = models.ForeignKey('Tarifa',on_delete=models.CASCADE)
    vlr_cnsmo = models.FloatField()
    vlr_intrss_mra = models.FloatField()
    vlr_rcnxn = models.FloatField()
    vlr_ttl = models.FloatField()
    fcha_lmte_pgo = models.DateField()
    cntdd_fctrs_pndts = models.IntegerField()
    fcha_crte_srvco = models.DateField()
    estdo_fctra = models.BooleanField(default = 0)
    obsrvcn = models.CharField(max_length=150, default = '')

    def __str__(self):
        return self.obsrvcn

class SubEstacion(models.Model):
    nombre = models.CharField(max_length=50)
    drccn = models.CharField(max_length=150)
    tlfno = models.CharField(max_length=50)
    cnsctvo_cdd = models.ForeignKey('Ciudad',on_delete=models.CASCADE)
    lngtd = models.FloatField()
    lttd = models.FloatField()

    def __str__(self):
        return self.nombre

class Ciudad(models.Model):
    cnsctvo_dprtmnto = models.ForeignKey('Departamento',on_delete=models.CASCADE)
    nmbre_cdd = models.CharField(max_length=150)

    def __str__(self):
        return self.nmbre_cdd