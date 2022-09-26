const { titleAreas } = require("../../../basededatos")



const ALLTITLEAREAS = {
    getTitleAreas: async (req, res) => {

        try {
            const dato = await titleAreas.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createTitleAreas: async (req, res) => {


        try {
            const {
                name
            } = req.body
            const dato = await titleAreas.create({
                name

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLTITLEAREAS
