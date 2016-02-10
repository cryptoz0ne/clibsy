//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: app.js
//
// DESCRIPTION: Central setup and configuration file including express and
//              database initialization.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/10/18
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
'use strict';

// TODO: get SSL certificate and run server as HTTPS (HTTP redirects to HTTPS)
// TODO: use jsdoc/dox to create in-code documentation; consider apiDoc for API documentation
// TODO: use HATEOAS (Hypermedia as the Engine of Application State) links for public API endpoints
// TODO: look for modules to continuously monitor/profile the server (npm: look)
// TODO: look for modules to handle logging throughout the codebase (npm: bunyan)

// TODO: are "catch-all" routes necessary per router? Or one overall catch in app.js?

// -----------------------------------------------------------------------------
// SETUP
// -----------------------------------------------------------------------------
// Dependency modules
var debug   = require('debug')('clibsy:app');
var verbose = require('debug')('verbose:clibsy:app');
var express = require('express');

var ENV        = process.env.NODE_ENV || 'development'; // production, test, ...
var apiVersion = process.env.API      || '/v1';
verbose('NODE_ENV = ' + ENV);

// -----------------------------------------------------------------------------
// CONFIGURATION
// -----------------------------------------------------------------------------
var app = express();

// configure sequelize with database models
var db = require('./database');

// configure and initialize passport
// var passport = require('./config/passport');
// app.use(passport.initialize());

// configure express application
app.use(express.static(__dirname + '/public'));

app.locals.rootDir = __dirname;

// -----------------------------------------------------------------------------
// ROUTES
// -----------------------------------------------------------------------------
// var routePath = './routes' + apiVersion;

// var Middlewares = require(routePath + '/middlewares');
// app.use(Middlewares.formParsing);

// app.use('/',                      require(routePath + '/index'));
// app.use(apiVersion,               require(routePath + '/authentication'));
// app.use(apiVersion + '/user',     require(routePath + '/user'));

// -----------------------------------------------------------------------------
// INTERVALS
// -----------------------------------------------------------------------------
// TODO: use redis to handle tokens; interval will be needed when verifying accounts

module.exports = app;
