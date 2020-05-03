from rest_framework import serializers
from .models import *

class TipoIdentificacionSerelizer(serializers.ModelSerializer):
    class Meta:
        model = TipoIdentificacion
        fields = ('dscrpcn_tpo_idntfcn')

class TipoClienteSerelizer(serializers.ModelSerializer):
    class Meta:
        model = TipoCliente
        fields = ('dscrpcn_tpo_clnte')
        
class TarifaSerelizer(serializers.ModelSerializer):
    class Meta:
        model = Tarifa
        fields = ('vlr_kwh','inco_vgnca','fn_vgnca','obsrvcn')
                
class DepartamentoSerelizer(serializers.ModelSerializer):
    class Meta:
        model = Departamento
        fields = ('nmbre_dprtmnto')
                
class TransformadorSerelizer(serializers.ModelSerializer):
    class Meta:
        model = Transformador
        fields = ('nmro_unco_idntfccn_sub_estcn','tnsn_prmra','tnsn_mxma_srvco','tnsn_scndra','ptnca_nmnl','rlcn_trnsfrmcn','intnsdd_nmnl_prmra','tnsn_crto_crcto','grpo_cnxn','lngtd','lttd')
        
class PagoSerelizer(serializers.ModelSerializer):
    class Meta:
        model = Pago
        fields = ('nmro_unco_idntfccn_bnco','cnsctvo_fctra','vlr_pgdo','nmro_unco_idntfccn_usro','fcha_pgo')
        
class BancoSerelizer(serializers.ModelSerializer):
    class Meta:
        model = Banco
        fields = ('nmbre_bnco','drccn','tlfno','cnsctvo_cdd')
        
class ClienteSerelizer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ('cnsctvo_tpo_idntfcn','nmro_idntfccn','prmr_nmbre','sgndo_nmbre','prmr_aplldo','sgndo_aplldo','fcha_ncmnto','cnsctvo_tpo_clnte')

class ContratoSerelizer(serializers.ModelSerializer):
    class Meta:
        model = Contrato
        fields = ('nmro_unco_idntfccn_clnte','estrt_scl','drccn','cnsctvo_cdd')
        
class ConsumoSerelizer(serializers.ModelSerializer):
    class Meta:
        model = Consumo
        fields = ('nmro_unco_idntfccn_cntrto','kwh','prdo_cnsmo')
                
class FacturacionSerelizer(serializers.ModelSerializer):
    class Meta:
        model = Facturacion
        fields = ('cnsctvo_cnsmo','cnsctvo_trfa','vlr_cnsmo','vlr_intrss_mra','vlr_rcnxn','vlr_ttl','fcha_lmte_pgo','cntdd_fctrs_pndts','fcha_crte_srvco','estdo_fctra')
        
class SubEstacionSerelizer(serializers.ModelSerializer):
    class Meta:
        model = SubEstacion
        fields = ('nombre','drccn','tlfno','cnsctvo_cdd','lngtd','lttd')
        
class CiudadSerelizer(serializers.ModelSerializer):
    class Meta:
        model = Ciudad
        fields = ('cnsctvo_dprtmnto','nmbre_cdd')
        