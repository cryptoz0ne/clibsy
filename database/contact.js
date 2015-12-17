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

var CONTACT_NAME_MAX_LENGTH = 100;
var CONTACT_EMAIL_MAX_LENGTH = 255;
var CONTACT_WEBSITE_MAX_LENGTH = 255;
var CONTACT_NOTE_MAX_LENGTH = 1000;

module.exports = function defineContact(sequelize, DataTypes) {
    var Contact = sequelize.define('Contact', {
        /*eslint-disable camelcase, new-cap */
        contact_id: {
            type: DataTypes.BIGINT, // .UNSIGNED
            primaryKey: true,
            autoIncrement: true
        },
        given_name: {
            type: DataTypes.STRING( CONTACT_NAME_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, CONTACT_NAME_MAX_LENGTH],
                    msg: 'Contact name can be no more than '
                         + CONTACT_NAME_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        family_name: {
            type: DataTypes.STRING( CONTACT_NAME_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, CONTACT_NAME_MAX_LENGTH],
                    msg: 'Contact name can be no more than '
                         + CONTACT_NAME_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        email: { // TODO: extend to multiple?
            type: DataTypes.STRING( CONTACT_EMAIL_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, CONTACT_EMAIL_MAX_LENGTH],
                    msg: 'Email address can be no more than '
                         + CONTACT_EMAIL_MAX_LENGTH
                         + ' characters in length'
                },
                isEmail: {
                    msg: 'Email address has an invalid format'
                }
            }
        },
        website: {
            type: DataTypes.STRING( CONTACT_WEBSITE_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, CONTACT_WEBSITE_MAX_LENGTH],
                    msg: 'Website URL can be no more than '
                         + CONTACT_WEBSITE_MAX_LENGTH
                         + ' characters in length'
                },
                isUrl: {
                    msg: 'Website URL has an invalid format'
                }
            }
        },
        note: {
            type: DataTypes.STRING( CONTACT_NOTE_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, CONTACT_NOTE_MAX_LENGTH],
                    msg: 'Note can be no more than '
                         + CONTACT_NOTE_MAX_LENGTH
                         + ' characters in length'
                }
            }
        }
        /*eslint-enable camelcase, new-cap */
    }, {
        // timestamps: true,      // defaulted globally
        // createdAt:  true,
        // updatedAt:  true,
        paranoid: false,
        // freezeTableName: true, // defaulted globally
        tableName: 'contact',     // force table name to this value
        validate: {
        },
        classMethods: {
            associate(models) {
                Contact.belongsTo(models.User,    { as: 'owner',      foreignKey: 'user_id' });
                Contact.belongsTo(models.User,    { as: 'connection', foreignKey: 'user_id' });
                Contact.belongsTo(models.Company, { as: 'company',    foreignKey: 'compnay_id' });
                Contact.hasMany(models.Address, { as: 'addresses', foreignKey: 'address_id' });
                Contact.hasMany(models.Phone,   { as: 'phones',    foreignKey: 'phone_id' });
            },
            extractName(db, value) {
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
