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
// ora ho z che rappresenta il risultato dell'esecuzione di sum, ovvero result. posso andare avanti...

// -------

const players = ['Mario', 'Stefano', 'Federico', 'Erica', 'Giulia']

function replacePlayer() {
  // Mario (l'allenatore) vuole inserire Elisa al posto di Stefano
  let substitution = 'Elisa'
  players.splice(1, 1, substitution) // splice chiede 1) dove 2) quanti elementi 3) eventuali nuove aggiunte
  return players // ritorno l'array modificato, in modo da renderlo disponibile come risultato
}

let newTeam = replacePlayer() // posso trattare replacePlayer() come il suo valore di ritorno, e assegnarlo ad una nuova variabile
console.log(newTeam) // squadra aggiornata

// la funzione replacePlayer va bene, ma al momento è molto rigida: esegue sempre la stessa sostituzione operando sugli stessi giocatori
// sarebbe bello poter "personalizzare" questa funzione, cercando di renderla meno rigida e specificare:
// 1) quale giocatore deve essere sostituito
// 2) qual è il giocatore in sostituzione

// --------
let number = 50.2

function round() {
  let roundedNumber = Math.floor(number) // --> 50
  return roundedNumber
}

let middleResult = round() // <-- 50 tondo tondo

function addTwenty() {
  let total = middleResult + 20
  return total
}

const totalNumber = addTwenty()
console.log(totalNumber)

// ----------
// PARAMETRI NELLE FUNZIONI
// una funzione che sa fare sempre e solo la stessa cosa è noiosa! oltre che poco utile :)

function smartSum(n1, n2) {
  let total = n1 + n2
  console.log(total)
}

smartSum(10, 5)
smartSum(4, 7)
// let bigNumber = smartSum(12312, 324532324)
// console.log('questo è bigNumber', bigNumber) // undefined, perchè in questo caso smartSum non ha un valore di ritorno!

const initialTeam = ['Simone', 'Valerio', 'Paolo', 'Raffaele', 'Nicole']

function replacePlayerCustom(indexToReplace, substitution) {
  if (
    indexToReplace >= 0 && // indice maggiore o uguale a 0
    indexToReplace < initialTeam.length && // indice minore di 5
    typeof indexToReplace === 'number' // indice come numero
  ) {
    initialTeam.splice(indexToReplace, 1, substitution)
  } else {
    console.log('ERRORE NELLA SOSTITUZIONE')
  }
}

replacePlayerCustom(2, 'Alessio')
replacePlayerCustom(0, 'Giovanni')
// replacePlayerCustom('Giovanni', 0) // NON FUNZIONA COME PREVISTO! l'ordine dei parametri è fondamentale!

// adesso initialTeam è diverso dall'inizio!

console.log('initialTeam', initialTeam)

replacePlayerCustom(10, 'Stefano') // devo evitare di fare lo splice qui!

console.log('initialTeam', initialTeam)

function manipulateString(initialString, charToRemove) {
  // inizializziamo la stringa che torneremo come risultato intanto come stringa vuota
  let resultingString = ''
  // ciclo tutti i caratteri della stringa initialString
  for (let i = 0; i < initialString.length; i++) {
    // initialString.charAt(0) // primo carattere di initialString
    // devo controllare che questo carattere sia DIVERSO da charToRemove
    if (
      initialString.charAt(i) !== charToRemove.toLowerCase() &&
      initialString.charAt(i) !== charToRemove.toUpperCase()
    ) {
      // in tal caso, lo aggiungo alla stringa resultingString
      resultingString += initialString.charAt(i)
    } // non serve neanche un else! eviterò di aggiungere il carattere se la condizione non si verifica
  }
  return resultingString
}

let stringaAccorciata1 = manipulateString('Ciao Epicoders!', 'c')
let stringaAccorciata2 = manipulateString('E arriva il weekend!', 'E')

console.log(stringaAccorciata1)
console.log(stringaAccorciata2)
