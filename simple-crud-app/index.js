const express = require('express')
const userRoutes = require('./routes/users.js');

const users = [{
    "firstName":"John",
    "lastName":"Doe",
    "age":25
}
,{
    "firstName":"Marry",
    "lastName":"Clo",
    "age":30
}
]

const app = express();

app.listen(3000,()=>{
    console.log("server is start on port 3000")
})

app.get('/users',(req,res)=>{
    console.log(users)
    res.send('Hello from API');
})

app.use('/users',userRoutes)

