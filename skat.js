const express = require('express')
const app = express()
const jwt  = require('jsonwebtoken');


var secret =  'secret'


var fs = require('fs')
var data = fs.readFileSync('data.txt').toString().split("\n")


app.get( '/getDetails' , (req,res) => {
  
    var decodeToken = jwt.decode(req.query.tokenUser);
    console.log(decodeToken)
    var userInfo
    for(i in data){         
         if(data[i].split(' ')[0] == decodeToken.substr(0,6)){
        
            userInfo = data[i]
            break
               
        }
    }
    
    res.send(userInfo)
})

app.listen(3333, (err) => {
    if(err){
        console.log('Can not listen!')
        return
    }
    
    console.log('Server listening...')
 
})
