

const Footer = () => {
  return (
    <div   className="w-full h-40 bg-black mt-4 flex flex-col items-center">
      <h1 className="mt-4 text-base text-white">One Sports</h1>
      <ul className="flex mt-12 gap-8">
        <li className="text-base text-white">Times</li>
        <li className="text-base text-white">Seleções</li>
        <li className="text-base text-white">Tabelas</li>
      </ul>
      <span className="text-xs text-gray-400 mt-8">© Copyright 2022 Emerson</span>
    </div>
  )
}

export default Footer