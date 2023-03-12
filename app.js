const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("request");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname +"/success.html")
});

app.post("/",function(req,res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.Email;
    var data = {
        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_field:{
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    var jsonData = JSON.stringify(data);
    //const url = 
    //https.request(url,options,function(response){

    })

   //res.send("The Nname received is " + firstName + " "+ lastName);
   //18dfee21cf185cd6583fd180529f414a-us17
   // Aid:d6256d5620
   console.log(firstName,lastName,email);
})
app.listen(process.env.PORT||3000,function(){
    console.log("Server started at 3000");
})