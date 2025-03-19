function trouverPersonne(personnes, nom) {
    return personnes[1]
}

// Tests
const personnes = [
	{ nom: "Alice", age: 30 },
	{ nom: "Bob", age: 25 },
	{ nom: "Charlie", age: 35 }
];

console.log(trouverPersonne(personnes, "Bob")); // { nom: 'Bob', age: 25 }