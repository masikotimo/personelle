const express = require ('express');
const parser = require('body-parser');
const morgan = require('morgan');
const mysql = require('mysql');
const session = require('express-session');
const delay = require('delay');
const server=express();


//we making our public folder static so it doesnt keep changing
server.use(express.static('./public'))

// creating a session object

server.use(session({
  //its like a secret so that someone doesnot access the information of the session
  secret:'sercret',

  //saves instances of the save user
  resave:true,

  //evenif someone hasnt successfully logged in, still keep track this can even keep track of how many times people have tried to log in failed or succeeded
  saveUninitialized:true
}));


//here we connect to the mysql database 
const connection =mysql.createConnection({
  host:'localhost',
  user:'admin',
  database:'tester',
  password:'mickeygerman1'


})

//uitilising morgan console  which gives information of our server activities

server.use(morgan('short'));

//utilising the body-parser to help us interpret our html that we shall use to access our name attributes from the html pages

server.use(parser.urlencoded({extended:false}))

var html_dir='./public/';

//building routes

//route for the index page
server.get("/", function(request, reponse) {
  reponse.sendfile(html_dir+"toyota.html");
});




//route for entering in the database
  
  server.post("/authet",(req,res)=>{

    //saving the  name attributes into variables
    const customer= req.body.customername;
    const name= req.body.named;
    const state= req.body.State;
    const partno= req.body.partno;
    const descri= req.body.descri;
    const ppp= req.body.ppp;
    const qtynamed= req.body.qtynamed;
    const radio= req.body.first;
    //const total= req.body.totaled;
    
    //edit
    const retail= req.body.retail;
    const oversize= req.body.over;
    
    const Shipped= req.body.first;

    //start
    var State=state;
    var price=ppp;
    var qty=qtynamed;

    var total,costed,shippingfee,salestax;
      
    

   
    


    

    //calculating salestax

       //kla and checked

costed=parseFloat(price) *parseFloat(qty);

if(State=='KLA' && retail){
salestax=(10/100)*costed;

}
 else if(State=='EBB'  && retail){
        salestax=(5/100)*costed;
       
 }
 else if(State=='MBR'  && retail){
        salestax=(5/100)*costed;
       
 }
 
 else{
        salestax=0;
       
 }

 console.log(price,qty,salestax)

   //calculating shipping fee
       

       //checking oversize first
       if (oversize) 
       {
              
                     if(Shipped){
       
                            if(Shipped =='FEDA'){
                                   shippingfee=parseFloat(qty) *(12.00+5.00);
                                   
                            

       
                                  
                            }
                            else if(Shipped =='FEDG'){
                                   shippingfee=parseFloat(qty) *(9.25+5.00);
                                   
                            

       
                            }
                            else if(Shipped =='US'){
                                   shippingfee=parseFloat(qty) *(8.50+5.00);
                                   
                            

       
                            }
                            else{
       
                                   shippingfee=parseFloat(qty) *(7.00+5.00);
                                   
                            

       
                            }
       
       
                      
                     }
       
                    
       
              
       } 
       else {
       
              if(Shipped){

                     if(Shipped =='FEDA'){
                            shippingfee=parseFloat(qty) *12.00;
                            
                            

                            
                     }
                     else if(Shipped =='FEDG'){
                            shippingfee=parseFloat(qty) *9.25;
                            
                            


                     }
                     else if(Shipped =='US'){
                            shippingfee=parseFloat(qty) *8.50;
                            
                            


                     }
                     else{

                            shippingfee=parseFloat(qty) *7.00;
                            
                            


                     }


                     
              }

              
       
       }

       console.log(shippingfee,Shipped)


        //**********computing totals*********

       
        total=costed+shippingfee+salestax;

        console.log(total)

 
 







    //DATABASE INSERTION
    
     //creating a string for our query to insert into table
    const querystring= "INSERT into toyota  values(?,?,?,?,?,?,?,?,?)";
    

    //using the connection to apply our query string and pass arguments of our variables
    connection.query(querystring,[customer,name,state,partno,descri,ppp,qtynamed,radio,total])


    // res.send('<script>alert("enter another form")</script>')
    // res.sendfile(html_dir+"toyota.html");
    
    
    setTimeout(function() {
      res.redirect("/")
      res.end();
  }, 10000);

    
    
    
  });



  

  //server to begin listening at port 4000

server.listen(4002);

//notifying the console that the connection has started
console.log("running at port 4002");

  
  

