'use strict';

//------------------------------------------------------------------------------
// FILE: userProfile.js
//
// DESCRIPTION: Definition of the user_profile table model used by SequelizeJS
//              to map objects.
//
// © 2015 Clibsy LLC
//------------------------------------------------------------------------------

var USER_PROFILE_OCCUPATION_MAX_LENGTH = 100;
var USER_PROFILE_STAGE_NAME_MAX_LENGTH = 255;
var USER_PROFILE_WEBSITE_MAX_LENGTH = 255;

module.exports = function(sequelize, DataTypes) {
    var UserProfile = sequelize.define('UserProfile', {
        user_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            references: 'users',
            referencesKey: 'user_id',
            onDelete: 'cascade'
        },
        is_private: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            validate: {
            }
        },
        acct_level: {
            type: DataTypes.ENUM, // Another table foreign key?
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
                    args: [ 1, USER_PROFILE_OCCUPATION_MAX_LENGTH ],
                    msg: 'Occupation can be no more than ' + USER_PROFILE_OCCUPATION_MAX_LENGTH + ' characters in length'
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
        country: {
            type: DataTypes.ENUM, // Another table foreign key?
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
        company_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: true,
            defaultValue: null,
            validate: {
            }
// company	        STRING(255)
// company_image	STRING(255)
// company_country	ENUM/FRGN KEY
        },
        default_address: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: true,
            defaultValue: null,
            validate: {
            }
        },
        default_phone: {
            type: DataTypes.BIGINT.UNSIGNED,
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
            associate: function(models) {
                // user_id foreign key reference handled above in field definition
            }
        },
        instanceMethods: {
        }
    });

    return UserProfile;
};
