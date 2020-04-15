import React, { Component } from 'react'; 
import i18n from '../i18next';
import Sidebar from '../componentes/Sidebar';
import { Layout } from 'antd';

class MAReportes extends Component {
    
    render() {
        
        return (
            <Layout className="layout">
                <div>
                    <Sidebar/>
                </div>
                <div className="container" style={{marginTop: "20px", textAlign: "center"}}>
                    <h1>Sección para reportes</h1>
                </div>
            </Layout>
            
        );
    }

}

export default MAReportes;