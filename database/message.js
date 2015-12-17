//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: message.js
//
// DESCRIPTION: Definition of the message table model used by SequelizeJS to map
//              objects.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/10/18
//******************************************************************************
'use strict';

var MESSAGE_SUBJECT_MAX_LENGTH = 255;

module.exports = function defineMessage(sequelize, DataTypes) {
    var Message = sequelize.define('Message', {
        /*eslint-disable camelcase, new-cap */
        message_id: {
            type: DataTypes.BIGINT, // .UNSIGNED
            primaryKey: true,
            autoIncrement: true
        },
        subject: {
            type: DataTypes.STRING( MESSAGE_SUBJECT_MAX_LENGTH ),
            allowNull: false,
            defaultValue: '',
            validate: {
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: '',
            validate: {
            }
        }
        /*eslint-enable camelcase, new-cap */
    }, {
        // timestamps: true,      // defaulted globally
        // createdAt:  true,
        // updatedAt:  true,
        paranoid: true,
        // freezeTableName: true, // defaulted globally
        tableName: 'message',     // force table name to this value
        classMethods: {
            associate(models) {
                /*eslint-disable max-len */
                Message.belongsToMany(models.User, { as: 'users', foreignKey:'user_id', through: { model: models.UserMessage, unique: true } });
                /*eslint-enable max-len */
            }
        },
        instanceMethods: {
        }
    });

    return Message;
};
