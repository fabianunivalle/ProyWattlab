import React from 'react';
import { Translation } from 'react-i18next'; // Necesario para traducir clases.
//import { useTranslation } from 'react-i18next';
import { Carousel } from 'antd';
import './style/slides.css';

class Slides extends React.Component {
    render() {
        return (
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../imagenes/slides/Cali.jpg" class="d-block w-100" alt="holaaa"></img>
                    </div>
                    <div class="carousel-item">
                        <img src="../imagenes/slides/Slide1.jpg" class="d-block w-100" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block">
                            <Translation>
                                {(t, { i18n }) => <h3 style={{color: "white"}}>{t('slide1_title')}</h3>}
                            </Translation>

                            <Translation>
                                {(t, { i18n }) => <p>{t('slide1_text')}</p>}
                            </Translation>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../imagenes/slides/Slide0.jpg" class="d-block w-100" alt="..."></img>
                        <div class="carousel-caption d-none d-md-block d-xs-block">
                            <Translation>
                                {(t, { i18n }) => <h1 style={{fontWeight: "bold"}}>{t('slide2_title')}</h1>}
                            </Translation>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        );
    }
}
export default Slides;