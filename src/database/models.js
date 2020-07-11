const { db } = require("./connection")
const { DataTypes } = require('sequelize')

const course = db.define('course', {
    id: {
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: DataTypes.STRING(20)
})


const teacher = db.define('teacher', {
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
})

const center = db.define('center', {
    id: {
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(10),
        allowNull: false
    }

})

const season = db.define('season', {
    id: {
        type: DataTypes.STRING(2),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(10),
        allowNull: false
    }

})

const batch = db.define('batch', {
    code: {
        type: DataTypes.STRING(8),
        primaryKey: true
    },
    year: DataTypes.INTEGER(4),
    start: DataTypes.DATE,
    end: DataTypes.DATE

})


//association
batch.belongsTo(course)
batch.belongsTo(center)
batch.belongsTo(season)

course.hasMany(batch)
center.hasMany(batch)
season.hasMany(batch)

// db.sync()

module.exports = { db, course, teacher, center, season, batch }