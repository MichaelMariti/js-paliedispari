console.log('palindromi')

const parolaUtente = 'Mamma'   // prompt('Inserisci una parola')
console.log(parolaUtente)

// SE parolaUtente è palindroma
// - console log di "La parola è palindroma"
// ALTRIMENTI
// - console log di "La parola non è palindroma"

function ePalindroma(parola){

    // generare la parola invertita
    // SE parolaInvertita === parola
    // - return true
    // ALTRIMENTI
    // - return false

    // return true - false
}


function invertiParola(parola) {
    let parolaInvertita = ''

    for (let i = 0; i < parola.length; i++) {
        const char = parola.at (-1 - i)
        parolaInvertita += char
    }

    return parolaInvertita
}

const miaVar = invertiParola('mamma')
console.log(miaVar)