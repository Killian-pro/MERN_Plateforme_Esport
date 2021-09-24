var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors')
var indexRouter = require('./routes/index');
var mongoose = require ('mongoose')
LeagueOfLegendsRouter = require('./routes/LeagueOfLegends') 
PlayerWithID = require('./routes/PlayerWithID') 
Player = require('./routes/PlayerRouteur') 
CSGO = require('./routes/CSGO') 





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false })); 
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mongodb
mongoose.connect("mongodb+srv://whatthegame:whatthegame@whatsthegame.wtmjj.mongodb.net/Esport")
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));

app.use('/', indexRouter);
app.use('/Teams', require("./routes/TeamsRouteur"));
app.use('/Platforms', require("./routes/PlatformsRouteur"));
app.use('/Games', require("./routes/GamesRouteur"));
app.use('/GamesPlayers', require("./routes/GamePlayersRouteur"));
app.use('/GamesPlatforms', require("./routes/GamePlatformsRouteur"));
app.use('/Player', Player);
app.use('/PlayerWithID', PlayerWithID);
app.use('/LeagueOfLegends',LeagueOfLegendsRouter)
app.use('/CSGO',CSGO)

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
