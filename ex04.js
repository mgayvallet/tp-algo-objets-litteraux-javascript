function trouverPersonne(personnes, nom) {
    return personnes.find(personne => personne.nom === nom);
}

// Tests
const personnes = [
	{ nom: "Alice", age: 30 },
	{ nom: "Bob", age: 25 },
	{ nom: "Charlie", age: 35 }
];

console.log(trouverPersonne(personnes, "Bob")); // { nom: 'Bob', age: 25 }