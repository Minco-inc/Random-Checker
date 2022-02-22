const RandExp = require("randexp");
const fs = require("fs");
const RandomChecker = require(".");

(async () => {
    let rc = new RandomChecker();
    let wordlist = fs.readFileSync('wordlist', 'utf-8').trim().split(' ');
    let randex = new RandExp(/[a-z]{10}/);
    let totalHuman = 0;
    let totalRobot = 0;
    const max = 50000;
    for (let i = 0; i < max; i++) {
        let text = wordlist[i];
        let human = await rc.check(text);
        totalHuman += human;

        let random = randex.gen();
        let robot = await rc.check(random);
        totalRobot += robot;
    }
    console.log(`Total:`);
    console.log('   Human:', totalHuman);
    console.log('   Robot:', totalRobot);
    console.log('Optimal Index:', (totalHuman + totalRobot) / 100000);
})();

function sleep(ms) {
    return new Promise(async (resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
