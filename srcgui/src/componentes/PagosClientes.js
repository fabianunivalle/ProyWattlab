import React from 'react';
import { useTranslation } from 'react-i18next';
import Encabezado from './Encabezado';

function PagosClientes() {
    const i18n = useTranslation();
    return (
        <div className="container-fluid" style={{backgroundColor: "white", position: "absolute", top: "70px", left: "0px"}}>
            <Encabezado
                titulo = "Panel de pagos de clientes"
                descripcion = "En esta sección usted podrá registrar los pagos de los clientes"/>
            <div className="container">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label># Referencia factura</label>
                        <input type="text" className="form-control" id="consecutivoFactura"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Fecha de pago</label>
                        <input type="date" className="form-control" id="fechaPago"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Fecha vencimiento</label>
                        <input type="date" value="2020-07-22" className="form-control" id="fechaVencimiento"></input>
                    </div>
                    <div className="form-group col-md-3">
                        <label>Tipo de pago</label>
                        <select id="formaPago" className="form-control">
                            <option defaultValue>--</option>
                            <option>Efectivo</option>
                            <option>Transferencia bancaria</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label>Valor pagado</label>
                        <input type="text" className="form-control" id="valorPagado"></input>
                    </div>
                    <div className="form-group col-md-3">
                        <label>Seleccione el Banco</label>
                        <select id="idBanco" className="form-control">
                            <option defaultValue>--</option>
                            <option>Banco 1</option>
                            <option>Banco 2</option>
                            <option>Banco 3</option>
                        </select>
                    </div>
                    <div className="form-group col-md-3">
                        <label>Estado factura</label>
                        <input placeholder="Generada" type="text" className="form-control" id="estadoFactura" disabled></input>
                    </div>
                    <div className="col align-self-center">
                        <button type="submit" className="btn btn-success" style={{marginBottom: "10px", width: "150px", marginRight: "10px"}}>Guardar</button>
                        <button type="submit" className="btn btn-danger" style={{marginBottom: "10px", width: "150px"}}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PagosClientes;