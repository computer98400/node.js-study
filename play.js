let name = 'Max';
let age= 29;
let hasHobbies = true;
const test = 'test';
//const로 정의한건 재정의할 수 없다.
//test = 'rwerwer';
age = 30;

const summarizeUser  = (userName, userAge, userHasHobby) =>{
    return 'Name is '+userName+', age is '+userAge+', userhashobby? :'+userHasHobby;
}
console.log(test);
console.log(summarizeUser(name, age, hasHobbies));

//const add = (a,b)=>a+b;
//const addOne = (a)=> a+1;
const addRandom = () => 1+2;
console.log(addRandom());