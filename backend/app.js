const express = require('express')
const morgan = require("morgan")
const cors = require("cors")
const bodyParser = require("express")
var cookieParser = require('cookie-parser')



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

const csrfDSC = require('express-csrf-double-submit-cookie')


// create middleware
const options = function defaultValue(req) {
    return (req.body && req.body._csrf_token) ||
        (req.query && req.query._csrf_token) ||
        (req.headers['x-csrf-token']);
}

const csrfProtection = csrfDSC([options]);


app.use(cookieParser());

// middleware to set cookie token 
app.use(csrfProtection)



// protect /api
app.post('/api/pruebaToken', csrfProtection.validate, function (req, res) {
    res.send('send')
    res.status(200).end();
})

app.use(morgan('dev'))
app.use(express.json());
app.use(cookieParser())






app.use("/api", csrfProtection.validate, Router);
app.use("/api", pagesRouter)

module.exports = app