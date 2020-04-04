
const FormData = require('form-data')
const axios = require('axios').default
const fs = require('fs')
const urlGen = require('./generateUrl')
let URL = urlGen.getUrl()

let file = './file/SAAC01.PNG'
let data = new FormData();
data.append('file', fs.createReadStream(file))
//let headers = data.getHeaders();
console.log(URL)
axios.put(URL, data, {
    headers: {
        "Content-Type": "application/octet-stream"
    }
})
.then(response => console.log(response))

