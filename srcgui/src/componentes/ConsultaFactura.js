import React from 'react';
import { Layout } from 'antd';
import Menu from './Menu';
import Footer from './Footer';

class ConsultaFactura extends React.Component {
    render() {
        return (
            <Layout className="layout" style={{backgroundColor: "white"}}>
                <div>
                    <Menu/>
                </div>
                <div style={{marginTop: "70px", marginLeft: "0px", marginRight: "0px"}}>
                    <img className="img-fluid" alt="Responsive image" src='../imagenes/ConsultaFactura.jpg'></img>
                </div>
                <div className="container-fluid" style={{marginTop: "10px", marginBottom: "10px"}}>
                    <div className="form-row justify-content-lg-center justify-content-md-center" style={{marginTop: "20px"}}>
                        <div className="col-lg-3 col-md-4 col-sm-3 col-xs-12">
                            <p>Digite su número de documento</p>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-3 col-xs-12">
                            <input className="form-control" placeholder="" style={{marginBottom: "10px"}}></input>
                        </div>
                        <div className="btn-group col-lg-3 col-md-4 col-sm-3 col-xs-12">
                            <button type="button" className="btn btn-success btn-default" style={{marginRight: "10px", width: "80px", height: "40px"}}>Buscar</button>
                            <button type="button" className="btn btn-success btn-default" style={{ width: "80px", height: "40px"}}>Limpiar</button>
                        </div>
                    </div>
                    <div className="container pre-scrollable" style={{marginTop: "10px", maxHeight: "350px", marginBottom: "20px"}}>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Factura #</th>
                                    <th scope="col">Periodo</th>
                                    <th scope="col">Valor sin recargo</th>
                                    <th scope="col">Fecha sin recargo</th>
                                    <th scope="col">Valor con recargo</th>
                                    <th scope="col">Fecha con recargo</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Fecha pago</th>
                                    <th scope="col">Valor pagado</th>
                                    <th scope="col">Funciones</th>
                                </tr>
                                <tr>
                                    <td>20050</td>
                                    <td>Enero 2020</td>
                                    <td>$70.000</td>
                                    <td>30-01-2020</td>
                                    <td>$100.000</td>
                                    <td>30-03-2020</td>
                                    <td><span className="badge badge-danger">Sin pagar</span></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>65200</td>
                                    <td>Diciembre 2019</td>
                                    <td>$80.000</td>
                                    <td>30-12-2019</td>
                                    <td>$110.000</td>
                                    <td>30-02-2020</td>
                                    <td><span className="badge badge-success">Pagado</span></td>
                                    <td>28-12-2019</td>
                                    <td>$80.000</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>65200</td>
                                    <td>Noviembre 2019</td>
                                    <td>$80.000</td>
                                    <td>30-12-2019</td>
                                    <td>$110.000</td>
                                    <td>30-02-2020</td>
                                    <td><span className="badge badge-success">Pagado</span></td>
                                    <td>28-12-2019</td>
                                    <td>$80.000</td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td>65200</td>
                                    <td>Octubre 2019</td>
                                    <td>$80.000</td>
                                    <td>30-12-2019</td>
                                    <td>$110.000</td>
                                    <td>30-02-2020</td>
                                    <td><span className="badge badge-success">Pagado</span></td>
                                    <td>28-12-2019</td>
                                    <td>$80.000</td>
                                    <td></td>
                                 </tr>
                                 <tr>
                                    <td>65200</td>
                                    <td>Septiembre 2019</td>
                                    <td>$80.000</td>
                                    <td>30-12-2019</td>
                                    <td>$110.000</td>
                                    <td>30-02-2020</td>
                                    <td><span className="badge badge-success">Pagado</span></td>
                                    <td>28-12-2019</td>
                                    <td>$80.000</td>
                                    <td></td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </Layout>
        );
    }
}

export default ConsultaFactura;