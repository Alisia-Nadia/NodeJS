const jwt  = require('jsonwebtoken');

const express = require('express')
const app = express()

var secret =  'secret'

var fs = require('fs')
var data = fs.readFileSync('data.txt').toString().split("\n")

app.get( '/getToken' , (req,res) => {
   var token = 0

   //onsole.log(req.query.email + ' '+ req.query.password)
    for(i in data) {

        if( data[i].split(" ")[0] == req.query.email ){
           
            token = jwt.sign(data[i], secret);
            console.log(token)
        }
    }
   if(token){
        res.send(token)
   }
   else{
       res.send("Invalid email or password!")
   }  
})

app.listen(1111, (err) => {
    if(err){
        console.log('Can not listen!')
        return
    }
    
    console.log('Server listening...')
 
})
