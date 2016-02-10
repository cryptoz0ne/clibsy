//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: company.js
//
// DESCRIPTION: Definition of the company table model used by SequelizeJS to map
//              objects.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/11/30
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
'use strict';

var COMPANY_NAME_MAX_LENGTH = 100;
var COMPANY_LOGO_IMAGE_MAX_LENGTH = 255;
var COMPANY_EMAIL_MAX_LENGTH = 255;
var COMPANY_WEBSITE_MAX_LENGTH = 255;
var COMPANY_DESC_MAX_LENGTH = 1000;

module.exports = function defineCompany(sequelize, DataTypes) {
    var Company = sequelize.define('Company', {
        /*eslint-disable camelcase, new-cap */
        company_id: {
            type: DataTypes.BIGINT, // .UNSIGNED
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING( COMPANY_NAME_MAX_LENGTH ),
            allowNull: false,
            validate: {
                len: {
                    args: [1, COMPANY_NAME_MAX_LENGTH],
                    msg: 'Company name must be no more than '
                         + COMPANY_NAME_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        logo_image: {
            type: DataTypes.STRING( COMPANY_LOGO_IMAGE_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, COMPANY_LOGO_IMAGE_MAX_LENGTH],
                    msg: 'Logo image URL can be no more than '
                         + COMPANY_LOGO_IMAGE_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        email: {
            type: DataTypes.STRING( COMPANY_EMAIL_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, COMPANY_EMAIL_MAX_LENGTH],
                    msg: 'Email address can be no more than '
                         + COMPANY_EMAIL_MAX_LENGTH
                         + ' characters in length'
                },
                isEmail: {
                    msg: 'Email address has an invalid format'
                }
            }
        },
        website: {
            type: DataTypes.STRING( COMPANY_WEBSITE_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, COMPANY_WEBSITE_MAX_LENGTH],
                    msg: 'Website URL can be no more than '
                         + COMPANY_WEBSITE_MAX_LENGTH
                         + ' characters in length'
                },
                isUrl: {
                    msg: 'Website URL has an invalid format'
                }
            }
        },
        desc: {
            type: DataTypes.STRING( COMPANY_DESC_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, COMPANY_DESC_MAX_LENGTH],
                    msg: 'Description can be no more than '
                         + COMPANY_DESC_MAX_LENGTH
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
        tableName: 'company',     // force table name to this value
        validate: {
        },
        classMethods: {
            associate(models) {
                Company.hasMany(models.Contact,     { as: 'contacts', foreignKey: 'company_id' });
                Company.hasMany(models.UserProfile, { as: 'profiles', foreignKey: 'company_id' });
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

    return Company;
};
