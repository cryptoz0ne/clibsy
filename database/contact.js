//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: contact.js
//
// DESCRIPTION: Definition of the contact table model used by SequelizeJS to map
//              objects.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/11/02
//******************************************************************************
'use strict';

module.exports = function(sequelize, DataTypes) {
    var Contact = sequelize.define('Contact', {
        /*eslint-disable camelcase, new-cap */
        contact_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        }
        /*eslint-enable camelcase, new-cap */
    }, {
        // timestamps: true,      // defaulted globally
        // createdAt:  true,
        // updatedAt:  true,
        paranoid: false,
        // freezeTableName: true, // defaulted globally
        tableName: 'contact',       // force table name to this value
        validate: {
        },
        classMethods: {
            associate: function(models) {
                Contact.belongsTo(models.User,  { foreignKey: 'user_id' });
                Contact.hasMany(models.Phone,   { as: 'Phones',    foreignKey: 'contact_id' });
                Contact.hasMany(models.Address, { as: 'Addresses', foreignKey: 'contact_id' });
            },
            extractName: function(db, value) {
                value = db.Sequelize.Validator.trim(db.Sequelize.Validator.toString(value));
                if (db.Sequelize.Validator.equals(value, '')) {
                    value = null;
                }

                return value;
            },
        },
        instanceMethods: {
        }
    });

    return Contact;
};
