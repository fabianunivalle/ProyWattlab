from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class TipoIdentificacion(models.Model):
    dscrpcn_tpo_idntfcn = models.CharField(max_length=50)

class TipoCliente(models.Model):
    dscrpcn_tpo_clnte = models.CharField(max_length=50)

class Tarifa(models.Model):
    vlr_kwh = models.FloatField()
    inco_vgnca = models.DateField()
    fn_vgnca = models.DateField()
    obsrvcn = models.CharField(max_length=150)

class Departamento(models.Model):
    nmbre_dprtmnto = models.CharField(max_length=150)

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

class Pago(models.Model):
    nmro_unco_idntfccn_bnco = models.ForeignKey('Banco',on_delete=models.CASCADE)
    cnsctvo_fctra = models.OneToOneField('Facturacion',on_delete=models.CASCADE, unique = True)
    vlr_pgdo = models.FloatField()
    nmro_unco_idntfccn_usro = models.ForeignKey(User,on_delete=models.CASCADE)
    fcha_pgo = models.DateField()

class Banco(models.Model):
    nmbre_bnco = models.CharField(max_length=50)
    drccn = models.CharField(max_length=150)
    tlfno = models.CharField(max_length=50)
    cnsctvo_cdd = models.ForeignKey('Ciudad',on_delete=models.CASCADE)

class Cliente(models.Model):
    cnsctvo_tpo_idntfcn = models.ForeignKey('TipoIdentificacion',on_delete=models.CASCADE)
    nmro_idntfccn = models.CharField(max_length=50)
    prmr_nmbre = models.CharField(max_length=50)
    sgndo_nmbre = models.CharField(max_length=50)
    prmr_aplldo = models.CharField(max_length=50)
    sgndo_aplldo = models.CharField(max_length=50)
    fcha_ncmnto = models.DateField()
    cnsctvo_tpo_clnte = models.ForeignKey('TipoCliente',on_delete=models.CASCADE)

class Contrato(models.Model):
    nmro_unco_idntfccn_clnte = models.IntegerField()
    estrt_scl = models.CharField(max_length=150)
    drccn = models.CharField(max_length=150)
    cnsctvo_cdd = models.ForeignKey('Ciudad',on_delete=models.CASCADE)

class Consumo(models.Model):
    nmro_unco_idntfccn_cntrto = models.ForeignKey('Contrato',on_delete=models.CASCADE)
    kwh = models.IntegerField()
    prdo_cnsmo = models.IntegerField()

class Facturacion(models.Model):
    cnsctvo_cnsmo = models.ForeignKey('Consumo',on_delete=models.CASCADE)
    cnsctvo_trfa = models.FloatField()
    vlr_cnsmo = models.FloatField()
    vlr_intrss_mra = models.FloatField()
    vlr_rcnxn = models.FloatField()
    vlr_ttl = models.FloatField()
    fcha_lmte_pgo = models.DateField()
    cntdd_fctrs_pndts = models.IntegerField()
    fcha_crte_srvco = models.DateField()
    estdo_fctra = models.BooleanField()

class SubEstacion(models.Model):
    nombre = models.CharField(max_length=50)
    drccn = models.CharField(max_length=150)
    tlfno = models.CharField(max_length=50)
    cnsctvo_cdd = models.ForeignKey('Ciudad',on_delete=models.CASCADE)
    lngtd = models.FloatField()
    lttd = models.FloatField()

class Ciudad(models.Model):
    cnsctvo_dprtmnto = models.ForeignKey('Departamento',on_delete=models.CASCADE)
    nmbre_cdd = models.CharField(max_length=50)