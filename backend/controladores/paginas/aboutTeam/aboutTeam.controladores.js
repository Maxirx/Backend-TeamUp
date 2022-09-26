const { aboutTeam } = require("../../../basededatos")



const ALLABOUT = {
    getAbout: async (req, res) => {

        try {
            const dato = await aboutTeam.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createAbout: async (req, res) => {


        try {
            const {
                name
            } = req.body
            const dato = await aboutTeam.create({
                name

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLABOUT 
