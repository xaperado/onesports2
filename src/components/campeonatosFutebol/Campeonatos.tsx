import { useState } from "react"
import Tabela from "./tabelas/Tabela"

interface Campeonatos {
  campeonato: string
  backImage: string
  urlTabela: string
}

const Campeonatos = () => {
  const [tabelas, setTabelas] = useState<Campeonatos[]>([])

  useState(() => {
    fetch('http://localhost:3333/tabela')
      .then(response => response.json())
      .then(tabela => {
        setTabelas(tabela)
      })
  })


  return (
    <>
      <h2 className="text-3xl text-[#009c3b] font-sans text-center uppercase font-bold">Ligas</h2>
      <div className="h-[60vw] w-full flex justify-center">
          <div className=" mt-4 grid grid-cols-3 gap-4">
            {tabelas.map(tabela => {
              return (
                <Tabela key={tabela.campeonato} campeonato={tabela.campeonato} backImage={tabela.backImage} urlTabela={tabela.urlTabela} />
              )
            })}
          </div>
      </div>
    </>
  )
}

export default Campeonatos