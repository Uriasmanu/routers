import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from "./paginas/inicio";
import Sobre from "./paginas/sobre";
import Menu from './paginas/menu';

function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/sobremim" element={<Sobre />} />
      <Route path="*" element={"Pagina não encontrada"} />

    </Routes>
    </BrowserRouter>
  )
}

export default App;
