import React, { useState, useEffect } from "react";
import './App.css';
import Administrador from './Administrador';
import { getListAdministrador, createAdministrador } from "./service/administradorService";

function App() {
  const [administrador, setAdministrador] = useState([]);

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
  const saveAdministrador = (event) => {

    event.preventDefault();
    createAdministrador({
      id:id,
      nombre:nombre,
      email: email,
    });
  }

  useEffect(() => {    
    getListAdministrador().then(data => {
      setAdministrador(data);
    }
    );

  }, []);
  return (
    <div>
      <h2>Lista de administradores</h2>
      <AdministradoresList>
        <form onSubmit={saveAdministrador}>
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
          administrador.map(item =>
            <Administrador
              key={item.id}
              itemAdministrador={item} />
          )
        }
      </AdministradoresList>
    </div>
  );
}

export default App;
