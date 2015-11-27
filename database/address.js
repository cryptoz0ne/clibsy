//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: address.js
//
// DESCRIPTION: Definition of the address table model used by SequelizeJS to map
//              objects.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/10/18
//******************************************************************************
'use strict';

var ADDRESS_NAME_MAX_LENGTH = 100;
var ADDRESS_LINE_MAX_LENGTH = 255;
var ADDRESS_LOCALITY_MAX_LENGTH = 100;
var ADDRESS_REGION_MAX_LENGTH = 10;
var ADDRESS_POSTALCODE_MAX_LENGTH = 10;

module.exports = function(sequelize, DataTypes) {
    var Address = sequelize.define('Address', {
        /*eslint-disable camelcase, new-cap */
        address_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING( ADDRESS_NAME_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, ADDRESS_NAME_MAX_LENGTH],
                    msg: 'Address name can be no more than '
                         + ADDRESS_NAME_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        address_1: { // street
            type: DataTypes.STRING( ADDRESS_LINE_MAX_LENGTH ),
            allowNull: false,
            validate: {
                len: {
                    args: [1, ADDRESS_LINE_MAX_LENGTH],
                    msg: 'Address line 1 must be no more than '
                         + ADDRESS_LINE_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        address_2: {
            type: DataTypes.STRING( ADDRESS_LINE_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, ADDRESS_LINE_MAX_LENGTH],
                    msg: 'Address line 2 can be no more than '
                         + ADDRESS_LINE_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        address_3: {
            type: DataTypes.STRING( ADDRESS_LINE_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, ADDRESS_LINE_MAX_LENGTH],
                    msg: 'Address line 3 can be no more than '
                         + ADDRESS_LINE_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        address_4: {
            type: DataTypes.STRING( ADDRESS_LINE_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, ADDRESS_LINE_MAX_LENGTH],
                    msg: 'Address line 4 can be no more than '
                         + ADDRESS_LINE_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        locality: { // city
            type: DataTypes.STRING( ADDRESS_LOCALITY_MAX_LENGTH ),
            allowNull: false,
            validate: {
                len: {
                    args: [1, ADDRESS_LOCALITY_MAX_LENGTH],
                    msg: 'Locality (city) must be no more than '
                         + ADDRESS_LOCALITY_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        sub_locality: { // neighborhood, common name, ex. Manhattan, Gaslamp District, etc
            type: DataTypes.STRING( ADDRESS_LOCALITY_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, ADDRESS_LOCALITY_MAX_LENGTH],
                    msg: 'Sub-locality (neighborhood) can be no more than '
                         + ADDRESS_LOCALITY_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        region: { // state
            type: DataTypes.STRING( ADDRESS_REGION_MAX_LENGTH ),
            allowNull: false,
            validate: {
                len: {
                    args: [1, ADDRESS_REGION_MAX_LENGTH],
                    msg: 'Region (state) must be no more than '
                         + ADDRESS_REGION_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        sub_region: { // county, ex. Hudson, Morris, Hamilton, etc
            type: DataTypes.STRING( ADDRESS_REGION_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, ADDRESS_REGION_MAX_LENGTH],
                    msg: 'Sub-region (county) can be no more than '
                         + ADDRESS_REGION_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        postalCode: {
            type: DataTypes.STRING( ADDRESS_POSTALCODE_MAX_LENGTH ),
            allowNull: false,
            validate: {
                len: {
                    args: [1, ADDRESS_POSTALCODE_MAX_LENGTH],
                    msg: 'Postal code must be no more than '
                         + ADDRESS_POSTALCODE_MAX_LENGTH
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
        tableName: 'address',   // force table name to this value
        validate: {
        },
        classMethods: {
            associate: function(models) {
                Address.belongsTo(models.User,    { foreignKey: 'user_id' });
                Address.belongsTo(models.Contact, { foreignKey: 'contact_id' });
            },
            extractName: function(db, value) {
                value = db.Sequelize.Validator.trim(db.Sequelize.Validator.toString(value));
                if (db.Sequelize.Validator.equals(value, '')) {
                    value = null;
                }

                return value;
            },
            extractAddress: function(db, value) {
                value = db.Sequelize.Validator.trim(db.Sequelize.Validator.toString(value));
                if (db.Sequelize.Validator.equals(value, '')) {
                    value = null;
                }

                return value;
            }
        },
        instanceMethods: {
        }
    });

    return Address;
};
