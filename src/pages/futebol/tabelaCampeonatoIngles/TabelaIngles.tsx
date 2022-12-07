import { useEffect, useState } from "react";
import Ingles from "../../../components/campeonatosFutebol/tabelas/Ingles"
import Footer from "../../../components/footer/Footer"
import Header from "../../../components/header/Header"
import UltimasNoticias from "../../../components/ultimasnoticias/UltimasNoticias";



interface Noticia {
  titulo: string
  descricao: string
  imagem: string
  url: string
  categoria: string
}

const TabelaIngles = () => {
  const [noticia, setNoticia] = useState<Noticia[]>([])


  useEffect(() => {
    fetch('http://localhost:3333/')
      .then(response => response.json())
      .then(data => {
        setNoticia(data)
      })
  }, [])

  return (
    <>
      <Header />
      <Ingles />
      <div className="h-max w-10/12 ml-8 gap-4 flex flex-col ">

        {noticia.map(noticias => {
          if (noticias.categoria === 'ingles') {
            return <UltimasNoticias key={noticias.titulo}
              imagem={noticias.imagem}
              titulo={noticias.titulo}
              descricao={noticias.descricao}
              url={noticias.url} />
          }

        })}
      </div>
      <Footer />
    </>

  )
}
export default TabelaIngles