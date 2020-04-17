import React, {useRef, useEffect, useState} from 'react'


function ModificarPub (props){

    //La referencia para poder enfocar
    const myRef = useRef();

    //Los estados, los cuales almacenan los valores de los inputs
    const [input, setInput] = useState({
        id:'',
        nombre:'',
        descrip:'',
        url:''
    })

    //Este hook me permite enfocar el input id, cada vez que intente crear o modificar.
    //Tambien me permite actualizar los estados de acuerdo a los datos que se envian a traves de los props.
    useEffect(() => {
        myRef.current.focus();
        actualizar();
    },[props.idRow])

   
    //Este metodo actualiza los estados de acuerdo a los props.
    const actualizar = () =>{
        setInput({
            ...input,
            id:props.idRow,
            nombre:props.dato1,
            descrip:props.dato2,
            url:props.dato3

        })
    }

  
    //Cada vez que se escriba en un input el valor se almacena en los estados
    const onChange = e =>{     
        setInput({
            ...input,
            [e.target.name]: e.target.value  
              
        }) 
    }

    return(<div className="container">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 className="text-center">{props.titulo}</h1>
            <br/>
            <br/>
            <br/>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputEmail4">Id</label>
                    <input name="id" onChange={onChange} ref={myRef} type="text"  value={input.id} className="form-control" id="inputEmail4"  />
                    </div>
                    <div className="form-group col-md-6">
                    <label for="inputPassword4">Nombre</label>
                    <input name="nombre" onChange={onChange} type="text" value={input.nombre} className="form-control" id="inputPassword4"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Descripción</label>
                    <input name="descrip" onChange={onChange}  type="text" value={input.descrip} className="form-control" id="inputAddress" placeholder="..."/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputCity">URL imágen</label>
                    <input name="url" onChange={onChange} type="text"  className="form-control" id="inputCity" value={input.url} />
                    </div>
                    <div className="form-group col-md-6">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
                        <option>Elija una opción</option>
                        <option>Activo</option>
                        <option>Inactivo</option>
                    </select>
                    </div>
                </div>
                <br/>
                <br/>
                <button type="submit" className="btn btn-primary mx-auto d-block col-md-4" >{props.nameBtn}</button>
                </form>
                <br/>
                <br/>
        </div>
        
    )

}


export default ModificarPub

