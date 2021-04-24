const express= require('express');
const path = require('path');
const port=8000;

const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));


var contactList=[
    {
        name:"Sanket",
        phone:"12345678910"
    }
    
     
  
]

app.get('/',function(req,res){
    // console.log(__dirname); 
    // res.send('<h1></hq>Cool,it is runnig ! or is it?</h1>')
return res.render('home',{
    title:"Contact List",
    contact_List:contactList
});
});
app.get('/practice',function(req,res){
    return res.render('practice',{
        title:"Let us play with ejas"
    });
})



app.listen(port,function(err){
    if(err){
        console.log('Error in runnig the server',err);}
        console.log('Yup Express Server is running on port', port);
    }
);

