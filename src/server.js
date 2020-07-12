const express = require('express')
const app = express()
const path = require('path')
const { center, season, course, batch } = require('./database/models')

app.set('view engine', 'hbs')
app.set('views', path.resolve(__dirname, './views'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/batchcode', async (req, res) => {

    try {
        const centers = await center.findAll()
        const seasons = await season.findAll()
        const courses = await course.findAll()
        const years = [2020, 2021, 2022, 2023]
        res.render('batchcode', {
            centers, seasons, courses, years
        })

    } catch (e) {
        console.error(e)
    }

})

app.post('/batchcode', async (req, res) => {

    let batchcode = "" //wdpp18s1
    batchcode += req.body.course
    batchcode += req.body.center
    batchcode += req.body.year.substr(2)
    batchcode += req.body.season
    batchcode += req.body.batch_no

    try {
        const new_batch = await batch.create({
            code: batchcode,
            year: req.body.year,
            courseId: req.body.course,
            centerId: req.body.center,
            seasonId: req.body.season,
            start: Date.parse(req.body.start),
            end: Date.parse(req.body.end),
        })
        // console.log(new_batch)
        res.send(new_batch.code)

    } catch (e) {
        console.error(e)
    }


})

app.use('/batches', async (req, res) => {
    try {
        const batches = await batch.findAll({
            include: [course, season, center]
        })
        res.render('batches', { batches })


    } catch (e) {
        console.error(e)
    }
})


module.exports = { app }