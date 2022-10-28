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
        res.send([{ csrfToken: req.csrfToken() }, ["Primer Nombre"], ["Segundo Nombre"], ["Apellido"], ["Segundo Apellido"], ["Email"], ["Telefono"], , ["Pais"], ["Segundo Apellido"], ["Ciudad de Residencia"], ["Area de Voluntariado"], ["Estudios"], ["Institucion Educativa"], ["Semestre"], , ["¿Donde nos conociste?"]])
    })

app.post('/process', Bpar, csrfProtect, createForm)

app.use("/api", Router);
app.use("/api", pagesRouter)

module.exports = app