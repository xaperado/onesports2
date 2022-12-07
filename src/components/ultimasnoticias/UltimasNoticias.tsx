
type postProps = {
  titulo: string;
  descricao: string;
  imagem: string;
  url: string;
}

const UltimasNoticias = (props: postProps) => {
  return (
    <> 
      <a href={props.url}>
        <section className="pb-4 border-b-[1px] border-[#002776] hover:border-[#009c3b]">
        <div className="box-border max-w-[80%] max-h-56 flex mt-4">
          <img src={props.imagem} alt="" className="w-1/2 rounded-t-sm" />
          <div className=" w-1/2">
            <h3 className="text-center font-sans uppercase font-semibold text-lg pb-8">{props.titulo}</h3>
            <p className="font-sans pl-4 text-xl">{props.descricao}</p>
          </div>
        </div>
        </section>
      </a>
    </>
  )
}

export default UltimasNoticias