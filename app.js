const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/404');

const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');

//const expressHbs = require('express-handlebars');
const app = express();



// app.engine('handlebars', expressHbs({
//   layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'handlebars'
// })
// );
app.set('view engine', 'ejs');
//app.set('view engine', 'handlebars');
//app.set('view engine', 'pug');
app.set('views', 'views');


// db.execute('select * from products')
//     .then(result => {
//         console.log(result[0], result[1]);
//     })
//     .catch(err => {
//         console.log(err);
//     });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findByPk(1)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});


app.use(shopRoutes);
app.use('/admin', adminRoutes);

app.use(errorController.page404);


Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
User.hasMany(Product);

sequelize
    .sync()
    .then(result => {
        return User.findByPk(1);
    })
    .then(user => {
        if (!user) {
            return User.create({ name: 'Max', email: 'test@test.com' });
        }
        return user;
    })
    .then(user => {
        console.log(user);
        app.listen(3000);
    })
    .catch(err => {

        console.log(err);

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
    //포트 3000을 통해 서버가 요청을 계속 수신하게 된다.

//------------------------------------------------------
//위 코드를 실행하게 되면 요청이 들어왔을때 프로세스가 바로 종료됨을 알 수 있다.

