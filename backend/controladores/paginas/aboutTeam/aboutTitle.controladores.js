const { titleAbout } = require("../../../basededatos")



const ALLTITLEABOUT = {
    getTitleAbout: async (req, res) => {

        try {
            const dato = await titleAbout.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createTitleAbout: async (req, res) => {


        try {
            const {
                name
            } = req.body
            const dato = await titleAbout.create({
                name

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLTITLEABOUT 