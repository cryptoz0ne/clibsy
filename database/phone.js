'use strict';

//------------------------------------------------------------------------------
// FILE: phone.js
//
// DESCRIPTION: Definition of the phone table model used by SequelizeJS to map
//              objects.
//
// © 2015 Clibsy LLC
//------------------------------------------------------------------------------
// http://www.itu.int/ITU-T/recommendations/rec.aspx?rec=E.164

var PHONE_NAME_MAX_LENGTH = 100;
var PHONE_NUMBER_MAX_LENGTH = 15;
var PHONE_EXTENSION_MAX_LENGTH = 10;

module.exports = function(sequelize, DataTypes) {
    var Phone = sequelize.define('Phone', {
        phone_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING( PHONE_NAME_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [ 1, PHONE_NAME_MAX_LENGTH ],
                    msg: 'Phone number name can be no more than ' + PHONE_NAME_MAX_LENGTH + ' characters in length'
                }
            }
        },
        number: {
            type: DataTypes.STRING( PHONE_NUMBER_MAX_LENGTH ),
            allowNull: false,
            validate: {
                len: {
                    args: [ 1, PHONE_NUMBER_MAX_LENGTH ],
                    msg: 'Phone number must be no more than ' + PHONE_NUMBER_MAX_LENGTH + ' digits in length'
                }
            }
        },
        extension: {
            type: DataTypes.STRING( PHONE_EXTENSION_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [ 1, PHONE_EXTENSION_MAX_LENGTH ],
                    msg: 'Phone number extension can be no more than ' + PHONE_EXTENSION_MAX_LENGTH + ' digits in length'
                },
                isNumeric: {
                    msg: 'Phone number extension can only contain numeric digits'
                }
            }
        }
    }, {
        // timestamps: true,      // defaulted globally
        // createdAt:  true,
        // updatedAt:  true,
        paranoid: false,
        // freezeTableName: true, // defaulted globally
        tableName: 'phone',       // force table name to this value
        validate: {
        },
        classMethods: {
            associate: function(models) {
                Phone.belongsTo(models.User, { foreignKey: 'user_id' });
            },
            extractName: function(db, value) {
                value = db.Sequelize.Validator.trim(db.Sequelize.Validator.toString(value));
                if (db.Sequelize.Validator.equals(value, ''))
                    value = null;

                return value;
            },
            extractExtension: function(db, value) {
                value = db.Sequelize.Validator.trim(db.Sequelize.Validator.toString(value));
                if (db.Sequelize.Validator.equals(value, ''))
                    value = null;

                return value;
            },
        },
        instanceMethods: {
        }
    });

    return Phone;
};
