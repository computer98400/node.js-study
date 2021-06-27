var name = 'Max';

console.log(name);


var name = 'Max';
var age = 29;
var hasHobbies = true;


const summarizeUser = 

function summarizeUser(username, userage, userhashobby){
    return ('Name is '+username + ', age is ' + userage + ', and the user has hobbies: '+ userhashobby);
}
console.log(summarizeUser(name,age,hasHobbies));

const name2 = 'Max';
let age2 = 29;
let hasHobbies2 = true;

// name2 = 'testtt';   // test error = const can't change
age2 = 30;
console.log("other test : "+summarizeUser(name2,age2,hasHobbies2));




const summarizeUser2 = (username, userage, userhashobby) => {
    return ('Name is '+username + ', age is ' + userage + ', and the user has hobbies: '+ userhashobby);
}

const add = (a,b) =>  a+b;

const addOne = a => a+1;

console.log(add(1,2));
console.log(addOne(1));




const person = {
    name:'Max',
    age: 20,
    greet() {
        console.log('hi, i am '+ this.name + ', age is '+ this.age)
    }
};
person.greet();


const hobbies3 = ['sports', 'cooking'];

console.log(hobbies3.map(hobby => {
    return 'hobby: '+hobby;
}));

console.log(hobbies3);

const copyArray = [...hobbies3];

console.log("copiedArray : "+copyArray);

const toArray = (...args)=>{
    return args;
};

console.log(toArray(1,2,3,4));


const printName = ({name}) => {
    console.log("printNAme exe----------------------")
    console.log(name);
}
printName(person);

const {name3, age3} = person;

console.log(name,age); //???

const [hobby1,hobby2] = hobbies3;
console.log(hobby1, hobby2);