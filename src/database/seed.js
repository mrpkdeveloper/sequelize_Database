const { db, center, batch, season, course, teacher } = require('./models')

const seed = async () => {
    try {

        // db.sync({ alter: true })
        await center.bulkCreate([
            { id: "PP", name: "pitampura", city: "delhi" },
            { id: "DW", name: "dwarka", city: "delhi" },
            { id: "NO", name: "noida", city: "delhi" },
            { id: "DD", name: "dehradun", city: "dehradun" },
            { id: "OL", name: "online", city: "delhi" }
        ], {
            ignoreDuplicates: true
        })

        await season.bulkCreate([
            { id: "S", name: "summer" },
            { id: "F", name: "fall" },
            { id: "W", name: "winter" },
            { id: "P", name: "spring" }
        ], {
            ignoreDuplicates: true
        })
        await course.bulkCreate([
            { id: "LP", name: "launchpad" },
            { id: "CX", name: "crux" },
            { id: "AD", name: "Android developmen" },
            { id: "WD", name: "web development" }
        ], {
            ignoreDuplicates: true
        })

    } catch (e) {
        console.log(e)
    }
}

seed()