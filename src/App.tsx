import { BrowserRouter,Routes, Route } from "react-router-dom";
import {Login} from './pages/Login';
import {ListUsers} from './pages/ListUsers';
import {UpdateImage} from './pages/UpdateImage';
import {AppProvider} from './Context/AppProvider';



export const App = () => {
  return (
    <AppProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="ListaUsuarios"  element={<ListUsers />} />
          <Route path="SubirImagen" element={<UpdateImage />} />
        </Routes>
    </BrowserRouter>
    </AppProvider>
  );
};

export default App;