var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var bbglowRouter = require('./routes/bbglow');
var peelingRouter = require('./routes/peeling');
var tratamientoAntiagingRouter = require('./routes/tratamientoAntiaging');
var dermaplaningRouter = require('./routes/dermaplaning');
var terapiaLedRouter = require('./routes/terapiaLed');
var nanobotoxRouter = require('./routes/nanobotox');
var limpiezaFacialRouter = require('./routes/limpiezaFacial');
var radiofrecuenciaFacialRouter = require('./routes/radiofrecuenciaFacial');
var radiofrecuenciaCorporalRouter = require('./routes/radiofrecuenciaCorporal');
var lipolaserNoInvasivoRouter = require('./routes/lipolaserNoInvasivo');
/*var ultracavitacionRouter = require('./routes/ultracavitacion');
var depilacionDefinitivaRouter = require('./routes/depilacionDefinitiva');
var lipolaser-no-invasivoRouter = require('./routes/lipolaser-no-invasivo');
var reflexologiaRouter = require('./routes/reflexologia');
var masajeAntiEstresRouter = require('./routes/masajeAntiEstres');
var drenajeLinfaticoRouter = require('./routes/drenajeLinfatico');
var masajeTerapeuticoRouter = require('./routes/masajeTerapeutico');
var reikiRouter = require('./routes/reiki');
var cuppingRouter = require('./routes/cupping');
var biomagnetismoRouter = require('./routes/biomagnetismo');
var esferasChinasRouter = require('./routes/esferasChinas');
var sobreAndreaRouter = require('./routes/sobreAndrea');*/
var contactoRouter = require('./routes/contacto');
var graciasRouter = require('./routes/gracias');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/bbglow', bbglowRouter);
app.use('/peeling', peelingRouter);
app.use('/tratamientoAntiaging', tratamientoAntiagingRouter);
app.use('/dermaplaning', dermaplaningRouter);
app.use('/terapiaLed', terapiaLedRouter);
app.use('/nanobotox', nanobotoxRouter);
app.use('/limpiezafacial', limpiezaFacialRouter);
app.use('/radiofrecuenciaFacial', radiofrecuenciaFacialRouter);
app.use('/radiofrecuenciaCorporal', radiofrecuenciaCorporalRouter);
app.use('/lipolaserNoInvasivo', lipolaserNoInvasivoRouter);
/*app.use('/ultracavitacion', ultracavitacionRouter);
app.use('/depilacionDefinitiva', depilacionDefinitivaRouter);
app.use('/lipolaserNoInvasivo', lipolaserNoInvasivoRouter);
app.use('/reflexologia', reflexologiaRouter);
app.use('/masajeAntiEstres', masajeAntiEstresRouter);
app.use('/drenajeLinfatico', drenajeLinfaticoRouter);
app.use('/masajeTerapeutico', masajeTerapeuticoRouter);
app.use('/reiki', reikiRouter);
app.use('/cupping', cuppingRouter);
app.use('/biomagnetismo', biomagnetismoRouter);
app.use('/esferasChinas', esferasChinasRouter);
app.use('/sobreAndrea', sobreAndreaRouter);*/
app.use('/contacto', contactoRouter);
app.use('/gracias', graciasRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
