import React, { useState, useEffect } from "react";
import Usuario from './Usuario';
import { createUsuario, getListUsuario } from "./usuarioService";

function functionUsuario () {
  const [usuario, setUsuario] = useState([]);

  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const onChange = (event) => {   
    if (event.target.name==='Id')    
    setId(event.target.value)
    if (event.target.name==='nombre')
    setNombre(event.target.value)
    if (event.target.name==='email')
    setEmail(event.target.value)
  } 
  const saveUsuario = (event) => {

    event.preventDefault();
    createUsuario({
      id:id,
      nombre:nombre,
      email: email,
    });
  }

  useEffect(() => {    
    getListUsuario().then(data => {
      setUsuario(data);
    }
    );

  }, []);
  return (
    <div>
      <h2>Lista de usuarios</h2>
      <UsuarioList>
        <form onSubmit={saveUsuario}>
          <label>
            Id:
            <input name="id" onChange={onChange} value={id}/>
          </label>
          <label>
            Nombre de usuario
            <input name ="nombre" onChange={onChange} value={nombre} />
          </label>
          <label>
            Email
            <input name ="email" onChange={onChange} value={email}/>
          </label>
          <button type="submit">Guardar</button>
        </form>

        {
          usuario.map(item =>
            <Usuario
              key={item.id}
              itemUsuario={item} />
          )
        }
      </UsuarioList>
    </div>
  );
}

export default App;
