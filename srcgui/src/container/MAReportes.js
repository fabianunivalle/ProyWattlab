import React, { Component } from 'react'; 
import i18n from '../i18next';
import Sidebar from '../componentes/Sidebar';
import { Layout } from 'antd';
import { Chart } from "react-google-charts";
import Reportes from '../componentes/Reportes';


class MAReportes extends Component {
    
    render() {
        
        return (
            <Layout className="layout" style={{backgroundColor: "white"}}>
                <div>
                    <Sidebar/>
                </div>
                <div className="container" style={{ display: 'flex', maxWidth: 900 }}>
                    <Reportes/>
                </div>
            </Layout>
            
        );
    }

}

export default MAReportes;