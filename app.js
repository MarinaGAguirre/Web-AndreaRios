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
/*var dermaplaningRouter = require('./routes/dermaplaning');
var terapia-ledRouter = require('./routes/terapia-led);
var nano-botoxRouter = require('./routes/nano-botox');
var limpieza-facialRouter = require('./routes/limpieza-facial');
var radiofrecuencia-facialRouter = require('./routes/radiofrecuencia-facial');
var ultracavitacionRouter = require('./routes/ultracavitacion');
var depilacion-definitivaRouter = require('./routes/depilacion-definitiva');
var lipolaser-no-invasivoRouter = require('./routes/lipolaser-no-invasivo');
var radiofrecuencia-corporalRouter = require('./routes/radiofrecuencia-corporal');
var reflexologiaRouter = require('./routes/reflexologia');
var masaje-antiestresRouter = require('./routes/masaje-antiestres');
var drenaje-linfaticoRouter = require('./routes/drenaje-linfatico');
var masaje-terapeuticoRouter = require('./routes/masaje-terapeutico');
var reikiRouter = require('./routes/reiki');
var cuppingRouter = require('./routes/cupping');
var biomagnetismoRouter = require('./routes/biomagnetismo');
var esferas-chinasRouter = require('./routes/esferas-chinas');
var sobre-andreaRouter = require('./routes/sobre-andrea');*/
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
/*app.use('/dermaplaning', dermaplaningRouter);
app.use('/terapia-led', terapia-ledRouter);
app.use('/nano-botox', nano-botoxRouter);
app.use('/limpieza-facial', limpieza-facialRouter);
app.use('/radiofrecuencia-facial', radiofrecuencia-facialRouter);
app.use('/ultracavitacion', ultracavitacionRouter);
app.use('/depilacion-definitiva', depilacion-definitivaRouter);
app.use('/lipolaser-no-invasivo', lipolaser-no-invasivoRouter);
app.use('/radiofrecuencia-corporal', radiofrecuencia-corporalRouter);
app.use('/reflexologia', reflexologiaRouter);
app.use('/masaje-antiestres', masaje-antiestresRouter);
app.use('/drenaje-linfatico', drenaje-linfaticoRouter);
app.use('/masaje-terapeutico', masaje-terapeuticoRouter);
app.use('/reiki', reikiRouter);
app.use('/cupping', cuppingRouter);
app.use('/biomagnetismo', biomagnetismoRouter);
app.use('/esferas-chinas', esferas-chinasRouter);
app.use('/sobre-andrea', sobre-andreaRouter);*/
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
