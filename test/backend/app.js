var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studysRouter = require('./routes/studys')

/* Mongo DB */
var mongoose = require('mongoose') 
var mongoconfig = require('./config/Mongo.json')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Body-Parser
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

// Node.js의 native Promise 사용
mongoose.Promise = global.Promise

// connect to mongoserver
mongoose.connect(mongoconfig.mongoURI, {useNewUrlParser: true}).then(
  () => console.log('successfully connected!')
).catch(e => console.error(e))

app.use('/api', indexRouter);
app.use('/users', usersRouter);
app.use('/studys', studysRouter);
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
