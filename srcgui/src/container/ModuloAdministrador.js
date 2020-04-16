import React, { Component } from 'react'; 
import { Layout } from 'antd';

import Sidebar from '../componentes/Sidebar';
import Inicio from '../componentes/Inicio';
  
class ModuloAdministrador extends Component {   
    render() {     
        return (
            <Layout className="layout">
                <div>
                    <Sidebar/>
                </div>
                <div className="container" style={{marginTop: "20px", marginBottom: "20px"}}>
                    <Inicio/>
                </div>
            </Layout>       
        );
    }
}

export default ModuloAdministrador;
