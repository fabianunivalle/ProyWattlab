import React, {useState, useEffect}from 'react'
import FilaTable from './FilaTable';


function Table (props) {
    return (   
        <table className="table">
            
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">{props.t1}</th>
                                <th scope="col">{props.t2}</th>
                                <th scope="col">{props.t3}</th>
                                <th scope="col">{props.t4}</th>
                                <th scope="col">{props.t5}</th>
                                <th scope="col">{props.t6}</th>
                                <th scope="col">{props.t7}</th>
                                <th scope="col">{props.t8}</th>
                                <th scope="col">{props.t9}</th>    
                            </tr>
                        </thead>
                        <tbody> 
                                {/*Ideas para solucionar esto, 
                                    1) crear una constante que tenga valores generales y que dentro del componente
                                    se le asignen eso valores para finalmente ya enviarselo a table.
                                    2)Otra idea y nose si se pueda es que cada vez que se pida un json, 
                                    sus valores sean generecos ejemplo 
                                    (valor1:{
                                        id:xxx,
                                        dato1:xxx
                                        dato2:xxx,
                                        dato3:xxx,
                                        dato4:xxxx
                                    }) Espero se pueda o sino seria tomar la 3 opcion.
                                    3)Eliminar el componente table, ya que no se logro generalizar el componente para reutlizarlo

                                
                                */}
                                {props.datos.map(fila =>(
                                    <FilaTable 
                                        modificar={props.modificar}
                                        cantidad={props.cantidad}
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
    )
    
}

export default Table
