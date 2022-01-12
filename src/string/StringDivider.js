class StringDivider {
    static divide(str) {
        let chars = str.split('');
        let pairs = [];
        let a = 0;
        let b = 1;
        while (b < chars.length) {
            let as = chars[a];
            let bs = chars[b];
            let pair = as + bs;
            pairs.push(pair);
            a++;
            b++;
        }
        return pairs;
    }
}

module.exports = StringDivider;
