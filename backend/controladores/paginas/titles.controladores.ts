const { titles } = require("../../basededatos")
import { TitleNavbar } from "../../classModel/footer/tittle"


const ALLTITLES = {
    getTitles: async (req, res) => {



        try {


            const dato: TitleNavbar[] = await titles.findAll()


            res.send(dato)
        } catch (error) {
            return res.json({ message: error.message })
        }



    },

    createTitles: async (req, res) => {


        try {
            const {
                tittle
            } = req.body
            const dato = await titles.create({
                tittle

            })

            res.send(dato)



        } catch (error) {
            return res.json({ message: error.message })
        }

    }
}

module.exports = ALLTITLES