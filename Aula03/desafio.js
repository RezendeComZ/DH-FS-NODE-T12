
let pets = [
  {
     nome: 'Nico',
     tipo: 'felino',
     raça: 'SRD',
     idade: 17,
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

let novoPet =   {
  nome: 1,
  tipo: 'cachorro',
  raça: 'SRD',
  idade: 10,
  vacinado: false
};

function validaDados(valida) {
  return (typeof valida.nome === 'string' && typeof valida.tipo === 'string' && typeof valida.idade === 'number' && typeof valida.vacinado === 'boolean') 
};


function cadastraPetObj(objetoPet) {
  if (typeof(objetoPet) !== 'object') {
    console.log('O parametro não é um objeto')
  } else if (validaDados(objetoPet)) {
    pets.push(objetoPet)
  }  
  else {
    console.log('O objeto não tem as propriedades necessárias')
  }

}

cadastraPetObj(novoPet);


console.log(pets);

//

function calculadora(num1, num2, operacao) {
  console.log(operacao(num1, num2))
};

function soma(primeiro, segundo) {
  return primeiro + segundo
};

calculadora(2, 2, soma);

// Desafio para proxima aula

/*
Criar umaa função callback chamada servicosPrestados que tenha como dois serviços (não dois parametros):
dar banho no pet e tosar o pet
sendo assim teremos sempre que passar um pet da nossa lista de pets e também um serviço que aquele pet ira utilizar

Tera que ser criado uma propriedade nova chamada 'serviços', que amarzene tudo que o pet fez. Pode modificar no VS pode mesmo.

exemplo:
servicosPrestados(pets[0].nome, darBanho)
servicosPrestados(pets[0].nome, tosar)

console.log('O serviço de tosa foi realizado no pet ' + NOME_DO_PET);
console.log('O serviço de banho foi realizado no pet ' + NOME_DO_PET);

*/

function servicosPrestados(pet, servico) {
  servico(pet)
};

function tosarPet(pet){
  pets.servicos.push(`tosou no dia `)
  console.log(`O pet ${pet} foi tosado`)
}

function darBanho(pet) {
  pets.servicos.push('deu banho')
}