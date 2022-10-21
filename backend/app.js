const express = require('express')
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("express")
var cookieParser = require('cookie-parser')
const session = require('express-session')
const csrfDSC = require('express-csrf-double-submit-cookie')
var csrf = require('csurf')
/* 

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
} */

const app = express()
app.use(cors(/* corsOptions */))

/* app.use(session({
    secret: "1235",
    resave: true,
    saveUninitialized: true
}))
app.use(cookieParser());
 */
/* app.use(cookieParser()) */

const Router = require('./Rutas/Router')
const pagesRouter = require("./Rutas/pagesRouter")


/* 
// create middleware
const options = function defaultValue(req) {
    return (req.body && req.body._csrf_token) ||
        (req.query && req.query._csrf_token) ||
        (req.headers['x-csrf-token']);
}

const csrfProtection = csrfDSC([options]);



// middleware to set cookie token 
app.use(csrfProtection)



// protect /api
app.get('/api/pruebaToken', csrfProtection.validate, (req, res) => {
    req.session.rol = "admin"
    res.send('send')
    res.status(200)
})
 */

/* var parseForm = bodyParser.urlencoded({ extended: false })
var csrfProtection = csrf({ cookie: true })
 */
app.use(morgan('dev'))
app.use(express.json());

/* 
app.get('/form', csrfProtection, function (req, res) {
    // pass the csrfToken to the view
    // res.render('send', { csrfToken: req.csrfToken() })
    res.send({ csrfToken: req.csrfToken() })
})

app.post('/process', parseForm, csrfProtection, function (req, res) {
    res.send('data is being processed')
})

 */

app.use("/api", /* csrfProtection, */ Router);
app.use("/api", pagesRouter)

module.exports = app