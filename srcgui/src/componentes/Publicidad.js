
import Encabezado from './Encabezado';
import Table from  './Table';
import { useTranslation } from 'react-i18next';
import './style/slides.css';

import React, { useState, useEffect } from 'react';
import ModificarPub from './ModificarPub';

function Publicidad (props) {

    const i18n = useTranslation();  

    //Con estos estados me doy cuenta que boton se presiono si el modificar o el nuevo
    const [bandera, setBanderaM] = useState({
        banderaM: false,
        banderaN:false
    });

    //Con estos estado almaceno los datos que recibo de table y los mando al formulario
    const [publicidad, setPublicidad] = useState({
            id:'',
            dato1:'',
            dato2:'',
            dato3:'',
            dato4:''
    });  
    
    //En este estado almaceno los datos que recibo de la api
    const [datos, guardarDatos] = useState([]);


    //En este solicito los datos a la api, y los guardo en el estado datos.
    useEffect(() => {

        const consultarApi = async () =>{
            const url = `https://pixabay.com/api/?key=15942366-50a086eca664aed7620a3d058&q=cafe&per_page=30`;            
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            guardarDatos(resultado.hits);  
         }  

        consultarApi();  

    }, [])
    
    //Con este metodo de acuerdo al boton que haya presionado si modificar o nuevo, se llama el componente formulario
    const mostrarFormulario=()=>{
        if(bandera.banderaM==true){
            return (<ModificarPub 
                        
                        id={'Modificar'} 
                        idRow={publicidad.id} 
                        dato1={publicidad.dato1}
                        dato2={publicidad.dato2}
                        dato3={publicidad.dato3}
                        dato4={publicidad.dato4}
                        titulo={'Modificar Publicidad'} 
                        nameBtn={'Modificar Publicación'}/>
                        )
        }
        else if(bandera.banderaN===true){
            return (<ModificarPub 
                    id={'Nuevo'} 
                    idRow={''} 
                    dato1={''}
                    dato2={''}
                    dato3={''}
                    dato4={''}
                    titulo={'Nueva Publicación'} nameBtn={'Crear Publicación'}/>)
        }
        return null
    }

    //Este el metodo que le envio a la table para que se ejecute en ese componente y me traiga los datos de la fila que se va a modificar
    //y junto con este actualizo la banderaMa true para que se muestre el formulario correspondiente
    const modificar = (id,dato1,dato2,dato3,dato4) => {
        setPublicidad({
            ...publicidad,
            id:id,
            dato1:dato1,
            dato2:dato2,
            dato3:dato3,
            dato4:dato4,
        });
        setBanderaM({
            ...bandera,
            banderaM: true,
            banderaN: false,
        });
    }
    
    //Cuando presione en nuevo cambia la banderaN a true para mostrar el formulario correspondiente
    const nuevo = () =>{
        setBanderaM({
            ...bandera,
            banderaM: false,
            banderaN: true,
        });
    }

    

    return (
            <div className="container-fluid" style={{backgroundColor: "white", position: "absolute", top: "70px", left: "0px"}}>
            <Encabezado
            titulo = "Panel de Publicidad"
            descripcion = "A continuación, encontrará el listado de publicidad"/>
            <div className="container" style={{justifyContent: "center"}}>
                <form>
                    <div className="form-row justify-content-between">
                        <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12" style={{marginBottom: "10px"}}>
                            <div className="input-group">
                                <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required></input>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend2">
                                    <svg className="bi bi-search" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
                                    </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-auto mr-auto">
                            <button className="btn btn-success" type="button">Buscar</button>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-danger" type="button" onClick={nuevo}>
                            <svg className="bi bi-file-plus" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1H4a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V8h-1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h5V1z"/>
                                <path fill-rule="evenodd" d="M13.5 1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V1.5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M13 3.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clip-rule="evenodd"/>
                            </svg>
                                &nbsp; Nuevo
                            </button>
                        </div>
                    </div>
                    
                    <div className="container pre-scrollable" style={{marginTop: "10px", maxHeight: "350px", marginBottom: "20px"}}>  
                         {console.log(datos)}
                         {/*El componente table donde le mando los atributos de la tabla,
                          la cantidad de datos sin contar el id, el icon y los botones.
                          Y los datos de la api. y el metodo modificar.                         
                         */}
                       <Table t1={'Id'} t2={'Nombre'} t3={'Descripcion'}  t4={'Estado'} t5={'Icono'} t6={'Acciones'} datos={datos} cantidad={3} modificar={modificar} /> 
                    </div>
                </form>
            </div>
            {mostrarFormulario()}
        
        </div>

    )
    
}

export default Publicidad
