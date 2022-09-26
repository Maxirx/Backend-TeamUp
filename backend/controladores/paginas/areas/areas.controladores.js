const { areas } = require("../../../basededatos")



const ALLAREAS = {
    getAreas: async (req, res) => {

        try {
            const dato = await areas.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createAreas: async (req, res) => {


        try {
            const {
                name
            } = req.body
            const dato = await areas.create({
                name

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLAREAS 
