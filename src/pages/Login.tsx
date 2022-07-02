import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import '../css/Login.css';
import img from '../images/logo512.png';
import { AppContext } from '../Context/AppContext';

export const Login:React.FC = () => {
    const {setUserInfo} = useContext(AppContext);
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje,setMensaje] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        if (usuario !== '' && password !== '') {
            if(usuario === 'admin'  && password === 'admin') {
                setMensaje('');
                setUserInfo(usuario);
                navigate('/ListaUsuarios')
    
            }else{
                setMensaje('Credenciales incorrectas');
            }
        }else{
            setMensaje('Ingrese Usuario y Contraseña');
        }
    }

  return (
        <>
            <main className="form-signin">
                <form className="text-center" onSubmit={handleSubmit}>
                    <img className="mb-4" src={img} alt="logo" width="72" height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Bienvenido</h1>
                    <div className="form-floating">
                    <input
                    name="usuario"
                    type="text"
                    className="form-control"
                    value={usuario}
                    onChange={(e) =>setUsuario(e.target.value)}
                    onCopy={(e) => {
                        e.preventDefault();
                        return false;
                    }}
                    onPaste={(e) => {
                        e.preventDefault();
                        return false;
                    }}
                    />
                    <label>Usuario</label>
                    </div>
                    <div className="form-floating">
                    <input
                    name="password"
                    type="password"
                    className="form-control"
                    value={password}
                    onCopy={(e) => {
                        e.preventDefault();
                        return false;
                    }}
                    onPaste={(e) => {
                        e.preventDefault();
                        return false;
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <label>Contraseña</label>
                    </div>
                    <h5>{mensaje}</h5>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Iniciar sesión</button>
                </form>
            </main>
        </>
  )
}
