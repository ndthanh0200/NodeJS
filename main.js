const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    var a = 1;
    var b = 2;

    var c = a + b;

    return res.send('test');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})