//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: index.js
//
// DESCRIPTION: Creates and configures the SequelizeJS instance used to
//              communicate with the database; pulls in, defines and associates
//              all table models of the database.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/10/18
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
'use strict';

// Native modules
var fs   = require('fs');
var path = require('path');

// Dependency modules
var Sequelize = require('sequelize');
//  cls       = require('continuation-local-storage');
//  phone     = require('phone');

// Local modules
var name     = process.env.DB_NAME || 'clibsy_dev';
var username = process.env.USERNAME || 'clibsy';
var pw       = process.env.PASSWORD || 'clibsy';
var host     = process.env.HOST || 'localhost';
var logging  = process.env.LOGGING || false;

// -----------------------------------------------------------------------------
// INTIALIZE & CONNECT DATABASE
// -----------------------------------------------------------------------------
var db = {};

// create namespace used for managed transactions in Sequelize
// Sequelize.cls = cls.createNamespace('clibsy-sequelize-namespace');

// new Sequelize(database, username, password, { attributes });
var sequelize = new Sequelize(name, username, pw, {
    host: host, // custom host; default: 'localhost'
//  port: 3306, // custom port; default: 3306

    logging: logging,    // disable logging; default: console.log

//  maxConcurrentQueries: 100,  // max concurrent database requests; default: 50
    dialect: 'postgres',        // the sql dialect of the database; default: 'mysql'
//  omitNull: true,             // disable inserting undefined values as NULL; default: false

    // Specify options, which are used when sequelize.define is called.
    // defining each model will be not necessary except to override setting
    define: {
        timestamps: true,       // adds timestamp attributes (updatedAt, createdAt)
        underscored: true,
        freezeTableName: true,  // don't pluralize model name for table name creation
        syncOnAssociation: true,
        engine: 'InnoDB',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        //classMethods: {method1: function () {}},
        //instanceMethods: {method2: function () {}},
    },

    // define this to always force sync for models; currently set in server.js
//  sync: { force: true },

    // sync after each association (see below). If set to false, you need to
    // sync manually after setting all associations. Default: true
//  syncOnAssociation: true,

    // use pooling in order to reduce db connection overload and to increase speed
    pool: { maxConnections: 5, maxIdleTime: 30},

    // language is used to determine how to translate words into singular or plural
    // form based on the inflection project; default: en (english)
    language: 'en'
});

fs.readdirSync(__dirname)
  // filter out directory linking files ('.', '..') and this file (index.js)
  .filter(function (file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  // add each model to the database model
  .forEach(function (file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

// Call associate() on each of the models
Object.keys(db).forEach(function (modelName) {
    /* istanbul ignore else */
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

// add validator functions for phone
// sequelize.Validator.extend('isPhone', function (number, country) {
//     return phone(number, country).length > 0;
// });

// sequelize.Validator.extend('toPhone', function (number, country) {
//     var normalized = phone(number, country);
//     if (normalized.length > 0) {
//         return normalized[0];
//     }
//     else {
//         return null;
//     }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
