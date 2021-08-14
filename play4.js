const fetchData = () =>{
    //성공시와 실패시의 경우를 담는다.
    const promise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve('Done!');
        },1500);
    });
    return promise;
};

//delay 이후에 해당 구문을 실행.
setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
    .then(text =>{
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    })
}, 2000);

console.log('Hello!');
console.log('Hi!');