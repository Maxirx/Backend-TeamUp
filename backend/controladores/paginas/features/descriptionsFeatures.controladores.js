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
                title
            } = req.body
            const dato = await descriptionFeatures.create({
                title

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLDESCRIPTIONSFEATURES 
