function trouverPersonne(personnes, nom) {
    const personneTrouvee = personnes.find(personne => personne.nom === nom);
    return personneTrouvee || null;
}

// Tests
const personnes = [
    { nom: "Alice", age: 30 },
    { nom: "Bob", age: 25 },
    { nom: "Charlie", age: 35 }
];

console.log(trouverPersonne(personnes, "Bob")); // { nom: 'Bob', age: 25 }
console.log(trouverPersonne(personnes, "David")); // null