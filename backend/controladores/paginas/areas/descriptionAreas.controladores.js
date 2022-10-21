const { descriptionAreas } = require("../../../basededatos")



const ALLDESCRIPTIONAREAS = {
    getDescriptionAreas: async (req, res) => {

        try {
            const dato = await descriptionAreas.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createDescriptionAreas: async (req, res) => {


        try {
            const {
                name
            } = req.body
            const dato = await descriptionAreas.create({
                name

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLDESCRIPTIONAREAS
