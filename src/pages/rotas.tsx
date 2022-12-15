import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home'
import '../global.css'
import Futebol from "../pages/futebol/Futebol";
import TabelaIngles from "../pages/futebol/tabelaCampeonatoIngles/TabelaIngles";
import Post from "../components/post/Post";
import Espanha from "./futebol/espanha/Espanha";
import Franca from "./futebol/franca/Franca";

function Rotas() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/futebol" element={<Futebol />}/>
          <Route path="/futebol/ingles" element={<TabelaIngles />}/> 
          <Route path="/futebol/espanha" element={<Espanha />}/> 
          <Route path="/futebol/franca" element={<Franca />}/> 


          <Route path="/futebol/ingles/noticia" element={<Post titulo="Teste" conteudo="teste2" />}/>
          <Route path="/futebol/ingles/noticia/dani-alves" element={<Post titulo="Teste1" conteudo="teste1" />}/>  
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rotas
