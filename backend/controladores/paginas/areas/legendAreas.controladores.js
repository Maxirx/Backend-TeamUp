const { legendAreas } = require("../../../basededatos")



const ALLLEGENDSAREAS = {
    getLegendsAreas: async (req, res) => {

        try {
            const dato = await legendAreas.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createLegendsAreas: async (req, res) => {


        try {
            const {
                name
            } = req.body
            const dato = await legendAreas.create({
                name

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLLEGENDSAREAS
