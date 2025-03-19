function afficherProprietes(obj) {
    let str = "";
    for (let key in obj) {
        str += key + ": " + obj[key] + ", ";
    }
    return str.slice(0, -2);
}

console.log(afficherProprietes({ nom: "Alice", age: 30, ville: "Paris" })); // 'nom: Alice, age: 30, ville: Paris'