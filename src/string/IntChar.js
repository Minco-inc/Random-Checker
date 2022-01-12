class IntChar {
    static string(str, autoCase = false) {
        let chars = str.split('');
        chars.forEach((char, i) => {
            if (/[0-9]/.test(char)) {
                let ch = icMap.get(char);
                if (!autoCase) ch = ch.toLowerCase();
                chars[i] = ch;
            }
        });
        let result = chars.join('');
        result = result.replace(/[0-9]/g, '');
        return result;
    }
}

let icMap = new Map();
icMap.set('1', 'I');
icMap.set('2', '2');
icMap.set('3', 'E');
icMap.set('4', 'A');
icMap.set('5', 's');
icMap.set('6', '6');
icMap.set('7', '7');
icMap.set('8', '8');
icMap.set('9', 'g');
icMap.set('0', 'o');

module.exports = IntChar;
