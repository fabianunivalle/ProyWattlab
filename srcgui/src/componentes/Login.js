import React from 'react';
import Footer from './Footer';
import i18n from '../i18next';
import ReCAPTCHA from "react-google-recaptcha";
import './style/recaptcha.css';

import { Layout, AutoComplete } from 'antd';

function onChange(value) {
    console.log("Captcha value:", value);
}

class Login extends React.Component {
    
    render() {
        return (
            <Layout className="layout">
                <main role="main" className="flex-shrink-0 mt-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <img src="../imagenes/Bombillo.jpg" className="img-fluid" alt="Responsive image"></img>
                        </div>
                        <div className="col-lg-4">
                            <div className="container" style={{marginTop: 80, marginBottom: 70}}>
                                <form>
                                    <div>
                                        <h1>WATTLAB</h1>
                                        <p>{i18n.t('info_login')}</p>
                                    </div>
                                    
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Número de documento"></input>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" placeholder="Contraseña"></input>
                                    </div>
                                    <div className="recaptcha">
                                        <ReCAPTCHA size="normal" badge="inline" sitekey="6Ld-P9wUAAAAAJe-rewj_A9_m2B-X6B3YsVMvK5i" onChange={onChange} />
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-success btn-block">Enviar</button>
                                    </div>
                                    <div style={{marginTop: 15}}>
                                        <a href="#" className="text-decoration-none">¿Has olvidado tu contraseña?</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <div>
                    <Footer/>
                </div>
            </Layout>
        );
    }
}

export default Login;