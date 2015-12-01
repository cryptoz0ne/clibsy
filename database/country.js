//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: country.js
//
// DESCRIPTION: Definition of the coutry table model used by SequelizeJS to map
//              objects.
//
//              https://en.wikipedia.org/wiki/ISO_3166-1
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/11/26
//******************************************************************************
'use strict';

var COUNTRY_NAME_MAX_LENGTH = 255;
var COUNTRY_ISO_NAME_MAX_LENGTH = 255;
var COUNTRY_ISO_2_MAX_LENGTH = 2;
var COUNTRY_ISO_3_MAX_LENGTH = 3;
var COUNTRY_ISO_NUM_MAX_LENGTH = 3;

module.exports = function(sequelize, DataTypes) {
    var Country = sequelize.define('Country', {
        /*eslint-disable camelcase, new-cap */
        country_id: {
            type: DataTypes.BIGINT, // .UNSIGNED
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING( COUNTRY_NAME_MAX_LENGTH ),
            allowNull: false,
            validate: {
                len: {
                    args: [1, COUNTRY_NAME_MAX_LENGTH],
                    msg: 'Country name must be no more than '
                         + COUNTRY_NAME_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        iso_name: {
            type: DataTypes.STRING( COUNTRY_ISO_NAME_MAX_LENGTH ),
            allowNull: false,
            validate: {
                len: {
                    args: [1, COUNTRY_ISO_NAME_MAX_LENGTH],
                    msg: 'Country ISO name must be no more than '
                         + COUNTRY_ISO_NAME_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        iso_2: {
            type: DataTypes.CHAR( COUNTRY_ISO_2_MAX_LENGTH ),
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [1, COUNTRY_ISO_2_MAX_LENGTH],
                    msg: 'Country ISO Alpha-2 code must be '
                         + COUNTRY_ISO_2_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        iso_3: {
            type: DataTypes.CHAR( COUNTRY_ISO_3_MAX_LENGTH ),
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [1, COUNTRY_ISO_3_MAX_LENGTH],
                    msg: 'Country ISO Alpha-3 code must be '
                         + COUNTRY_ISO_3_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        iso_numeric: {
            type: DataTypes.CHAR( COUNTRY_ISO_NUM_MAX_LENGTH ),
            allowNull: false,
            unique: true,
            validate: {
                len: {
                    args: [1, COUNTRY_ISO_NUM_MAX_LENGTH],
                    msg: 'Country ISO numeric code must be '
                         + COUNTRY_ISO_NUM_MAX_LENGTH
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
        tableName: 'country',      // force table name to this value
        validate: {
        },
        classMethods: {
            associate: function(models) {
                Country.hasMany(models.Address,  { foreignKey: 'region_id' });
            }
        },
        instanceMethods: {
        }
    });

    return Country;
};
