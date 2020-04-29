import React from 'react';
import BotonModificar from './BotonModificar';
import BotonInactivar from './BotonInactivar';


function FilaTable(props) {

    /* Elijo cuantas celdas quiero ver en la tabla dependiendo del prop tipo que haya enviado*/
    const pintarCeldas = () => {
        switch (props.tipo) {
            case 'usuario': {
                return (
                    <React.Fragment>
                        <td>{props.usuario}</td>
                        <td>{props.nombre}</td>
                        <td>{props.apellido}</td>
                        <td>{props.email}</td>
                        <td>{props.perfil}</td>
                        <td>
                            <BotonModificar
                                modificar={props.modificar.bind(this, props.id, props.usuario, props.nombre, props.apellido, props.email, props.perfil)}
                            />

                        </td>
                    </React.Fragment>
                )
            }
            case 'publicidad': {
                return (
                    <React.Fragment>
                        <td>{props.dato1}</td>
                        <td>{props.dato2}</td>
                        <td>{props.dato3}</td>
                        <td><img className="icon-publicidad" src={props.imagen}></img></td>
                    </React.Fragment>
                )
            }
            case 3: {
                return (
                    <React.Fragment>
                        <td>{props.dato1}</td>
                        <td>{props.dato2}</td>
                        <td>{props.dato3}</td>
                    </React.Fragment>
                )
            }
            case 4: {
                return (
                    <React.Fragment>
                        <td>{props.dato1}</td>
                        <td>{props.dato2}</td>
                        <td>{props.dato3}</td>
                        <td>{props.dato4}</td>
                    </React.Fragment>
                )
            }
            default: {
                return (null)
            }
        }
    }

    const mostrarBotonA = () => {
        if (props.estado === true) {
            return (
                <td>
                    <BotonInactivar cambiarEstado={props.cambiarEstado.bind(this, {"id": props.id, "is_active": false, "profile":{}})} nombre='Inactivar' claseBoton='btn btn-danger' />
                </td>
            )
        } else {
            return (
                <td>
                    <BotonInactivar cambiarEstado={props.cambiarEstado.bind(this, {"id": props.id, "is_active": true, "profile":{}})}   nombre='Activar' claseBoton='btn btn-primary' />
                </td>
            )
        }
    }
    /*Aqui pinta la fila, el id que es el pricipal, las celdas basicas, un icono, y los botones*/
    const mostrarFila = () => {
        return (
            <React.Fragment>
                <tr>
                    {/* Columna principal (ID)*/}
                    <th scope="row">{props.id}</th>
                    {/*Datos los que quiera mostrar */}
                    {pintarCeldas()}
                    {/*Botones por defecto*/}
                    {mostrarBotonA()}
                </tr>
            </React.Fragment>
        )
    }
    return (mostrarFila())
}

export default FilaTable