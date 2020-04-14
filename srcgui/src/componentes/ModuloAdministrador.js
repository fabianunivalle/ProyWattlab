import React, { Component } from 'react'; 
import Sidebar from './Sidebar';
import { Layout } from 'antd';
import Inicio from './Inicio';
  
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