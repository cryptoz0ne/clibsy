//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: userProfile.js
//
// DESCRIPTION: Definition of the user_profile table model used by SequelizeJS
//              to map objects.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/10/18
//******************************************************************************
'use strict';

var USER_PROFILE_OCCUPATION_MAX_LENGTH = 100;
var USER_PROFILE_STAGE_NAME_MAX_LENGTH = 255;
var USER_PROFILE_WEBSITE_MAX_LENGTH = 255;

module.exports = function(sequelize, DataTypes) {
    var UserProfile = sequelize.define('UserProfile', {
        /*eslint-disable camelcase, new-cap */
        user_id: {
            type: DataTypes.BIGINT, // .UNSIGNED
            primaryKey: true,
            model: 'users',
            key: 'user_id',
            onDelete: 'cascade'
        },
        is_private: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            validate: {
            }
        },
        // TODO: create table/foreign key?
        acct_level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            validate: {
            }
        },
        occupation: {
            type: DataTypes.STRING( USER_PROFILE_OCCUPATION_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, USER_PROFILE_OCCUPATION_MAX_LENGTH],
                    msg: 'Occupation can be no more than '
                         + USER_PROFILE_OCCUPATION_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        stage_name: {
            type: DataTypes.STRING( USER_PROFILE_STAGE_NAME_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
            }
        },
        // TODO: create table/foreign key to handle country codes
        country: {
            type: DataTypes.BIGINT,
            allowNull: true,
            defaultValue: null,
            validate: {
            }
        },
        website: {
            type: DataTypes.STRING( USER_PROFILE_WEBSITE_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
            }
        },
        // company_id: {
        //     type: DataTypes.BIGINT, // .UNSIGNED
        //     allowNull: true,
        //     defaultValue: null,
        //     validate: {
        //     }
        // },
        //    company           STRING(255)
        //    company_image     STRING(255)
        //    company_country   ENUM/FRGN KEY
        default_address: {
            type: DataTypes.BIGINT, // .UNSIGNED
            allowNull: true,
            defaultValue: null,
            validate: {
            }
        },
        default_phone: {
            type: DataTypes.BIGINT, // .UNSIGNED
            allowNull: true,
            defaultValue: null,
            validate: {
            }
        },
        bio: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: null,
            validate: {
            }
        }
        /*eslint-enable camelcase, new-cap */
    }, {
        // timestamps: true,       // defaulted globally
        // createdAt:  true,
        // updatedAt:  true,
        paranoid: true,
        // freezeTableName: true,  // defaulted globally
        tableName: 'user_profile', // force table name to this value
        validate: {
        },
        hooks: {
        },
        classMethods: {
            associate: function(models) { // eslint-disable-line no-unused-vars
                // user_id foreign key reference handled above in field definition
            //  UserProfile.belongsTo(models.Company, { foreignKey: 'company_id' });
            }
        },
        instanceMethods: {
        }
    });

    return UserProfile;
};
