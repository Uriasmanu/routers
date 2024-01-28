import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from "./paginas/inicio";
import Sobre from "./paginas/sobre";
import Menu from './componentes/menu';
import PaginaPadrao from './componentes/PaginaPadrao';
import Rodape from './componentes/Rodape';


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={ <PaginaPadrao/> }>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<Sobre />} />
        </Route>

        <Route path="*" element={"Pagina não encontrada"} />

      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
}

export default App;
