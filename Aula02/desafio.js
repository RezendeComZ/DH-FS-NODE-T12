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

console.log(pets[0]);

function adicionaPet(nomeF, tipoF, racaF, idadeF, vacinadoF){
  let vacinadoBole = false;
  if (vacinadoF === 'sim') {
    vacindoBole = true;
  }
  pets.push({nome: nomeF, tipo: tipoF, raca: racaF, idade: idadeF, vacinado: vacinadoBole})
}

adicionaPet('Pantera', 'felino', 'SRD', 7, 'não') ;

console.log(pets)


function cadastraPetObj(objetoPet) {
  if (typeof(objetoPet) === 'object') {
    pets.push(objetoPet);
  } else {
    console.log('O parametro não é objeto')
  }

}

cadastraPetObj({alguma: 'coisa'});

console.log(pets)
