var express = require('express');

var app = express();

app.get('/', (req, res) => 
{
    console.log('Hello world')
    res.send('Hello world') 
})

app.get('/crash',(req,res)=>{
    console.log('Crash!!')
    res.send('Crash')
    process.exit(1)
})

app.listen(process.env.PORT,
    ()=>console.log('Server Running',process.env.PORT));