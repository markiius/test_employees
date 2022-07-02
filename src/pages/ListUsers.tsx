import React,{useState} from 'react';
import {Navigate } from "react-router-dom";
import {useContext} from "react";
import {AppContext} from '../Context/AppContext';
import {Nav} from '../pages/generales/Nav'
import {TablaUsuario} from '../Components/TablaUsuario';
import {useUser} from '../hooks/useUser';

export const ListUsers = ():JSX.Element => {
   const {userInfo} = useContext(AppContext);
   const [name,setName]  = useState('');
   const [lastname, setLastname] = useState('');
   const [birthday,setBirthday] = useState('');
   const [mensaje,setMensaje] = useState('');
   const { agregarUsuario } = useUser(); 
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(name.length>0 && lastname.length>0 && birthday){
      if(name.length>30 || lastname.length>30){
          setMensaje('El nombre o apellido debe ser menor a 30 caracteres')
      }else{
        setMensaje('')
        setName('');
        setLastname('');
        setBirthday('');
        agregarUsuario({
          "name":name,
          "last_name":lastname,
          "birthday": birthday
        });
      }
    }else{
        setMensaje('Todos los campos son obligatorios')
    }
  }
   
  if(!userInfo) {
    return <Navigate to="/"/>
  }else{
    return (
      <>
      <Nav/>
      <div className="container">
      <div className="row">
        <div className="col-4">
        <form className="mt-5" onSubmit={handleSubmit}>
        <div className="mb-3">
    <label  className="form-label">Nombre:</label>
    <input 
    type="text" 
    className="form-control"
    placeholder="Ingrese nombre"
    onChange={(e) => setName(e.target.value)}
    value={name}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Apellidos</label>
    <input 
      type="text"
      className="form-control" 
      placeholder="Ingrese pellidos"
      value={lastname}
      onChange={(e) =>setLastname(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Fecha de nacimiento</label>
    <input 
      type="date"
      className="form-control" 
      placeholder="Ingrese fecha de nacimiento"
      value={birthday}
      onChange={(e)=>setBirthday(e.target.value)}
    />
  </div>
  <h6>{mensaje}</h6>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
        <div className="col-8">
          <TablaUsuario/>
        </div>
      </div>
    </div>
      </>
    )
  }
}
