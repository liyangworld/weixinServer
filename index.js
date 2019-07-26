const express = require('express');
const app= express();

app.get('/', (req, res)=>{
    res.end('Hello world');
});
app.listen(8083, ()=>{
    console.log('Server is running at http://localhost:8083')
})
