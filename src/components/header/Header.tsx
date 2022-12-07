import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { List } from "phosphor-react";



const Header = () => {
  const [open, setOpen] = useState(false)

  function openMenu() {
    setOpen(!open)
  }


  return (
    <div className="w-full h-24 bg-black flex flex-col">
      <div className="w-full flex justify-center bg-gray-400"><h2 className="text-white uppercase text-2xl">O maior site esportivo!</h2></div>
      <div className="flex items-center h-full w-[80%]  mx-auto justify-center">
        <button onClick={openMenu} className="text-white absolute left-8 flex items-center"><List size={32}/>Menu</button>
        {open ?
            <ul className="flex absolute left-36 gap-4">
              <li className="text-2xl text-white font-sans uppercase"><Link to='/futebol'>Futebol</Link></li>
              <li className="text-2xl text-white font-sans uppercase">Basquete</li>
              <li className="text-2xl text-white font-sans uppercase">Nlw</li>
            </ul> : null}
        <h1 className="text-3xl text-white font-sans items-center"><Link to="/"> One Sports </Link></h1>
      </div>
      <Outlet />
    </div>
  )
}

export default Header;