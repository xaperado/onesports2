import { Link } from "react-router-dom"

const MenuDropDown = () => {
  return (
    <>
      <section className="w-80 h-80 bg-black absolute left-20">
        <ul className="flex">
          <li className="text-3xl text-white font-sans"><Link to='/futebol'>Futebol</Link></li>
          <li className="text-3xl text-white font-sans">Basquete</li>
          <li className="text-3xl text-white font-sans">Nlw</li>
        </ul>
      </section>
    </>
  )
}
export default MenuDropDown