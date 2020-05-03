import React from 'react';
import { useTranslation } from 'react-i18next';

function Transformador() {
    const i18n = useTranslation();
    return (
        <div className="container">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="">ID Transformador</label>
                        <input type="text" className="form-control" id="idtransformador"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">Subestación</label>
                        <select id="listaSubestacion" className="form-control">
                            <option defaultValue>Sub1</option>
                            <option>Sub2</option>
                            <option>Sub3</option>
                            <option>Sub4</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">Grupo de conexión</label>
                        <select id="grupoConexion" className="form-control">
                            <option defaultValue>Estrella</option>
                            <option>Triángulo</option>
                            <option>Zig Zag</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="">Tensión primaria</label>
                        <input type="text" className="form-control" id="tensionPrimaria"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">Tensión máxima</label>
                        <input type="text" className="form-control" id="tensionMaxima"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">Tensión secundaria</label>
                        <input type="text" className="form-control" id="tensionSecundaria"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="">Potencia nominal</label>
                        <input type="text" className="form-control" id="potenciaNominal"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">Intensidad nominal</label>
                        <input type="text" className="form-control" id="intensidadNominal"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="">Tensión cortocircuito</label>
                        <input type="text" className="form-control" id="tensionCortocircuito"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="">Relación de transformador</label>
                        <input type="text" className="form-control" id="relacionTransformador"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="">Ubicación</label>
                        <button type="submit" id="seleccionEnMapa" className="btn btn-danger btn-block">
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

export default Transformador;