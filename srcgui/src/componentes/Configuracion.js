import React from 'react';
import { useTranslation } from 'react-i18next';
import Encabezado from './Encabezado';

function Configuracion() {
    const i18n = useTranslation();

    return (
        <div className="container-fluid" style={{backgroundColor: "white", position: "absolute", top: "70px", left: "0px"}}>
            <Encabezado
                titulo = "Configuración"
                descripcion = "Ajuste de tarifas por periodo de tiempo"
            />
            <div className="container">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label>Valor del kWh</label>
                        <input type="text" className="form-control" id="valorKWH"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Inicio vigencia tarifa</label>
                        <input type="date" className="form-control" id="inicioVigencia"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label>Fin vigencia tarifa</label>
                        <input type="date" className="form-control" id="finVigencia"></input>
                    </div>
                    <div className="form-group col-md-12">
                        <label>Observaciones</label>
                        <input type="text" maxlength="150" className="form-control" id="observaciones"></input>
                    </div>
                    <div className="col align-self-center">
                        <button type="submit" className="btn btn-success" style={{marginBottom: "10px", width: "150px", marginRight: "10px"}}>Aceptar</button>
                        <button type="submit" className="btn btn-danger" style={{marginBottom: "10px", width: "150px"}}>Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Configuracion;