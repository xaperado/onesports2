
import Footer from "../footer/Footer"
import Header from "../header/Header"

interface propsPost{
  titulo: string
  conteudo: string
}

const Post = (props: propsPost) => {
  return (
    <>

          <Header />   
            <h1>{props.titulo}</h1>
            <p>{props.conteudo}</p>        
          <Footer />
    </>
  )
}
export default Post