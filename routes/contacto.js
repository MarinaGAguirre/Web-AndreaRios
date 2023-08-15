var express = require('express');
var router = express.Router();
//var nodemailer = require('nodemailer');

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contacto');
});

/* POST datos de formulario */

/*router.post("/", async (req, res, next) => {
  console.log(req.body); // Acá pregunto: Estoy capturando datos?

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.mensaje;

  //abre var obj
  var obj = {
    to: "andrearios.masoterapeuta@gmail.com",
    subject: "Contacto Web Andrea Rios",
    html:
      nombre +
      " se contacto a través de la web y quiere info a este correo " +
      email +
      ". <br> Además comentó: " +
      mensaje +
      ". <br> Su tel es: " +
      tel,
  }; //cierra var obj

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  }); //cierra var transport

  var info = await transporter.sendMail(obj);

  res.render("gracias"); */
 
/* CIERRA POST petición del */

module.exports = router;