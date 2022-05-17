const nomeUtente = prompt('Qual è il tuo nome?');
console.log(nomeUtente);

const cognomeUtente = prompt('Qual è il tuo cognome?');
console.log(cognomeUtente);

const colorePreferito = prompt('Qual è il tuo colore preferito?');
console.log(colorePreferito);


alert(`${nomeUtente} ${cognomeUtente} il tuo colore preferito è il ${colorePreferito}`);

const spanNomeUtente = document.getElementById('userName');
console.log(userName);

spanNomeUtente.innerHTML = `${nomeUtente} ${cognomeUtente} il tuo colore preferito è il ${colorePreferito}`; 

console.dir(spanNomeUtente);

