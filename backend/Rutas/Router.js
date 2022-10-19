const Router = require("express").Router();
const bodyParser = require("express")
const formulario = require("../controladores/tasks.controladores")
const { getForm, createForm } = formulario



Router.route("/home")
    .get(async (req, res) => {
        res.send("bienvenido a esto")
    })


Router.route("/formulario")
    .get(getForm)
    .post(createForm)

Router.route("/formulario/id")
    .get()
    .put()
    .delete()

module.exports = Router