const IntChar = require("./string/IntChar");
const PairListParser = require("./pair/PairListParser");
const StringDivider = require("./string/StringDivider");
let that;

class RandomChecker {
    constructor() {
        this.loaded = false;
        that = this;
    }

    async load() {
        this.pairlist = await PairListParser.parse();
        this.loaded = true;
    }

    async check(str) {
        if (!this.loaded) await this.load();
        let { pairlist } = this;
        let icStr = str.trim(); // IntChar.string(str).trim().toLowerCase();
        let pairs = StringDivider.divide(icStr);
        let score = 0;
        pairs.forEach(pair => {
            if (pairlist[pair]) {
                score += pairlist[pair];
            } else {
                score += 0;
            }
        });
        return score;
    }
}

module.exports = RandomChecker;
