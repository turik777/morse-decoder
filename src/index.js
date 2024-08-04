const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let decoded = "";
    let encoded = [];
    let arrMorse = [];

    let charExpr = expr.match(/.{1,10}/g);
    charExpr.forEach(charExpr => {
        let morseExpr = charExpr.match(/.{1,2}/g);
        arrMorse.push(morseExpr);
    });

    arrMorse.forEach(morse => {
        morse = morse.filter(e => e !== "00");
        for (let i = 0; i < morse.length; i++) {
            if (morse[i] === "10") {
                morse[i] = ".";
            } else if (morse[i] === "11") {
                morse[i] = "-";
            }
        }
        encoded.push(morse.join(""));
    });

    encoded.forEach(char => {
        if (char === "**********") {
            char = " ";
        } else {
            char = MORSE_TABLE[char];
        }
        decoded += char;
    });

    return decoded;
}

module.exports = {
    decode
}