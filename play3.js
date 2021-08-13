const person = {
    name:'Max',
    age:29,
    greet() {
        console.log('hi, i am '+ this.name+' my age '+this.age);
    }
};

const printName2 = (personData) => {
    console.log(personData.name);
}
const printName1 = (person) => {
    console.log(person.name);
}
const printName3 = ({name}) => {
    console.log(name);
}

printName3(person);

//클래스를 가져오는 정의(?) 적힌 그대로 가져올수잇음.
const {name, age} = person;

console.log(name,age);

const hobbies = ['Sports','cooking'];

//배열 단위에서도 맞춰진 형식에 따라 가져올수잇음.
const [hobby1, hobby2] = hobbies;
console.log(hobby1,hobby2);
