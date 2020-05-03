import React, { useRef, useEffect, useState } from 'react'


function ModificarPub(props) {

    //La referencia para poder enfocar
    const myRef = useRef();

    //Los estados, los cuales almacenan los valores de los inputs
    const [publicidad, setPublicidad] = useState({
        id: '',
        titulo: '',
        descripcion: '',
        url: ''
    })

    //Este hook me permite enfocar el input id, cada vez que intente crear o modificar.
    //Tambien me permite actualizar los estados de acuerdo a los datos que se envian a traves de los props.
    useEffect(() => {
        myRef.current.focus();
        actualizar();
    }, [props.idRow])


    //Este metodo actualiza los estados de acuerdo a los props.
    const actualizar = () => {
        setPublicidad({
            ...publicidad,
            id: props.idRow,
            titulo: props.titulo,
            descripcion: props.descripcion,
            url: props.url

        })
    }


    //Cada vez que se escriba en un input el valor se almacena en los estados
    const onChange = e => {
        setPublicidad({
            ...publicidad,
            [e.target.name]: e.target.value

        })
        console.log(publicidad)
    }

    return (<div className="container">
        <br /><br /><br /><br /><br />
        <h1 className="text-center">{props.h1}</h1>
        <br /><br /><br />
        <form onSubmit={(event) =>props.onSubmit(event,publicidad)}>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label for="titulo">Titulo</label>
                    <input ref={myRef} name="titulo" onChange={onChange}  required type="text" value={publicidad.titulo} className="form-control" id="inputPassword4" />
                </div>
            </div>
            <div className="form-group">
                <label for="descripcion">Descripción</label>
                <input name="descripcion" onChange={onChange} required type="text" value={publicidad.descripcion} className="form-control" id="inputAddress"/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label for="url">URL imágen</label>
                    <input name="url" onChange={onChange} required type="text" className="form-control" id="inputCity" value={publicidad.url} />
                </div>
               
            </div>
            <br /><br />
            <div className="form-row">
                <button type="submit" className="btn btn-primary mx-auto d-block col-md-5" >{props.nameBtn}</button>
                <button onClick={props.cancelar} className="btn btn-danger mx-auto d-block col-md-5" >Cancelar</button>
            </div>
        </form>
        <br />
        <br />
    </div>

    )

}


export default ModificarPub

