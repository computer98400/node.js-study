const person = {
    name:'Max',
    age:29,
    greet() {
        console.log('hi, i am '+ this.name+' my age '+this.age);
    }
};
console.log(person.greet());
const hobbies = ['Sports','Cooking'];
// for(let hobby of hobbies){
//     console.log(hobby);
// }

// 맵형식으로 그냥 출력도 가능하다.
// console.log(hobbies.map(hobby => 'hobby : '+hobby));
const copiedPerson = {...person};
console.log(copiedPerson);
console.log(hobbies);
hobbies.push('Programming');
console.log(hobbies);
const copiedArray = [hobbies];
console.log(copiedArray);
const copiedArray2 = [...hobbies];
console.log(copiedArray2);
copiedArray.push('test');
console.log(copiedArray2);


//...을 붙인경우 매개변수 갯수에 상관없이 받아올 수 있다.
const toArray = (...args)=>{
    return args;
}

console.log(toArray(1,2,3,4));

