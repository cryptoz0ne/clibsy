'use strict';

// database.js

// Native modules
var fs   = require('fs');
var path = require('path');

// Dependency modules
var Sequelize = require('sequelize');
var cls       = require('continuation-local-storage');
var phone     = require('phone');

// Local modules
var env    = process.env.NODE_ENV || 'development';
var config = require('../config/dbSettings')[env];

// -----------------------------------------------------------------------------
// INTIALIZE & CONNECT DATABASE
// -----------------------------------------------------------------------------
var db = {};

// create namespace used for managed transactions in Sequelize
// Sequelize.cls = cls.createNamespace('clibsy-sequelize-namespace');

// new Sequelize(database, username, password, { attributes });
var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host || 'localhost', // custom host; default: 'localhost'
//  port: 3306,                 // custom port; default: 3306

    logging: config.logging,    // disable logging; default: console.log

//  maxConcurrentQueries: 100,  // max concurrent database requests; default: 50
    dialect: 'mysql',           // the sql dialect of the database; default: 'mysql'
//  omitNull: true,             // disable inserting undefined values as NULL; default: false

    // Specify options, which are used when sequelize.define is called.
    // defining each model will be not necessary except to override setting
    define: {
        timestamps: true,       // adds timestamp attributes (updatedAt, createdAt)
        underscored: false,
        freezeTableName: true,  // don't pluralize model name for table name creation
        syncOnAssociation: true,
        engine: 'InnoDB',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        //classMethods: {method1: function() {}},
        //instanceMethods: {method2: function() {}},
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
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  // add each model to the database model
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

// Call associate() on each of the models
Object.keys(db).forEach(function(modelName) {
    /* istanbul ignore else */
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

// add validator functions for phone
sequelize.Validator.extend('isPhone', function(number, country) {
    return phone(number, country).length > 0;
});

sequelize.Validator.extend('toPhone', function(number, country) {
    var normalized = phone(number, country);
    if (normalized.length > 0)
        return normalized[0];
    else
        return null;
});

// add while loop promise to the Promises
sequelize.Promise.while = sequelize.Promise.method(function(condition, action) {
    if (!condition()) return;
    return action().then(sequelize.Promise.while.bind(null, condition, action));
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
