
const TabelaFranca = () => {



  return (
    <>
      <div className="max-w-[80%] max-h-full mx-auto mt-4 pb-4 bg-[#F2F1F1]">
        <h2 className="text-center text-[#009c3b] font-sans text-3xl">Campeonato Espanhol</h2>
        <table className="max-w-full max-h-full mt-4">
          <tbody className="h-4 hover:bg-[#009c3b] hover:text-white">
            <tr className="border-black border-b-[1px]">
              <td className=""></td>
              <td className="w-1/2 ">Clube</td>
              <td className="font-medium">Pts</td>
              <td className="font-medium">Pj</td>
              <td className="font-medium">Vit</td>
              <td className="font-medium">E</td>
              <td className="font-medium">D</td>
              <td className="font-medium">GM</td>
              <td className="font-medium">GC</td>
              <td className="font-medium">SG</td>
              <td className="font-medium">Ultimas 5</td>
            </tr>
          </tbody>
          <tbody className="h-4 hover:bg-[#009c3b] hover:text-white">
            <tr className="border-black border-b-[1px] ">
              <td className="w-4 border-l-4 border-blue-400">1</td>
              <td className="w-1/2 flex font-sans font-medium"><img className="w-6 h-6 mr-1" src="https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_48x48.png" />
                Arsenal</td>
              <td className="w-20">37</td>
              <td className="w-20">14</td>
              <td className="w-20">12</td>
              <td className="w-20">1</td>
              <td className="w-20">1</td>
              <td className="w-20">33</td>
              <td className="w-20">11</td>
              <td className="w-20">22</td>
              <td className="flex gap-4 pr-4">
                <div className="w-4 h-4 rounded-full  bg-green-400"></div>
                <div className="w-4 h-4 rounded-full  bg-green-400"></div>
                <div className="w-4 h-4 rounded-full  bg-green-400"></div>
                <div className="w-4 h-4 rounded-full  bg-gray-400"></div>
                <div className="w-4 h-4 rounded-full  bg-green-400"></div>
              </td>
            </tr>
          </tbody>
          <tbody className="h-4 hover:bg-[#009c3b] hover:text-white">
            <tr className="border-black border-b-[1px] ">
              <td className="w-4 border-l-4 border-blue-400">1</td>
              <td className="w-1/2 flex font-sans font-medium"><img className="w-6 h-6 mr-1" src="https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_48x48.png" />
                chelsea</td>
              <td className="w-20">37</td>
              <td className="w-20">14</td>
              <td className="w-20">12</td>
              <td className="w-20">1</td>
              <td className="w-20">1</td>
              <td className="w-20">33</td>
              <td className="w-20">11</td>
              <td className="w-20">22</td>
              <td className="flex gap-4 pr-4">
                <div className="w-4 h-4 rounded-full  bg-green-400"></div>
                <div className="w-4 h-4 rounded-full  bg-green-400"></div>
                <div className="w-4 h-4 rounded-full  bg-green-400"></div>
                <div className="w-4 h-4 rounded-full  bg-gray-400"></div>
                <div className="w-4 h-4 rounded-full  bg-green-400"></div>
              </td>
            </tr>
          </tbody>

        </table>
        <div className="w-[98%] h-48 mx-auto mt-4 pb-4 bg-white rounded-2xl grid grid-cols-2">
          <div className="col-1 flex flex-col">
            <span className="ml-8 mt-8">Qualificação/Rebaixamento</span>
            <div className="flex items-center mt-4">
              <div className="w-4 h-4 ml-8 bg-blue-400"></div>
              <span className="pl-4 font-sans">Fase de grupos Ligas dos Campeões</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 ml-8 bg-orange-400"></div>
              <span className="pl-4 font-sans">Fase de grupos Liga Europa</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 ml-8 bg-red-400"></div>
              <span className="pl-4 font-sans">Rebaixados</span>
            </div>
          </div>
          <div className="col-2 mt-8 flex flex-col">
            <span className="">Últimas 3 partidas</span>
            <div className="flex items-center mt-4">
              <div className="w-4 h-4 rounded-full  bg-green-400"></div>
              <span className="pl-4 font-sans">Vitória</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-gray-400"></div>
              <span className="pl-4 font-sans">Empate</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-red-400"></div>
              <span className="pl-4 font-sans">Derrota</span>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default TabelaFranca