//prática guiada

const arrayNumeros =[3,8,4,5,7,10,20,2]

const multiplicarPorTres =(array)=>{
  const novoArray=[]
  for(element of array){
    novoArray.push(element*3)
  }
  return novoArray
}

//console.log(multiplicarPorTres(arrayNumeros));


const retornarPar=(array)=>{
  const novoArray=[]
    for(element of array){
      if (element%2===0) {
        novoArray.push(element)
      }
    }
    return novoArray
}

//console.log(retornarPar(arrayNumeros));


const imprimir = (callback,array)=>{
  const resultado=callback(array)
  console.log(resultado);
}

/* imprimir(retornarPar,arrayNumeros)
imprimir(multiplicarPorTres,arrayNumeros) */


//FUNÇÃO DE ARRAY .MAP()

const resultadoMultiTres =arrayNumeros.map((cadaElemento)=>cadaElemento*3)
//console.log(resultadoMultiTres);

//FUNÇÃO DE ARRAY .FILTER()

/* const arrayFiltradoPar =arrayNumeros.filter((element)=>{
  if (element%2===0) {
    return element
  }
}) */
//console.log(arrayFiltradoPar);

const arrayFiltradoPar =arrayNumeros.filter((element)=>element%2===0)
//console.log(arrayFiltradoPar);

//EXERCICIO 

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

/* const aumentarVida =(arrayPoke)=>{
  const novoArray =[]
  for(element of arrayPoke){
    const novoObj = {
      ...element,
      vida: 100
    }
    novoArray.push(novoObj)
  }
  return novoArray
}
console.log(aumentarVida(pokemons)); */

const aumentarVida = (objeto)=>{
  const novoObj={
    ...objeto,
    vida:100
  }
  return novoObj
}

const pokemonsVidaCheia =pokemons.map(aumentarVida)
//console.log(pokemonsVidaCheia);


const pokemonsDeFogo = pokemons.filter((cadaElement)=>cadaElement .tipo === 'fogo')
//console.log(pokemonsDeFogo);