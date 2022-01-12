const RandExp = require("randexp");
const fs = require("fs");
const RandomChecker = require(".");

let demo = '\u001b[34m[Demo]\u001b[0m';
let total = '\u001b[32m[Total]\u001b[0m';
let humans = '\u001b[36mHumans\u001b[0m:';
let robots = '\u001b[31mRobots\u001b[0m:';

(async () => {
    console.log(demo, `${humans.replace(':','')} vs ${robots.replace(':','')}: The Final Match`);
    await sleep(650);
    let rc = new RandomChecker();
    let wordlist = fs.readFileSync('wordlist', 'utf-8').trim().split(' ');
    let randex = new RandExp(/[a-z0-9]{10}/);
    let totalHuman = 0;
    let totalRobot = 0;
    const max = 50000;
    for (let i = 0; i < max; i++) {
        let text = wordlist[i];
        let human = await rc.check(text);
        totalHuman += human;
        console.log(demo, humans, `${text}:`, human, ' '.repeat(40 - (human.toString().length + text.length)), `${(i/max*100).toFixed(1)}%`);

        let random = randex.gen();
        let robot = await rc.check(random);
        totalRobot += robot;
        console.log(demo, robots, `${random}:`, robot, ' '.repeat(40 - (robot.toString().length + random.length)), `${(i/max*100).toFixed(1)}%`);
    }
    console.log(total, humans, totalHuman);
    console.log(total, robots, totalRobot);
})();

function sleep(ms) {
    return new Promise(async (resolve, reject) => {
        setTimeout(resolve, ms);
    });
}
