
const express=require('express')
const ejs=require('ejs');
const app=express();
const bodyParser=require('body-parser');

// const path=require('path');
const PORT=process.env.PORT|8012;
app.use(express.static('public'));

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('home');
     })
 app.get('/about',(req,res)=>{
        res.render('about');
         })
app.get('/contect',(req,res)=>{
            res.render('contect');
             })
 app.get('/current',(req,res)=>{
             res.render('current');
                 })
 app.use(bodyParser.urlencoded({extended:true}));

 app.post('/success',(req,res)=>{
    const detail={
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contect,
        address:req.body.address,               
        city:req.body.city,
        
    }
  
   
    console.log(detail);
    // const output=`${detail.name} is completed successfully`
    res.render('success');
 })
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});

