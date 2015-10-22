var express                     = require('express');
var app                         = express();
var bodyParser                  = require('body-parser');
var morgan                      = require('morgan');
var mongoose                    = require('mongoose');

var jwt                         = require('jsonwebtoken');

var config                      = require('./api/config.js');
var User                        = require('./api/model/user.js');

//Test