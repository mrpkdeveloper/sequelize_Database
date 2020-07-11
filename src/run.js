const { db } = require('./database/models')
const { app } = require('./server')

const start = async () => {
    try {
        await db.sync()
        app.listen(3333, () => { console.log("server started at http://localhost:3333") })
    } catch (e) {
        console.log(e)
    }

}

start()