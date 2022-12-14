const { personas } = require("../basededatos")
const nodemailer = require("nodemailer");
const multer = require("multer")

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');



const sendEmail = async (email) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MI_CUENTA,
      pass: process.env.MI_CONTRA,
    },
  });

  let sender = process.env.MI_CUENTA;
  let mailOptions = {
    from: sender,
    to: email,
    subject: "Formulario enviado ",
    html: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    
        <style type="text/css">
            @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
            @import url('//db.onlinewebfonts.com/c/deb32b91d90407c8527dfeaac14994d6?family=Aileron');
    
            * {
                margin: 0;
                padding: 0
            }
    
            body {
    
                background-color: #91DBE4;
                font-family: Poppins;
    
            }
    
            .card {
                display: flex;
                width: 100%;
                background-color: #fff
            }
    
            .content h1 {
                margin-top: 34px;
                font-size: 40px;
                color: #031139;
    
            }
    
    
    
            .content1 h3 {
                font-family: "AileronRegular", 'Times New Roman', 'Helvetica Neue', Helvetica, Arial;
                margin-top: 34px;
                color: #91DBE4;
                font-weight: bold;
            }
    
            .content2 {
                font-size: 20px;
                color: #031139;
                font-weight: bold;
            }
    
    
    
    
    
    
            /*banner***************************************/
            .banner {
                width: 100%;
                background-color: #91DBE4;
                background-size: cover;
                font-size: 80px;
                text-align: center;
                padding: 40px 15px;
            }
    
    
            .img-banner {
                width: 180px;
                height: 100px;
            }
    
            /*social media***************************************/
    
    
    
            .content-footer {
                text-align: center;
                margin-top: 10px;
            }
    
            .content h3 {
                letter-spacing: 1px;
                font-size: 22px;
            }
    
            .content span {
                position: relative;
                top: 10px;
                font-weight: 500;
                font-size: 18px;
            }
    
    
            .input-text {
                margin-top: 30px;
                width: 100%;
                padding: 0px 40px;
                box-sizing: border-box;
                position: relative;
            }
    
            .input-text input {
                width: 100%;
                height: 57px;
                background-color: #abc9e4;
                outline: none;
                border: none;
                border-radius: 7px;
                padding: 0px 40px;
                box-sizing: border-box;
                font-size: 16px;
            }
    
    
    
            .social {
                margin-top: 30px;
                padding: 0px 40px;
                list-style: none;
                display: flex;
                justify-content: center;
            }
    
            .social li a {
                height: 50px;
                width: 50px;
                display: flex;
                border-radius: 50%;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                color: #fff;
                font-size: 19px;
                margin: 0px 5px;
            }
    
    
            .social li a {
                background-color: #FF6207;
            }
    
            .social li a:hover {
                background-color: #91DBE4;
                color: #031139;
    
            }
        </style>
        <title>TeamUp | Verificaci??n</title>
    </head>
    
    <body>
    
    
        <div class="banner">
            <img class="img-banner"
                src="https://res.cloudinary.com/academia/image/upload/v1661791041/Teamup/Logo_teamUp_Azul_1920X1080_ncevmb.png"></img>
    
            <div class="row d-flex justify-content-center">
                <div class="col-md-8">
                    <div class="card px-5 py-4">
                        <div class="content">
                            <h1><strong>Bienvenid@!</strong></h1>
                        </div>
                        <div class="content1">
                            <h3>Gracias por registrarte en teamUp</h3>
                            <div class="content2">
                                <span>
                                    <p>Hemos recibido tu registro para ser parte de teamUp!
                                        En los pr??ximos d??as te estaremos contactando para empezar tu proceso</p>
                                </span>
                            </div>
                        </div>
                        <hr>
                        <div class="content-footer">
                            <ul class="social">
    
                                <li><a href="https://www.linkedin.com/company/teamupco/" target="_blank"
                                        rel=" noopener noreferrer"><i class="fa fa-linkedin"></i></a></li>
                                <li><a href="https://www.instagram.com/teamup_co/" target="_blank"
                                        rel=" noopener noreferrer"><i class="fa fa-instagram"></i></a></li>
                                <li><a href="https://www.facebook.com/teamupcol?_rdc=1&_rdr" target="_blank"
                                        rel=" noopener noreferrer"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="mailto:info@teamupco.co" target="_blank" rel=" noopener noreferrer"><i
                                            class="fa fa-envelope"></i></a></li>
    
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    
    </html>`
  };
  await transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent");
    }
  });
};


const formulario = {



  getForm: async (req, res) => {

    try {
      const formularios = await personas.findAll()

      class Personas {
        constructor(id, ePrimerNombre, apellido, email, telefono, pais, celular, areaVoluntario, carrera, medio) {
          this.id = id;
          this.primerNombre = ePrimerNombre;

          this.apellido = apellido;

          this.email = email;
          this.telefono = telefono;
          this.pais = pais;
          this.celular = celular;
          this.areaVoluntario = areaVoluntario;
          this.carrera = carrera;

          this.medio = medio;

        }
      }
      const id = [];
      const primerNombre = [];
      const apellido = [];
      const email = [];
      const telefono = [];
      const pais = [];
      const celular = [];
      const areaVoluntario = [];
      const carrera = [];
      const medio = [];


      for (let i = 0; i < formularios.length; i++) {
        const id1 = formularios[i].dataValues.id;
        id.push(id1)
        const Nombre1 = cryptr.decrypt(formularios[i].dataValues.primerNombre);
        primerNombre.push(Nombre1)

        const apellido1 = cryptr.decrypt(formularios[i].dataValues.apellido);
        apellido.push(apellido1)

        const emailDes = cryptr.decrypt(formularios[i].dataValues.email);
        email.push(emailDes)
        const telefonoDes = formularios[i].dataValues.telefono;
        telefono.push(telefonoDes)
        const pais1 = cryptr.decrypt(formularios[i].dataValues.pais);
        pais.push(pais1)
        const celular1 = cryptr.decrypt(formularios[i].dataValues.celular);
        celular.push(celular1)
        const areaVoluntario1 = cryptr.decrypt(formularios[i].dataValues.areaVoluntario);
        areaVoluntario.push(areaVoluntario1)
        const carrera1 = cryptr.decrypt(formularios[i].dataValues.carrera);
        carrera.push(carrera1)

        const medio1 = cryptr.decrypt(formularios[i].dataValues.medio);
        medio.push(medio1)



      }



      const formulariosDes = []
      for (let i = 0; i < primerNombre.length; i++) {
        const dataValues = new Personas(id[i], primerNombre[i], apellido[i], email[i], telefono[i], pais[i], celular[i], areaVoluntario[i], carrera[i], medio[i]);
        formulariosDes.push(data = dataValues)

      }


      res.json(formulariosDes)
    } catch (error) {
      return res.json({ message: error.message })
    }

  },

  createForm: async (req, res) => {

    console.log(req.params);

    try {
      const {
        primerNombre,
        apellido,
        email,
        celular,
        pais,
        telefono,
        carrera,
        areaVoluntario,
        medio,
      } = req.body
      console.log(primerNombre);
      const eprimerNombre = cryptr.encrypt(primerNombre);
      const eapellido = cryptr.encrypt(apellido);
      const eemail = cryptr.encrypt(email);
      const ecelular = cryptr.encrypt(celular);
      const epais = cryptr.encrypt(pais);
      const etelefono = cryptr.encrypt(telefono);
      const eareaVoluntario = cryptr.encrypt(areaVoluntario);
      const ecarrera = cryptr.encrypt(carrera);
      const emedio = cryptr.encrypt(medio);


      const nuevaPersona = await personas.create({
        primerNombre: eprimerNombre,
        apellido: eapellido,
        celular: ecelular,
        email: eemail,
        telefono: etelefono,
        pais: epais,
        ciudadDeResidencia: eciudadDeResidencia,
        areaVoluntario: eareaVoluntario,
        carrera: ecarrera,
        medio: emedio
      })
      await sendEmail(email);
      res.json(nuevaPersona)



    } catch (error) {
      return res.json({ message: error.message })
    }

  }
}

module.exports = formulario