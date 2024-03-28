class teamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    };
    providFeedback() {
        console.log(`${this.name} thenk you`)
    };

}

class instructor extends teamMember {
    designation = 'web course instructor'
    team = 'web team'
    constructor(name, location) {
        super(name, location);
    };
    startSupportSession(time) {
        console.log(`start ${time}`)
    };
    creatQuiz(module){
        console.log(`quiz ${module}`)
    };
};

class developer extends teamMember {
    designation = 'web course instructor';
    team = 'web team';
    tach;
    constructor(name, location, tach) {
        super(name, location);
        this.tach = tach;
    };
    developerFeature(feature){
        console.log(`please develop the ${feature}`)
    };
    release(vertion){
        console.log(`please release the vertion ${vertion}`)
    };
};
class jobPlacment extends teamMember {
    designation = 'web course instructor';
    team = 'web team';
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    };
    developerFeature(feature){
        console.log(`please develop the ${feature}`)
    };
    release(vertion){
        console.log(`please release the vertion ${vertion}`)
    };
    
};
const alia = new developer('alia vert', 'dhaka', 'react');
console.log(alia);
alia.providFeedback();
const kodos = new jobPlacment('kodos', 'napel', 'desigan');
console.log(kodos);