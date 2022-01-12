// Made by Minco
// Pairlist generator v1.0
"use strict";

const wordlistPath = './wordlist';
const pairlistPath = './pairlist';

// ------------------------------
const fs = require("fs");
const prefix = '\u001b[31m[PLG]\u001b[0m';

let wordlistString = fs.readFileSync(wordlistPath, 'utf-8').trim();
let wordlist = wordlistString.split(' ');
let total = 0;
let parts = {};

wordlist.forEach((word, i) => {
    if (!/[^a-z]/gi.test(word)) {
        let chars = word.split('');
        let a = 0;
        let b = 1;
        while (b < chars.length) {
            let ca = chars[a];
            let cb = chars[b];
            let part = ca + cb;
            if (parts[part]) {
                parts[part]++;
            } else {
                parts[part] = 1;
            }
            a++;
            b++;
        }
        total++;
        
        let p = i / wordlist.length * 100;
        p = p.toFixed(1);
        console.log(prefix, 'Current:', chars.join(''), ' '.repeat(50 - chars.length) + `(${p}%)`);
    }
});

let pairlist = '';
for (let a = 0; a < (36 * 36); a++) {
    let pair = a.toString(36);
    if (!/[^a-z]/g.test(pair) && pair.length === 2) {
        var freq = 0;
        if (parts[pair]) {
            freq = parts[pair];
        }
        pairlist += `${pair}:${freq}\n`;
        var msg = `Frequency of ${pair}: ${freq}`;
        console.log(prefix, msg);
    }
}

/*
let pairlist = '';
for (var pair in parts) {
    var freq = parts[pair];
    pairlist += `${pair}:${freq}\n`;
    var msg = `Frequency of ${pair}: ${freq}`;
    console.log(prefix, msg);
}
*/

console.log(prefix, 'Total:', total);

console.log(prefix, 'Writing pairlist...');
fs.writeFile(pairlistPath, pairlist, 'utf-8', () => {
    console.log(prefix, 'Pairlist written.');
});
