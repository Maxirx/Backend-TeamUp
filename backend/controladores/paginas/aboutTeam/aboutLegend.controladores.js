const { legendAbout } = require("../../../basededatos")



const ALLLEGENDSA = {
    getLegendsAbout: async (req, res) => {

        try {
            const dato = await legendAbout.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createLegendsAbout: async (req, res) => {


        try {
            const {
                name
            } = req.body
            const dato = await legendAbout.create({
                name

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLLEGENDSA
