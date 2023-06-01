console.log('Giornata sulle funzioni!')

// FUNZIONI
// una funzione è un blocco di codice riutilizzabile
// alle volte può ricevere dei dati in input (parametri)
// alle volte può emettere un risultato (valore di ritorno)

// modi di definire una funzione:
function bark() {
  console.log('BAU')
}

// al momento in console non c'è niente!!
// DICHIARARE (definire) una funzione NON LA ESEGUE!!

// come eseguo la funzione bark?
bark()

// bark() si definisce un'INVOCAZIONE, o ESECUZIONE della funzione bark

// -------

// VALORI DI RITORNO
function sum() {
  let result = 10 + 20
  console.log('result', result)
  return result // sto RITORNANDO dalla funzione il risultato di 10 + 20
}

let z = sum() // sum() ora è esattamente pari al suo valore di ritorno
console.log(z)
// ora ho z che rappresenta il risultato dell'esecuzione di sum, posso andare avanti..

// -------

const players = ['Mario', 'Stefano', 'Federico', 'Erica', 'Giulia']

function replacePlayer() {
  // Mario (l'allenatore) vuole inserire Elisa al posto di Stefano
  let substitution = 'Elisa'
  players.splice(1, 1, substitution) // splice chiede 1) dove 2) quanti elementi 3) eventuali nuove aggiunte
  return players // ritorno l'array modificato, in modo da renderlo disponibile come risultato
}

let newTeam = replacePlayer()
console.log(newTeam)

// la funzione replacePlayer va bene, ma al momento è molto rigida: esegue sempre la stessa sostituzione operando sugli stessi giocatori
// sarebbe bello poter "personalizzare" questa funzione, cercando di renderla meno rigida e specificare:
// 1) quale giocatore deve essere sostituito
// 2) qual è il giocatore in sostituzione
