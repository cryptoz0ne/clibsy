'use strict';

//------------------------------------------------------------------------------
// FILE: userSettings.js
//
// DESCRIPTION: Definition of the user_settings table model used by SequelizeJS
//              to map objects.
//
// © 2015 Clibsy LLC
//------------------------------------------------------------------------------

module.exports = function(sequelize, DataTypes) {
    var UserSettings = sequelize.define('UserSettings', {
        user_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            references: 'users',
            referencesKey: 'user_id',
            onDelete: 'cascade'
        },
        rcv_newsletter: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        allow_read_receipt: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        notify_method: {
            type: DataTypes.ENUM, // Another table foreign key?
            allowNull: false,
            defaultValue: 0,
            validate: {
            }
        },
        notify_msg_rcv: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        notify_msg_read: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    }, {
        // timestamps: true,        // defaulted globally
        // createdAt:  true,
        // updatedAt:  true,
        paranoid: true,
        // freezeTableName: true,   // defaulted globally
        tableName: 'user_settings', // force table name to this value
        validate: {
        },
        hooks: {
        },
        classMethods: {
            associate: function(models) {
                // user_id foreign key reference handled above in field definition
            }
        },
        instanceMethods: {
        }
    });

    return UserSettings;
};