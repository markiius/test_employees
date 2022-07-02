import {ChangeEvent, useState } from 'react'
import {useUser} from '../hooks/useUser';
import { Cargando } from './Cargando';

export const TablaUsuario = ():JSX.Element => {
  const {cargando,usuarios} = useUser();
  const [paginaActual,setPaginaactual] = useState(0);
  const [buscador,setBuscador] = useState('');

  const listarDiezemplados = () =>{
    if(buscador.length === 0)
      return usuarios.slice(paginaActual,paginaActual + 10);
    
    const filtroEmpleados = usuarios.filter((empleado:any) => empleado.name.includes(buscador));
    return filtroEmpleados.slice(paginaActual,paginaActual + 10);
  }

  const siguientePag = () =>{
      if(usuarios.length > paginaActual + 10){
        setPaginaactual(paginaActual + 10);
      }else{
        setPaginaactual(0);
      }
  }

  const anteriorPag = () =>{
      if(paginaActual>0){
          setPaginaactual(paginaActual-10)
      }
  }

  const handleBuscador = (e:ChangeEvent<HTMLInputElement>) =>{
      setPaginaactual(0)
      setBuscador(e.target.value);

  }

  return (
    <div className="mt-5">
        <h5>Lista de usarios</h5>
        <hr/>
        <input
          type="text"
          className="mb-2 form-control"
          placeholder="Buscar empleado"
          onChange={handleBuscador}
        />
        <table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Fecha de nacimiento</th>
                </tr>
            </thead>
            <tbody>
              {
                listarDiezemplados().map((empleado:any) => {
                  return <tr key={empleado.id}>
                    <td>{empleado.name}</td>
                    <td>{empleado.last_name}</td>
                    <td>{empleado.birthday}</td>
                  </tr>
                })
              }
            </tbody>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li onClick={anteriorPag} className="page-item"><button className="page-link">Pagina anterior</button></li>
                <li onClick={siguientePag}  className="page-item"><button className="page-link">Pagina siguiente</button></li>
              </ul>
            </nav>
        </table>
        { 
          cargando && <Cargando/>
        }
    </div>
  )
}
