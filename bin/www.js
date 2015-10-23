#!/usr/bin/env node

var http = require('http');

var debug = require('debug')('clibsy');
var app   = require('../app');
// var db    = require('../database');

app.set('port-http',  process.env.PORT || 8080);
app.set('port-https', process.env.PORT || 8443);
app.set('ip',         process.env.IP   || '0.0.0.0');

// -----------------------------------------------------------------------------
// SYNC DATABASE/START SERVER
// -----------------------------------------------------------------------------
debug('* Sync\'ing with the database ...');
// db.sequelize.sync()
//     .then(function() {
        debug('* Starting HTTP server ...');
        var server = http.createServer(app).listen(app.get('port-http'), app.get('ip'), function() {
            debug('* Listening : (' + server.address().address + ':' + server.address().port + ')');
        });
//     })
//     .catch(function(error){
//         debug('\n*** ERROR(S) during startup:\n' + error.message + '\n' + error);
//         throw error;
//     });
