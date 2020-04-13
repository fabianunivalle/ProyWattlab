from django.db import models

# Create your models here.

class ciudad(models.Model):
    cnsctvo_dprtmnto = models.ForeignKey('departamento',on_delete=models.CASCADE)
    nmbre_cdd = models.CharField(max_length=50)

class departamento(models.Model):
    nmbre_dprtmnto = models.CharField(max_length=150)

class TipoUsuario(models.Model):
    dscrpcn_tpo_usrio = models.CharField(max_length=50)

class EstadoUsuario(models.Model):
    dscrpcn_estdo_usro = models.CharField(max_length=50)

class UsuarioEstadoVigencia(models.Model):
    nmro_unco_idntfccn_usro = models.ForeignKey('Usuario',on_delete=models.CASCADE)
    cnsctvo_estdo_usro = models.ForeignKey('EstadoUsuario',on_delete=models.CASCADE)
    inco_vgnca = models.DateField()
    fn_vgnca = models.DateField()
    obsrvcn = models.CharField(max_length=150)

class Usuario(models.Model):
    nmbre_usro = models.CharField(max_length=50)
    cnsctvo_tpo_usrio = models.ForeignKey('TipoUsuario',on_delete=models.CASCADE)
    psswrd = models.CharField(max_length=50)

class Pago(models.Model):
    nmro_unco_idntfccn_bnco = models.ForeignKey('Banco',on_delete=models.CASCADE)
    cnsctvo_fctra = models.ForeignKey('Facturacion',on_delete=models.CASCADE)
    vlr_pgdo = models.FloatField()
    nmro_unco_idntfccn_usro = models.ForeignKey('Usuario',on_delete=models.CASCADE)
    fcha_pgo = models.DateField()

class Banco(models.Model):
    nmbre_bnco = models.CharField(max_length=50,default = '')
    drccn = models.CharField(max_length=150,default = '')
    tlfno = models.CharField(max_length=50,default = '')
    cnsctvo_cdd = models.ForeignKey('ciudad',default = 1, on_delete=models.CASCADE)

class TipoIdentificacion(models.Model):
    dscrpcn_tpo_idntfcn = models.CharField(max_length=50)

class Genero(models.Model):
    dscrpcn_gnro = models.CharField(max_length=50)

class tipoCliente(models.Model):
    dscrpcn_tpo_clnte = models.CharField(max_length=50)

class Cliente(models.Model):
    cnsctvo_tpo_idntfcn = models.ForeignKey('TipoIdentificacion',on_delete=models.CASCADE)
    nmro_idntfccn = models.CharField(max_length=50)
    prmr_nmbre = models.CharField(max_length=50)
    sgndo_nmbre = models.CharField(max_length=50)
    prmr_aplldo = models.CharField(max_length=50)
    sgndo_aplldo = models.CharField(max_length=50)
    fcha_ncmnto = models.DateField()
    cnsctvo_gnro = models.ForeignKey('Genero',on_delete=models.CASCADE)
    cnsctvo_tpo_clnte = models.ForeignKey('tipoCliente',on_delete=models.CASCADE)

class EstadoSucursalCliente(models.Model):
    dscrpcn_estdo_scrsl_clnte = models.CharField(max_length=50)

class SucursalCliente(models.Model):
    nmro_unco_idntfccn_clnte = models.ForeignKey('Cliente',on_delete=models.CASCADE)
    rzn_scl_scrsl = models.CharField(max_length=150)
    drccn = models.CharField(max_length=150)
    tlfno = models.CharField(max_length=50)
    cnsctvo_cdd = models.ForeignKey('ciudad',on_delete=models.CASCADE)
    inco_vgnca = models.DateField()
    fn_vgnca = models.DateField()
    email = models.EmailField()
    nmro_unco_idntfccn_trnsfrmdr = models.ForeignKey('Transformador',on_delete=models.CASCADE)

class Consumo(models.Model):
    cnsctvo_scrsl_clnte = models.ForeignKey('SucursalCliente',on_delete=models.CASCADE)
    kwh = models.IntegerField()
    prdo_cnsmo = models.IntegerField()

class EstadoFactura(models.Model):
    dscrpcn_estdo_usro = models.CharField(max_length=50)

class Tarifa(models.Model):
    vlr_kwh = models.FloatField()
    inco_vgnca = models.DateField()
    fn_vgnca = models.DateField()
    obsrvcn = models.CharField(max_length=150)

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

class Transformador(models.Model):
    nmro_unco_idntfccn_sub_estcn = models.ForeignKey('SubEstacion',on_delete=models.CASCADE)
    tnsn_prmra = models.IntegerField()
    tnsn_mxma_srvco = models.IntegerField()
    tnsn_scndra = models.IntegerField()
    ptnca_nmnl = models.IntegerField()
    rlcn_trnsfrmcn = models.IntegerField()
    intnsdd_nmnl_prmra = models.IntegerField()
    tnsn_crto_crcto = models.IntegerField()
    grpo_cnxn = models.IntegerField()
    lngtd = models.IntegerField()
    lttd = models.IntegerField()

class SubEstacion(models.Model):
    nmro_unco_idntfccn = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=50)
    drccn = models.CharField(max_length=150)
    tlfno = models.CharField(max_length=50)
    cnsctvo_cdd = models.ForeignKey('ciudad',on_delete=models.CASCADE)
    lngtd = models.IntegerField()
    lttd = models.IntegerField()