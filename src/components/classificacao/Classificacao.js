const classificacao = [
  {
    time: "Arsenal",
    pontos: 5
  },
  {
    time: "chelsea",
    pontos: 3
  },
  {
    time: "city",
    pontos: 12
  },
]
export function ordenaTabela(lista) {
  let listaTabela = [];
  let time1 = 0;
  let time2 = 0;
  let atual = 0;
  while (time1 < lista.length && time2 < listaTabela.length) {
    let posicao1 = lista[time1];
    let posicao2 = lista[time2];
    console.log(posicao1);
    console.log(posicao2);
    if (posicao1.pontos < posicao2.pontos) {
      listaTabela[atual] = posicao1;
      time1++
    }
    return listaTabela
  }
}
ordenaTabela(classificacao)
