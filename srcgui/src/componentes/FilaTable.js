import React from 'react';


function FilaTable (props){


    /* Elijo cuantas celdas quiero ver en la tabla dependiendo del prop tipo que haya enviado*/
    const pintarCeldas = ()=>{
        switch(props.tipo){
            case 'usuario':{
                return (
                    <React.Fragment>
                        <td>{props.dato1}</td>
                        <td>{props.dato2}</td>
                        <td>{props.dato3}</td>
                        <td>{props.dato4}</td>

                    </React.Fragment>
                )
            }
            case 'publicidad':{
                return (
                    <React.Fragment>
                        <td>{props.dato1}</td>
                        <td>{props.dato2}</td>
                        <td>{props.dato3}</td>
                        <td><img className="icon-publicidad" src={props.imagen}></img></td>
                    </React.Fragment>
                )
            }
            case 3:{
                return (
                    <React.Fragment>
                        <td>{props.dato1}</td>
                        <td>{props.dato2}</td>
                        <td>{props.dato3}</td>
                    </React.Fragment>
                )
            }
            case 4:{
                return (
                    <React.Fragment>
                        <td>{props.dato1}</td>
                        <td>{props.dato2}</td>
                        <td>{props.dato3}</td>
                        <td>{props.dato4}</td>
                    </React.Fragment>
                )
            }
            default:{
                return(null)
            }
            
        }
    }

    /*Aqui pinta la fila, el id que es el pricipal, las celdas basicas, un icono, y los botones*/
    const mostrarFila= () =>{
        return(
            <React.Fragment>
                <tr>
                    {/* Columna principal (ID)*/}
                    <th scope="row">{props.id}</th>

                    {/*Datos los que quiera mostrar */}
                    {pintarCeldas()}

                    {/*Botones por defecto*/}
                    <td>
                        <button type="button" className="btn btn-success" style={{marginBottom: "10px", width: "130px"}} onClick={props.modificar.bind(this, props.id, props.dato1, props.dato2, props.dato3, props.dato4)}>
                            <svg className="bi bi-pencil-square" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clip-rule="evenodd"/>
                            </svg>
                            &nbsp; Modificar
                        </button>
                        &nbsp;
                    </td>
                    <td>
                        <button type="button" className="btn btn-danger" style={{marginBottom: "10px", width: "130px"}} >
                            <svg className="bi bi-eye-slash-fill" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 01-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 002.79-.588zM5.21 3.088A7.028 7.028 0 018 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 00-4.474-4.474L5.21 3.089z"/>
                                <path d="M5.525 7.646a2.5 2.5 0 002.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 012.829 2.829z"/>
                                <path fill-rule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z" clip-rule="evenodd"/>
                            </svg>
                            &nbsp; Inactivar
                        </button>
                    </td>
                </tr>
            </React.Fragment>
        )
    }


    return(mostrarFila())

}

export default FilaTable