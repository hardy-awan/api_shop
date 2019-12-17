const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express()

mongoose.connect('mongodb://localhost/api_shop')
.then(db => console.log('db connected'))
.catch(err => console.log(err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
    })

)

require("./router/router")(app)
const PORT = process.env.PORT || 7100

app.listen(PORT, () => {
    console.log('Berhasil menjalankan server pada PORT= ${PORT}')
}) 