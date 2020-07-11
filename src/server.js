const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'hbs')
app.set('views', path.resolve(__dirname, '../src/views'))

app.get('/batchcode', async (req, res) => {
    res.render('batchcode')
})


module.exports = { app }