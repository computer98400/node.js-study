const http = require('http');
const fs = require('fs');

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

const server = http.createServer((req, res) => {  //클라이언트의 요청에 따라서 행동을 정의하는 부분이라 생각해도 좋을 듯 싶다.
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');        //응답에 일부 데이터를 쓸수있다.
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method ==='POST'){
        const body = [] ;
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',() =>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        fs.writeFileSync('message.txt','DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
   // process.exit();      
    res.write('<html>');        //응답에 일부 데이터를 쓸수있다.
    res.write('<head><title>My First</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000);    //포트 3000을 통해 서버가 요청을 계속 수신하게 된다.

//------------------------------------------------------
//위 코드를 실행하게 되면 요청이 들어왔을때 프로세스가 바로 종료됨을 알 수 있다.

