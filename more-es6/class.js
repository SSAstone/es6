class instructor {
    name;
    designation = 'web course instructor'
    team = 'web team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    };
    startSupportSession(time) {
        console.log(`start ${time}`)
    };
    creatQuiz(module){
        console.log(`quiz ${module}`)
    };
};
const aamir = new instructor('aamir', 'mumbai');
console.log(aamir);
aamir.startSupportSession('9.00');
aamir.creatQuiz(60);

const solamn = new instructor('solamn', 'ognda');
console.log(solamn);