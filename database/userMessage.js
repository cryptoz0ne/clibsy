//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: userMessage.js
//
// DESCRIPTION: Definition of the user_message table model used by SequelizeJS
//              to map objects.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/10/18
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
'use strict';

module.exports = function defineUserMessage(sequelize, DataTypes) {
    var UserMessage = sequelize.define('UserMessage', {
        /*eslint-disable camelcase, new-cap */
        is_sender: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        is_edited: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        is_flagged: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        is_read: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
        /*eslint-enable camelcase, new-cap */
    }, {
        // timestamps: true,       // defaulted globally
        // createdAt:  true,
        // updatedAt:  true,
        paranoid: false,
        // freezeTableName: true,  // defaulted globally
        tableName: 'user_message', // force table name to this value
        validate: {
        },
        hooks: {
        },
        classMethods: {
            associate(models) { // eslint-disable-line no-unused-vars
                // user_id and message_id foreign key references handled by through table definition
            }
        },
        instanceMethods: {
        }
    });

    return UserMessage;
};
