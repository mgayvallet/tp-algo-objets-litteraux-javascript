function listerPersonnes(personnes) {
    return personnes.map(personne => `${personne.nom} : ${personne.age} ans`).join(', ') + '.';
}

const personnes = [
    { nom: 'Alice', age: 30 },
    { nom: 'Bob', age: 25 },
    { nom: 'Charlie', age: 35 }
];

console.log(listerPersonnes(personnes)); // 'Alice : 30 ans, Bob : 25 ans, Charlie : 35 ans.'