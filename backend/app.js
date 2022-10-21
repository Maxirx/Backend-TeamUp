const express = require('express')
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("express")
var cookieParser = require('cookie-parser')
var csrf = require('csurf');


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
        res.render('send', { csrfToken: req.csrfToken() })
    })

app.use("/api", Router);
app.use("/api", pagesRouter)

module.exports = app