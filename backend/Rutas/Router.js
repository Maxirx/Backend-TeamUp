const Router = require("express").Router();
const bodyParser = require("express")
const formulario = require("../controladores/tasks.controladores")
const { getForm, createForm } = formulario

var csrf = require('csurf');
var Bpar = bodyParser.urlencoded({ extended: false })

var csrfProtect = csrf({ cookie: true })




Router.route("/home")
    .get(async (req, res) => {
        res.send("bienvenido a esto")
    })


Router.route("/formulario", csrfProtect)
    .get(csrfProtect)
    .post(createForm)

Router.route("/formulario/id")
    .get()
    .put()
    .delete()

module.exports = Router