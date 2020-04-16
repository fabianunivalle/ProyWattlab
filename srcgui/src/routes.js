import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import InformacionServicios from './container/InformacionServicios';
import MenuInicio from './container/MenuInicio';
import Login from './componentes/Login';
import PQRS from './componentes/PQRS';
import ConsultaFactura from './componentes/ConsultaFactura';
import ModuloAdministrador from './componentes/ModuloAdministrador';
import MADashboard from './container/MADashboard';
import MAUsers from './container/MAUsers';
import MATransformadores from './container/MATransformadores';
import MAReportes from './container/MAReportes';
import MAPagos from './container/MAPagos';
import MAConfiguracion from './container/MAConfiguracion';

function BaseRouter() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={MenuInicio} />
                    <Route exact path="/InformacionServicios" component={InformacionServicios} />
                    <Route exact path="/PQRS" component={PQRS} />
                    <Route exact path="/ConsultaFactura" component={ConsultaFactura} />
                    <Route exact path="/ModuloAdministrador" component={ModuloAdministrador} />
                    <Route exact path="/ModuloAdministrador/Dashboard" component={MADashboard} />
                    <Route exact path="/ModuloAdministrador/Users" component={MAUsers} />
                    <Route exact path="/ModuloAdministrador/Transformadores" component={MATransformadores} />
                    <Route exact path="/ModuloAdministrador/Reportes" component={MAReportes} />
                    <Route exact path="/ModuloAdministrador/Pagos" component={MAPagos} />
                    <Route exact path="/ModuloAdministrador/Configuracion" component={MAConfiguracion} />
                    <Route exact path="/Login" component={Login} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default BaseRouter;