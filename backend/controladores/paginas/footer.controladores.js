const { footer } = require("../../basededatos")



const TODOSLOSFOOTERS = {
    getFooter: async (req, res) => {

        try {
            const dato = await footer.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createFooter: async (req, res) => {


        try {
            const {
                name
            } = req.body
            const dato = await footer.create({
                name

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = TODOSLOSFOOTERS 
