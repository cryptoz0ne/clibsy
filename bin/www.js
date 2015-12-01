#!/usr/bin/env node
//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: www.js
//
// DESCRIPTION: {{description}}
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/10/18
//******************************************************************************

// Node Modules
var http = require('http');

// Dependency Modules
var debug = require('debug')('clibsy');

// Local Modules
var app   = require('../app');
var db    = require('../database');

app.set('port-http',  process.env.PORT || 8080);
app.set('port-https', process.env.PORT || 8443);
app.set('ip',         process.env.IP   || '0.0.0.0');

// -----------------------------------------------------------------------------
// SYNC DATABASE/START SERVER
// -----------------------------------------------------------------------------
debug('* Sync\'ing with the database ...');
db.sequelize.sync()
    .then(function() {
        debug('* Starting HTTP server ...');
        var server = http.createServer(app).listen(app.get('port-http'), app.get('ip'), function() {
            debug('* Listening : (' + server.address().address + ':' + server.address().port + ')');
        });
    })
    .catch(function(error){
        debug('*** ERROR(S) during startup:\n' + error.message + '\n' + error);
        throw error;
    });
