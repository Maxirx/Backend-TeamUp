const { descriptionFeatures } = require("../../../basededatos")



const ALLDESCRIPTIONSFEATURES = {
    getDescriptionFeatures: async (req, res) => {

        try {
            const dato = await descriptionFeatures.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createDescriptionFeatures: async (req, res) => {


        try {
            const {
                name
            } = req.body
            const dato = await descriptionFeatures.create({
                name

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLDESCRIPTIONSFEATURES 
