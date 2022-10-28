const { actionFeatures } = require("../../../basededatos")



const ALLACTIONS = {
    getActionFeatures: async (req, res) => {

        try {
            const dato = await actionFeatures.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createActionFeatures: async (req, res) => {


        try {
            const {
                title
            } = req.body
            const dato = await actionFeatures.create({
                title

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLACTIONS 
