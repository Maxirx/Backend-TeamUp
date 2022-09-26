const { titleTestimonials } = require("../../../basededatos")



const ALLTITLESTESTIMONIALS = {
    getTitleTest: async (req, res) => {

        try {
            const dato = await titleTestimonials.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createTitleTest: async (req, res) => {


        try {
            const {
                name
            } = req.body
            const dato = await titleTestimonials.create({
                name

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLTITLESTESTIMONIALS 
