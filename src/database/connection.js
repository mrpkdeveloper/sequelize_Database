const sequelize = require('sequelize')

const db = new sequelize('batchdb', 'batchuser', 'batchpass', {
    dialect: "mysql",
    host: "localhost"
})

// db.authenticate()
//     .then(() => { console.log("databse connected successfully") })
//     .catch((e) => { console.log("e") })

module.exports = { db }    