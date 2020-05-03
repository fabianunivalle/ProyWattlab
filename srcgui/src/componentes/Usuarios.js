import React from 'react';
import Encabezado from './Encabezado';
import BotonModificar from './BotonModificar';
import BotonInactivar from './BotonInactivar';
import { useTranslation } from 'react-i18next';

function Usuarios() {
    const i18n = useTranslation();
    return (
        <div className="container-fluid" style={{backgroundColor: "white", position: "absolute", top: "70px", left: "0px"}}>
            <Encabezado
            titulo = {i18n.t('users-panel.usr_int-title')}
            descripcion = {i18n.t('users-panel.usr_int-description')}/>
            <div className="container" style={{justifyContent: "center"}}>
                <form>
                    <div className="form-row justify-content-between">
                        <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12" style={{marginBottom: "10px"}}>
                            <div className="input-group">
                                <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required></input>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend2">
                                    <svg class="bi bi-search" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
                                    </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-auto mr-auto">
                            <button className="btn btn-success" type="button">{i18n.t('users-panel.usr_btn-search')}</button>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-danger" type="button">
                            <svg class="bi bi-person-plus-fill" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm7.5-3a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M13 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clip-rule="evenodd"/>
                            </svg>
                                &nbsp; {i18n.t('users-panel.usr_btn-new')}
                            </button>
                        </div>
                    </div>
                    <div className="container pre-scrollable" style={{marginTop: "10px", maxHeight: "350px", marginBottom: "20px"}}>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">{i18n.t('users-panel.usr_id')}</th>
                                    <th scope="col">{i18n.t('users-panel.usr_name')}</th>
                                    <th scope="col">{i18n.t('users-panel.usr_type')}</th>
                                    <th scope="col">{i18n.t('users-panel.usr_state')}</th>
                                    <th scope="col">{i18n.t('users-panel.usr_date-init')}</th>
                                    <th scope="col">{i18n.t('users-panel.usr_opts')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1111111</th>
                                    <td>Mark Otto</td>
                                    <td>Operador</td>
                                    <td>Activo</td>
                                    <td>21-03-2020</td>
                                    <td>
                                        <BotonModificar/>
                                        &nbsp;
                                        <BotonInactivar/>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">1111111</th>
                                    <td>Mark Otto</td>
                                    <td>Operador</td>
                                    <td>Activo</td>
                                    <td>21-03-2020</td>
                                    <td>
                                        <BotonModificar/>
                                        &nbsp;
                                        <BotonInactivar/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Usuarios;