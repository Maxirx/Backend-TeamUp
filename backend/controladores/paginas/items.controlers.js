const { items } = require("../../basededatos")



const ALLITEMS = {
    getItems: async (req, res) => {

        try {
            const dato = await items.findAll()
            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createItems: async (req, res) => {


        try {
            const {
                item
            } = req.body
            const dato = await items.create({
                items: item

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLITEMS