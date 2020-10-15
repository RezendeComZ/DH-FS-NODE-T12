let nome = 'Pet Shop VS';

let array =  ['Gato', 'Cachorro', 'Coelho'];

for (let i = 0; i < array.length; i += 1) {
  console.log((i + 1) + ' - ' + array[i]);
}

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  
}


///

const nomes = ['Gabriel', 'Rezende', 'Camargo'];

for(let i of nomes) {
  console.log(i)
};

// Percorrer objeto

let pessoa = {
  nome:'Gabriel',
  idade: 30,
  cidade: 'Taboão da Serra'
}

// For in
console.log('- For in:');

for (let i in pessoa){
  console.log(i)
}

let pets = [
  {
     nome: 'Pantera',
     tipo: 'felino',
     raça: 'SRD',
     idade: 7,
    vacinado: true
  },
  {
    nome: 'Lester',
    tipo: 'cachorro',
    raça: 'SRD',
    idade: 10,
    vacinado: false
  }
];

// forEach()
console.log('- forEach:')

pets.forEach((item) => 
  console.log(`-----\nNome do pet: ${item.nome}\nTipo: ${item.tipo}\nRaça: ${item.raça}\nVacinado: ${item.vacinado}`)
)

console.log(pets.length + ' pets registrados')


// For



// Desafio criar uma função que adicione pets na lista de pets

function adiciona(nome) {

}