import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from "./paginas/inicio";
import Sobre from "./paginas/sobre";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/sobremim" element={<Sobre />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
