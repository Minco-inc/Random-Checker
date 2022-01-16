const fs = require("fs");

class PairListParser {
    static parse(file = __dirname + '/../../pairlist') {
        return new Promise(async (resolve, reject) => {
            fs.readFile(file, 'utf-8', (err, data) => {
                if (err) return reject(err);
                data = data.trim();
                let lines = data.split('\n');
                let freqs = {};
                lines.forEach(line => {
                    let ab = line.split(':');
                    let a = ab[0];
                    let b = ab[1];
                    freqs[a] = parseInt(b);
                });
                resolve(freqs);
            });
        });
    }
}

module.exports = PairListParser;
