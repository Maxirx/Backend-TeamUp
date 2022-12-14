const express = require('express')
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("express")
var cookieParser = require('cookie-parser')
var csrf = require('csurf');


const formulario = require("./controladores/tasks.controladores")
const { getForm, createForm } = formulario

/* const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
 */
const app = express()
app.use(cors(/* corsOptions */))

const Router = require('./Rutas/Router')
const pagesRouter = require("./Rutas/pagesRouter")


app.use(morgan('dev'))
app.use(express.json());
app.use(cookieParser())

var Bpar = bodyParser.urlencoded({ extended: false })

var csrfProtect = csrf({ cookie: true })

app.get('/api/form', csrfProtect,
    function (req, res) {
        res.send([{ csrfToken: req.csrfToken() }, ["Nombre(s)"], , ["Apellido(s)"], ["Correo Electrónico"], ["Nro- de Celular"], ["Pais de Residencia"], ["Indícanos un telefono Adiciconal"], ["Cuéntanos ¿Estas estudiando?¿?"], ["¿A que área te gustaría postular?"], ["Adjunta tu hoja de vida"], ["Donde nos conociste:"], ["He leido y estoy de acuerdo con los "], [" y nuestra "]])
    })

app.post('/api/form', Bpar, csrfProtect, (req, res) => { createForm(req, res) })

app.use("/api", Router);
app.use("/api", pagesRouter)

module.exports = app