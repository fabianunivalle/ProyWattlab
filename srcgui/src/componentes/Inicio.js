import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import CardOpt from './CardOpt';
import Encabezado from './Encabezado';

function Inicio(props) {
  
  const i18n = useTranslation();
  const goto = (path) => {
    props.history.push(path);
  }

  return (
    <div className="container-fluid" style={{ textAlign: "center", backgroundColor: "white", position: "absolute", top: "70px", left: "0px" }}>
      <Encabezado
        titulo="Panel de administración"
        descripcion="A continuación, seleccione una de las siguientes opciones" />
      <div className="container">
        <div className="row justify-content-lg-center justify-content-md-center">
          <CardOpt
            goto={goto}
            modulo="Usuarios"
            urlRuta="/ModuloAdministrador/Users"
            color="#3298d1"
            d1="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            icono="bi bi-people-fill"
            informacion="Adicionar, editar y consultar usuarios" />

          <CardOpt
            goto={goto}
            modulo="Transformadores"
            urlRuta="/ModuloAdministrador/Transformadores"
            color="#32d156"
            d1="M8 16s6-5.686 6-10A6 6 0 002 6c0 4.314 6 10 6 10zm0-7a3 3 0 100-6 3 3 0 000 6z"
            icono="bi bi-geo-alt"
            informacion="Ubicación de los transformadores" />

          <CardOpt
            goto={goto}
            modulo="Reportes"
            urlRuta="/ModuloAdministrador/Reportes"
            color="#eabf2e"
            d="M0 0h1v16H0V0zm1 15h15v1H1v-1z"
            d1="M14.39 4.312L10.041 9.75 7 6.707l-3.646 3.647-.708-.708L7 5.293 9.959 8.25l3.65-4.563.781.624z"
            d2="M10 3.5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V4h-3.5a.5.5 0 01-.5-.5z"
            icono="bi bi-graph-up"
            informacion="Reporte de ingresos de la empresa" />

          <CardOpt
            goto={goto}
            modulo="Pagos"
            urlRuta="/ModuloAdministrador/Pagos"
            color="#ea2e2e"
            d1="M.125 11.17A.5.5 0 01.5 11H6a.5.5 0 01.5.5 1.5 1.5 0 003 0 .5.5 0 01.5-.5h5.5a.5.5 0 01.496.562l-.39 3.124A1.5 1.5 0 0114.117 16H1.883a1.5 1.5 0 01-1.489-1.314l-.39-3.124a.5.5 0 01.121-.393zM3.81.563A1.5 1.5 0 014.98 0h6.04a1.5 1.5 0 011.17.563l3.7 4.625a.5.5 0 01-.78.624l-3.7-4.624A.5.5 0 0011.02 1H4.98a.5.5 0 00-.39.188L.89 5.812a.5.5 0 11-.78-.624L3.81.563z"
            d2="M.125 5.17A.5.5 0 01.5 5H6a.5.5 0 01.5.5 1.5 1.5 0 003 0A.5.5 0 0110 5h5.5a.5.5 0 01.496.562l-.39 3.124A1.5 1.5 0 0114.117 10H1.883A1.5 1.5 0 01.394 8.686l-.39-3.124a.5.5 0 01.121-.393z"
            icono="bi bi-inboxes-fill"
            informacion="Registro de pago de servicios por clientes" />
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    auth: state.reducer
  }
};

export default withRouter(connect(mapStateToProps)(Inicio));
