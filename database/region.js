//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: region.js
//
// DESCRIPTION: Definition of the region (state) table model used by SequelizeJS
//              to map objects.
//
//              https://en.wikipedia.org/wiki/ISO_3166-2
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/11/26
//******************************************************************************
'use strict';

var REGION_NAME_MAX_LENGTH = 255;
var REGION_ABBR_MAX_LENGTH = 10;
var REGION_CODE_MAX_LENGTH = 10;

module.exports = function defineRegion(sequelize, DataTypes) {
    var Region = sequelize.define('Region', {
        /*eslint-disable camelcase, new-cap */
        region_id: {
            type: DataTypes.BIGINT, // .UNSIGNED
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING( REGION_NAME_MAX_LENGTH ),
            allowNull: false,
            validate: {
                len: {
                    args: [1, REGION_NAME_MAX_LENGTH],
                    msg: 'Region name must be no more than '
                         + REGION_NAME_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        code: {
            type: DataTypes.STRING( REGION_CODE_MAX_LENGTH ),
            allowNull: false,
            validate: {
                len: {
                    args: [1, REGION_CODE_MAX_LENGTH],
                    msg: 'Region ISO code must be no more than '
                         + REGION_CODE_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        abbr: {
            type: DataTypes.STRING( REGION_ABBR_MAX_LENGTH ),
            allowNull: false,
            validate: {
                len: {
                    args: [1, REGION_ABBR_MAX_LENGTH],
                    msg: 'Region abbreviation must be no more than '
                         + REGION_ABBR_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        category: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
            }
        }
        /*eslint-enable camelcase, new-cap */
    }, {
        // timestamps: true,      // defaulted globally
        // createdAt:  true,
        // updatedAt:  true,
        paranoid: false,
        // freezeTableName: true, // defaulted globally
        tableName: 'region',      // force table name to this value
        validate: {
        },
        classMethods: {
            function associate(models) {
                Region.belongsTo(models.Country, { foreignKey: 'country_id' });
                Region.hasMany(models.Address,   { foreignKey: 'region_id' });
            }
        },
        instanceMethods: {
        }
    });

    return Region;
};
