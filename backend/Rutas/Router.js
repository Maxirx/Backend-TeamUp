const Router = require("express").Router();
const bodyParser = require("express")
const formulario = require("../controladores/tasks.controladores")
const { getForm, createForm } = formulario

var csrf = require('csurf');




var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })


Router.route("/home")
    .get(async (req, res) => {
        res.send("bienvenido a esto")
    })


Router.route("/formulario")
    .get(getForm)
    .post(parseForm, csrfProtection, (req, res) => { createForm(req, res) })

Router.route("/formulario/id")
    .get()
    .put()
    .delete()

module.exports = Router