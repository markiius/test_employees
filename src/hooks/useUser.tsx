import React, { useState,useEffect } from 'react'
import { fetchUsers } from '../helpers/fetchUsers';

export const useUser = () => {
    const [cargando, setCargando] = useState(true);
    const [usuarios, setUsuarios] = useState<any>([]);

    useEffect(() => {
      fetchUsers()
        .then(users =>{
            setCargando(false);
            setUsuarios(users.data.employees); 
        });
    }, [])

    const agregarUsuario = async (empleado:any) =>{
        const res = await fetch('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/Marco Antonio Silva Perez',{
         method: 'POST',
         body: JSON.stringify(empleado)
        });
        if(res.ok){
            setUsuarios([...usuarios,empleado]);
            alert('Empleado guardado');
        }
        
        
    }
    return {
        cargando,
        usuarios,
        agregarUsuario
    }
}
