import React, { Component}from 'react'
import FilaTable from './FilaTable';


class Table extends Component {



    tablaPublicidad = () =>{
        return(<React.Fragment>
                    <table className="table">
            
            <thead className="thead-dark">
                <tr>
                    <th scope="col">{this.props.t1}</th>
                    <th scope="col">{this.props.t2}</th>
                    <th scope="col">{this.props.t3}</th>
                    <th scope="col">{this.props.t4}</th>
                    <th scope="col">{this.props.t5}</th>
                    <th scope="col">{this.props.t6}</th>
                    <th scope="col">{this.props.t7}</th> 
                </tr>
            </thead>
            <tbody> 
                    {this.props.datos.map(fila =>(
                        <FilaTable 
                            modificar={this.props.modificar}
                            tipo='publicidad'
                            key={fila.id}
                            id={fila.id} 
                            dato1={fila.user} 
                            dato2={fila.imageWidth} 
                            dato3={fila.views} 
                            dato4={fila.likes}
                            imagen={fila.largeImageURL}/>
                    ))}               
            </tbody>           
        </table>
           </React.Fragment>)
    }


    tablaUsuario = () =>{
        return(<React.Fragment>
                    <table className="table">
            
            <thead className="thead-dark">
                <tr>
                    <th scope="col">{this.props.t1}</th>
                    <th scope="col">{this.props.t2}</th>
                    <th scope="col">{this.props.t3}</th>
                    <th scope="col">{this.props.t4}</th>
                    <th scope="col">{this.props.t5}</th>
                    <th scope="col">{this.props.t6}</th>
                    <th scope="col">{this.props.t7}</th>
                       
                </tr>
            </thead>
            <tbody> 
                    {this.props.datos.map(fila =>(
                        <FilaTable 
                            modificar={this.props.modificar}
                            tipo='usuario'
                            key={fila.id}
                            id={fila.id} 
                            dato1={fila.name} 
                            dato2={fila.username} 
                            dato3={fila.email}
                            dato4={fila.website}/>
                    ))}               
            </tbody>           
        </table>
           </React.Fragment>)
    }




    mostrarTabla = () =>{
        if(this.props.tabla==='publicidad'){
            return this.tablaPublicidad()
        }
        if(this.props.tabla==='usuario'){
            return this.tablaUsuario()
        }else{
            return null
        }
    }



    render(){return (   
        this.mostrarTabla()
    )}
    
}

export default Table
