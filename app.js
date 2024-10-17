const express =  require('express');
const layoutejs =  require('express-ejs-layouts');
const app = express();
const PORT = 2001

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
const adminLayout = '../views/layout/user_layout';
app.get('/dashboard',(req,res)=>{
    res.render('mode/index',{layout:adminLayout});
})
app.get('/title',(req,res)=>{
    res.render('mode/add-title',{layout:adminLayout});
})
app.get('/create-note',(req,res)=>{
    res.render('mode/create-note',{layout:adminLayout});
})
app.get('/view-note',(req,res)=>{
    res.render('mode/add-note',{layout:adminLayout});
})



app.listen(PORT, ()=>{
    console.log('application is listening on port ' +PORT);
})