import { useEffect, useState } from "react";
import TabelaIngles from "../../pages/futebol/tabelaCampeonatoIngles/TabelaIngles";
import Ingles from "../campeonatosFutebol/tabelas/Ingles";
import UltimasNoticias from "../ultimasnoticias/UltimasNoticias";

interface Noticia {
  titulo: string
  descricao: string
  imagem: string
  url: string
  categoria: string
}

const SectionIndex = () => {
  const [noticia, setNoticia] = useState<Noticia[]>([])

  const brasil = 'brasil'

  useEffect(() => {
    fetch('http://localhost:3333/')
      .then(response => response.json())
      .then(data => {
        setNoticia(data)
      })
  }, [])

  return (
    <div className="max-w-full flex flex-col max-h-full mb-12">
      <h2 className="text-2xl text-[#009c3b] font-sans text-center">Ultimas Notícias</h2>
      <div className="flex max-w-full h-max">
        <div className="h-max w-10/12 ml-8 gap-4 flex flex-col ">
          {noticia.map(noticias => {
            return (
              <UltimasNoticias
                key={noticias.titulo}
                imagem={noticias.imagem}
                titulo={noticias.titulo}
                descricao={noticias.descricao}
                url={noticias.url}
              />
            )
          })}
        </div>
        <div className="max-w-full max-h-[200px]">
          <Ingles />
        </div>
      </div>
    </div>
  )
}

export default SectionIndex;