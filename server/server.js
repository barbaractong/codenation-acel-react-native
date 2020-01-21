const express = require('express')
const app = express()
const port = 3000

app.post('/', function(req, res){
    var encryptedSha1Data = req.body;
    console.log(encryptedSha1Data)
})

app.listen(port, () => console.log(`Example app listening on port port!`))