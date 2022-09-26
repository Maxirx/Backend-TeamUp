const { descriptionsTestimonials } = require("../../../basededatos")



const ALLDESCRIPTIONSTEST = {
    getDescriptionsTest: async (req, res) => {

        try {
            const dato = await descriptionsTestimonials.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createDescriptionsTest: async (req, res) => {


        try {
            const {
                name
            } = req.body
            const dato = await descriptionsTestimonials.create({
                name

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLDESCRIPTIONSTEST 
