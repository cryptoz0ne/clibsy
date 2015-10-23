'use strict';

//------------------------------------------------------------------------------
// FILE: message.js
//
// DESCRIPTION: Definition of the message table model used by SequelizeJS to map
//              objects.
//
// © 2015 Clibsy LLC
//------------------------------------------------------------------------------

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
