'use strict';

//------------------------------------------------------------------------------
// FILE: userMessage.js
//
// DESCRIPTION: Definition of the user_message table model used by SequelizeJS
//              to map objects.
//
// © 2015 Clibsy LLC
//------------------------------------------------------------------------------

module.exports = function(sequelize, DataTypes) {
    var UserMessage = sequelize.define('UserMessage', {
        is_sender: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        is_flagged: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        is_read: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
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
            associate: function(models) {
            }
        },
        instanceMethods: {
        }
    });

    return UserMessage;
};
