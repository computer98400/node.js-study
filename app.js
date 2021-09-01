const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const app = express();

const expressHbs = require('express-handlebars');


app.engine('hbs',expressHbs());
app.set('view engine', 'hbs');
//app.set('view engine', 'pug');
app.set('views','views');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use(adminData.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
  res.status(404).render('404', {pageTitle:'Page Not Found'});
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

// const server = http.createServer(app);
app.listen(3000);    //포트 3000을 통해 서버가 요청을 계속 수신하게 된다.

//------------------------------------------------------
//위 코드를 실행하게 되면 요청이 들어왔을때 프로세스가 바로 종료됨을 알 수 있다.

