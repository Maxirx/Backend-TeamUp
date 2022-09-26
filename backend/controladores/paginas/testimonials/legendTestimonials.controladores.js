const { legendTestimonials } = require("../../../basededatos")



const ALLLEGENDS = {
    getLegends: async (req, res) => {

        try {
            const dato = await legendTestimonials.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createLegends: async (req, res) => {


        try {
            const {
                name
            } = req.body
            const dato = await legendTestimonials.create({
                name

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLLEGENDS 
