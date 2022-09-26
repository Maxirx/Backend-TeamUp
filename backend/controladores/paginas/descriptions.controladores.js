const { descriptions } = require("../../basededatos")



const ALLDESCRIPTIONS = {
    getDescriptions: async (req, res) => {

        try {
            const dato = await descriptions.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createDescriptions: async (req, res) => {


        try {
            const {
                descriptionsField
            } = req.body
            const dato = await descriptions.create({
                descriptionsField

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLDESCRIPTIONS 
