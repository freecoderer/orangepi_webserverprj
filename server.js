
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'reactproject/build')))

app.get('/', (reg, res) => {

    res.sendFile(path.join(__dirname, 'reactproject/build/index.html'));
    

});

app.listen(5000, ()=>console.log('http://localhost:5000/'));