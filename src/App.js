import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from "./paginas/inicio";
import Sobre from "./paginas/sobre";
import Menu from './componentes/menu';
import PaginaPadrao from './componentes/PaginaPadrao';
import Rodape from './componentes/Rodape';
import Post from './paginas/Post/Post';
import NaoEncontrada from "./paginas/NaoEncontrada";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={ <PaginaPadrao/> }>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<Sobre />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<NaoEncontrada/>} />

      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
}

export default App;
