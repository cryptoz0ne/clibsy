/*******************************************************************************
 * Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
 *
 * Unauthorized copying of this file, via any medium, is strictly prohibited.
 * Copying or distributing requires the express permission of Clibsy, LLC.
 *
 * PROJECT: clibsy.com
 *
 * FILE: message.js
 *
 * DESCRIPTION: Definition of the message table model used by SequelizeJS to map
 *              objects.
 *
 * AUTHOR: Joe Kramer joe@clibsy.com 2015/10/18
 ******************************************************************************/
'use strict';

var MESSAGE_SUBJECT_MAX_LENGTH = 255;

module.exports = function(sequelize, DataTypes) {
    var Message = sequelize.define('Message', {
        message_id: {
            type: DataTypes.BIGINT.UNSIGNED,
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
    }, {
        // timestamps: true,      // defaulted globally
        // createdAt:  true,
        // updatedAt:  true,
        paranoid: true,
        // freezeTableName: true, // defaulted globally
        tableName: 'song',        // force table name to this value
        validate: {
        },
        hooks: {
        },
        classMethods: {
            associate: function(models) {
                Message.belongsToMany(models.User, { as: 'Sender',  foreignKey:'user_id', through: { model: models.UserMessage, unique: true } });
            }
        },
        instanceMethods: {
        }
    });

    return Message;
};
