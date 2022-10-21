const app = require("./app")
const cors = require("cors");
require("./basededatos")


const sequelize = require("./basededatos")




const path = require('path');

const PORT = process.env.PORT || 4000


app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World')
})
const pers = require("./Model/modelsPages/personas")
const { conn } = require("./basededatos")






conn.sync({ /* alter: true  */ }).then(async () => {
    console.log("modelos sincronizados");
    app.get('/', async (request, response) => {
        return response.status(200).send({ message: `Welcome` })
    })
    try {
        app.listen(PORT, () => {
            console.log('servidor conectado ' + PORT); // eslint-disable-line no-console
        });
    } catch (error) {
        app.listen(PORT, () => {
            console.log('Imposible conectarse ' + error)
        });
    }


});




////////////// comando npm start


/* 

teamUp


Contacto 

Contenido 

Políticas


¿Qué hacemos?

Áreas

Caracteristicas

Testimonios


+57 316 396 9696

info@teamupco.co

Bogotá, Colombia


¿Qué hacemos?

Áreas

Caracteristicas

Testimonios


Terminos y Condiciones

Políticas de Privacidad

Preguntas Frecuentes


En teamUp conectamos a estudiantes universitarios, recién egresados y personas autodidáctas con empresas para que trabajen colaborativamente por medio de voluntariados.


Voluntario 

Empresario

1. Obtienes experiencia laboral.

2. Aplicas lo aprendido en tu formación.

3. Aprendes de manera práctica en una empresa.

4. Desarrollas habilidades digitales.

1. Fortaleces tu equipo de trabajo.

2. Aceleras el crecimiento de tu empresa.

3. Apoyas al talento joven a conocer el mercado laboral.

4. Mejoras tu presencia digital.


Áreas

Tenemos oportunidades en éstas áreas


MARKETING DIGITAL

DISEÑO GRÁFICO Y AUDIOVISUAL

DESARROLLO WEB Y DISEÑO WEB

*/