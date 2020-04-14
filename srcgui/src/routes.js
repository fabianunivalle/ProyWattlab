import React from 'react';
//CONFIGURACION
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import PrivateRoute from './privateRouter'

//COMPONENTES
import InformacionServicios from './container/InformacionServicios';
import MenuInicio from './container/MenuInicio';
import Login from './componentes/Login';
import PQRS from './componentes/PQRS';
import ConsultaFactura from './componentes/ConsultaFactura';
import ModuloAdministrador from './container/ModuloAdministrador';
import MADashboard from './container/MADashboard';
import MAUsers from './container/MAUsers';
import MATransformadores from './container/MATransformadores';

function BaseRouter() {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MenuInicio} />
                        <Route exact path="/InformacionServicios" component={InformacionServicios} />
                        <Route exact path="/PQRS" component={PQRS} />
                        <Route exact path="/ConsultaFactura" component={ConsultaFactura} />
                        <PrivateRoute exact path="/ModuloAdministrador" component={ModuloAdministrador} />
                        <PrivateRoute exact path="/ModuloAdministrador/Dashboard" component={MADashboard} />
                        <PrivateRoute exact path="/ModuloAdministrador/Users" component={MAUsers} />
                        <PrivateRoute exact path="/ModuloAdministrador/Transformadores" component={MATransformadores} />
                        <Route exact path="/Login" component={Login} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default BaseRouter;