const { descriptionsAbout } = require("../../../basededatos")



const ALLDESCRIPTIONSABOUT = {
    getDescriptionsAbout: async (req, res) => {

        try {
            const dato = await descriptionsAbout.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createDescriptionsAbout: async (req, res) => {


        try {
            const {
                name
            } = req.body
            const dato = await descriptionsAbout.create({
                name

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLDESCRIPTIONSABOUT 
