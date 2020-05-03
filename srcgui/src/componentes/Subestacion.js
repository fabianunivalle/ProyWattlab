import React from 'react';
import { useTranslation } from 'react-i18next';

function Subestacion() {
    const i18n = useTranslation();
    return (
        <div className="container">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="">ID Subestacion</label>
                        <input type="text" className="form-control" id="idSubestacion"></input>
                    </div>
                    <div className="form-group col-md-8">
                        <label htmlFor="">Nombre</label>
                        <input type="text" className="form-control" id="nombreSubestacion"></input>
                    </div>
                    <div className="form-group col-md-8">
                        <label htmlFor="">Dirección</label>
                        <input type="text" className="form-control" id="direccionSubestacion"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">Teléfono</label>
                        <input type="text" className="form-control" id="telSubestacion"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Ciudad</label>
                        <input type="text" className="form-control" id="ciudadSubestacion"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Ubicación</label>
                        <button type="submit" id="seleccionEnMapaSub" className="btn btn-danger btn-block">
                            <svg className="bi bi-geo-alt" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                            </svg>
                        &nbsp; Seleccionar en el mapa</button>
                    </div>
                </div>
                <button type="submit" id="añadir" className="btn btn-success btn-block">Añadir</button>
            </form>
        </div>
    );
}

export default Subestacion;