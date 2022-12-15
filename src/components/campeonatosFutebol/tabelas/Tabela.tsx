import { Link } from "react-router-dom"

type propsTabela = {
  campeonato: string
  backImage: string
  urlTabela: string
}


const Tabela = (props: propsTabela) => {
  return (
    <div className="flex w-60 h-60 flex-col items-center">
      <Link to={props.urlTabela}>
      <img src={props.backImage} className="w-52 h-52 rounded-full"></img>
      <h2 className="font-sans font-medium border-b-2 border-black uppercase text-center text-[#009c3b]">{props.campeonato}</h2>
      </Link>
    </div>

  )
}

export default Tabela