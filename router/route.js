const express =  require("express");
const router =  express.Router();


// routes to go
const adminLayout = '../views/layout/user_layout';
router.get('/dashboard',(req,res)=>{
    res.render('mode/index',{layout:adminLayout});
})
router.get('/title',(req,res)=>{
    res.render('mode/add-title',{layout:adminLayout});
})
router.get('/create-note',(req,res)=>{
    res.render('mode/create-note',{layout:adminLayout});
})
router.get('/view-note',(req,res)=>{
    res.render('mode/view-note',{layout:adminLayout});
})


router.post('register',(req,res)=>{
    
})


module.exports = router;