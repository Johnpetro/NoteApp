const express =  require('express');
const layoutejs =  require('express-ejs-layouts');
const app = express();
const PORT = 2001;
const   router = require('./router/route')

// basic setups
 app.use(express.urlencoded({extended:true}));
 app.use(express.json());
 app.use(express.static('public'));
 
//  tamplete engen
app.set('view engine', 'ejs');
app.use(layoutejs);
app.set('layout','./layout/main');


app.get("/",(req,res)=>{
    res.render('index')
})
app.get("/register",(req,res)=>{
    res.render('register')
})
app.get("/login",(req,res)=>{
    res.render('login')
})













// new side
app.use('/', router)





app.listen(PORT, ()=>{
    console.log('application is listening on port ' +PORT);
})