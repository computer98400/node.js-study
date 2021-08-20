const http = require('http');
const express = require('express');
const route = require('./route');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Alows the request to continue t the next middleware in line
});

app.use((req, res, next) => {
    console.log('test');

});


//console.log(routes.someText);

// function rqListener(req,res){

// }

//http.createServer(rqListener);  // rqListener를 통해서 createServer를 실행해주게된다.

// http.createServer(function(req, res) {
// });

// http.createServer((req, res) =>{            //arrow를 사용하여 표현할 수도 있다.
//     console.log(req);
// });

//해당 구문을 그냥 표현할경우 아무것도 나오지 않는다.
//- 단순히 서버를 만들어둔다해서 어떤 동작을 하는게 아니기 때문이다.

const server = http.createServer(app);
server.listen(3000);    //포트 3000을 통해 서버가 요청을 계속 수신하게 된다.

//------------------------------------------------------
//위 코드를 실행하게 되면 요청이 들어왔을때 프로세스가 바로 종료됨을 알 수 있다.

