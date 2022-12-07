import { useState } from "react"
import Tabela from "./tabelas/Tabela"

interface Campeonatos {
  campeonato: string
  capaCampeonato: string
  link: string
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
    <div className="max-w-[80%] h-full mx-auto mt-4 flex gap-4">
      {tabelas.map(tabela => {
        return (
          <Tabela campeonato={tabela.campeonato} capaCampeonato={tabela.capaCampeonato} link={tabela.link}  />
        )
      })}
    </div>
    </>
  )
}

export default Campeonatos