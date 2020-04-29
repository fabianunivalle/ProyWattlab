
import Encabezado from './Encabezado';
import React, { Component } from 'react';
import Table from './Table'
import ModificarUse from './ModificarUse'
import BackService from '../store/PeticionesBack';
const solicitudBack = new BackService();



class Usuarios extends Component {

    handleCrearUsuario = async (e, usuario) => {
        e.preventDefault()
        console.log(usuario)
        solicitudBack.postRegisterUser(usuario
        ).then(res => {
            console.log(res)
                this.solicitud()           
        })
            .catch(error => console.log(error))
        this.cerrarFormulario()
       
    }

    handleModificarUsuario = async (e ,usuario) =>{
        e.preventDefault()
        solicitudBack.putUpdateUser(usuario
            ).then(res => {
                console.log(res)
                    this.solicitud()           
            })
                .catch(error => console.log(error))
                this.cerrarFormulario()
    }
    

    cambiarEstadoUser = (usuario) =>{
        console.log(usuario)
        solicitudBack.putUpdateUser(usuario
            ).then(res => {
                console.log(res)
                    this.solicitud()
                    
            })
                .catch(error => console.log(error))
    }

    //Con estos estados me doy cuenta que boton se presiono si el modificar o el nuevo
    state = {
        banderaD:false,
        banderaM: false,
        banderaN: false,
        id: '',
        usuario: '',
        nombre: '',
        apellido: '',
        email: '',
        perfil: '',
        datos: []
    }

    //Con estos estado almaceno los datos que recibo de table y los mando al formulario 
    //En este estado almaceno los datos que recibo de la api

    
    async componentDidMount() {
        this.solicitud()
    }

    solicitud = () => {
        solicitudBack.getListUser()//Envio de datos al back
            .then(res => {
                this.setState({
                    datos: res
                })
            })

        console.log('se esta llamando')
        console.log(this.state.datos)
    }

    

    cerrarFormulario = () => {
        this.setState({
            banderaM: false,
            banderaN: false
        })
    }


    mostrarTable = () => {
        return (
            <React.Fragment>
                <div className="container pre-scrollable" style={{ marginTop: "10px", maxHeight: "350px", marginBottom: "20px" }}>
                    <Table t1='Id' t2='Usuaio' t3='Nombre' t4='Apellido' t5='Email' t6='Perfil' t7='Modificar' t8='Estado' tabla='usuario' datos={this.state.datos} modificar={this.modificar} cambiarEstado={this.cambiarEstadoUser}/>
                </div>
            </React.Fragment>
        )
    }


    //En este solicito los datos a la api, y los guardo en el estado datos.
    //Con este metodo de acuerdo al boton que haya presionado si modificar o nuevo, se llama el componente formulario
    mostrarFormulario = () => {
        if (this.state.banderaM === true) {
            return (<ModificarUse
                id={'Modificar'}
                onSubmit={this.handleModificarUsuario}
                idRow={this.state.id}
                usuario={this.state.usuario}
                nombre={this.state.nombre}
                apellido={this.state.apellido}
                email={this.state.email}
                perfil={this.state.perfil}
                titulo={'Modificar Usuario'}
                nameBtn={'Modificar Usuario'}
                cancelar={this.cerrarFormulario} 
                />
            )
        }
        else if (this.state.banderaN === true) {
            return (<ModificarUse
                onSubmit={this.handleCrearUsuario}
                id={'Nuevo'}
                idRow={''}
                usuario={''}
                nombre={''}
                apellido={''}
                email={''}
                perfil={''}
                titulo={'Nuevo Usuario'}
                nameBtn={'Crear Usuario'}
                cancelar={this.cerrarFormulario} 
               />
            )
        }
        return null
    }

    //Este el metodo que le envio a la table para que se ejecute en ese componente y me traiga los datos de la fila que se va a modificar
    //y junto con este actualizo la banderaMa true para que se muestre el formulario correspondiente
    modificar = (id, usuario, nombre, apellido, email, perfil) => {
        this.setState({
            id: id,
            usuario: usuario,
            nombre: nombre,
            apellido: apellido,
            email: email,
            perfil: perfil,
            banderaM: true,
            banderaN: false,
        })
    }

    //Cuando presione en nuevo cambia la banderaN a true para mostrar el formulario correspondiente
    nuevo = () => {
        this.setState({
            banderaM: false,
            banderaN: true,
        });
    }

    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: "white", position: "absolute", top: "70px", left: "0px" }}>
                <Encabezado
                    titulo='users_panel'
                    descripcion='users_panel_description'
                />
                <div className="container" style={{ justifyContent: "center" }}>
                    <form>
                        <div className="form-row justify-content-between">
                            <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12" style={{ marginBottom: "10px" }}>
                                <div className="input-group">
                                    <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required></input>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend2">
                                            <svg className="bi bi-search" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd" />
                                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1 col-md-1 col-auto mr-auto">
                                <button className="btn btn-success" type="button">Buscar</button>
                            </div>
                            <div className="col-auto">
                                <button className="btn btn-danger" type="button" onClick={this.nuevo}>
                                    <svg className="bi bi-person-plus-fill" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm7.5-3a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z" clip-rule="evenodd" />
                                        <path fill-rule="evenodd" d="M13 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clip-rule="evenodd" />
                                    </svg>
                                &nbsp; Nuevo
                            </button>
                            </div>
                            {this.mostrarTable()}
                        </div>

                    </form>
                </div>
                {this.mostrarFormulario()}
            </div>
        )
    }
}

export default Usuarios;