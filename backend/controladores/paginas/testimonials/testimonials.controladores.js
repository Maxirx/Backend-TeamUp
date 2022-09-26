const { testimonials } = require("../../../basededatos")



const ALLTESTIMONIAL = {
    getTestimonials: async (req, res) => {

        try {
            const dato = await testimonials.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createTestimonials: async (req, res) => {


        try {
            const {
                name
            } = req.body
            const dato = await testimonials.create({
                name

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLTESTIMONIAL 
