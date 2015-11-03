/*******************************************************************************
 * Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
 *
 * Unauthorized copying of this file, via any medium, is strictly prohibited.
 * Copying or distributing requires the express permission of Clibsy, LLC.
 *
 * PROJECT: clibsy.com
 *
 * FILE: user.js
 *
 * DESCRIPTION: Definition of the user table model used by SequelizeJS to map
 *              objects.
 *
 * AUTHOR: Joe Kramer joe@clibsy.com 2015/10/18
 ******************************************************************************/
'use strict';

// Dependency Modules
var bcrypt = require('bcryptjs');

var USER_USERNAME_MAX_LENGTH = 50;
var USER_EMAIL_MAX_LENGTH = 255;
var USER_PHONE_MAX_LENGTH = 15;
var USER_PASSWORD_MIN_LENGTH = 6;
var USER_PASSWORD_MAX_LENGTH = 30;
var USER_PASSWORD_HASH_MAX_LENGTH = 100;
var USER_ACCT_ID_MAX_LENGTH = 255;
var USER_NAME_MAX_LENGTH = 255;
var USER_PROFILE_IMAGE_MAX_LENGTH = 255;

var GEN_SALT_ROUNDS = 10;

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        user_id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING( USER_EMAIL_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            unique: true,
            validate: {
                len: {
                    args: [ 1, USER_USERNAME_MAX_LENGTH ],
                    msg: 'Username can be no more than ' + USER_USERNAME_MAX_LENGTH + ' characters in length'
                }
            }
        },
        email: {
            type: DataTypes.STRING( USER_EMAIL_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            unique: true,
            validate: {
                len: {
                    args: [ 1, USER_EMAIL_MAX_LENGTH ],
                    msg: 'Email address can be no more than ' + USER_EMAIL_MAX_LENGTH + ' characters in length'
                },
                isEmail: {
                    msg: 'Email address has an invalid format'
                }
            }
        },
        email_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        phone: {
            type: DataTypes.STRING( USER_PHONE_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            unique: true,
            validate: {
                len: {
                    args: [ 1, USER_PHONE_MAX_LENGTH ],
                    msg: 'Phone number can be no more than ' + USER_PHONE_MAX_LENGTH + ' digits in length'
                },
                isPhone: {
                    args: this.countryCode,
                    msg: 'Phone number has an invalid format for the associated country'
                }
            }
        },
        phone_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        password: {
            type: DataTypes.VIRTUAL,
            set: function(value) {
                this.setDataValue('password', value);
                this.setDataValue('passwordHash', User.generateHash(value));
            },
            validate: {
                len: {
                    args: [ USER_PASSWORD_MIN_LENGTH, USER_PASSWORD_MAX_LENGTH ],
                    msg: 'Password must be between ' + USER_PASSWORD_MIN_LENGTH + ' and ' + USER_PASSWORD_MAX_LENGTH + ' characters in length'
                },
                is: {
                    // Valid characters for password (regex):
                    //   - abcdefghijklmnopqrstuvwxyz
                    //   - ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    //   - 0123456789
                    //   - ~!@#$%^&*()-_
                    args: [ '^[a-zA-Z0-9~!@#$%^&*()\-_]+', 'g' ],
                    msg: 'Password contains at least one invalid character'
                }
            }
        },
        password_hash: {
            type: DataTypes.STRING( USER_PASSWORD_HASH_MAX_LENGTH ),
            allowNull: false
        },
        facebook_id: {
            type: DataTypes.STRING( USER_ACCT_ID_MAX_LENGTH ),
            allowNull: true,
            defaultValue: false,
            validate: {
                len: {
                    args: [ 1, USER_ACCT_ID_MAX_LENGTH ],
                    msg: 'Account ID must be no more than ' + USER_ACCT_ID_MAX_LENGTH + ' characters in length'
                }
            }
        },
        google_id: {
            type: DataTypes.STRING( USER_ACCT_ID_MAX_LENGTH ),
            allowNull: true,
            defaultValue: false,
            validate: {
                len: {
                    args: [ 1, USER_ACCT_ID_MAX_LENGTH ],
                    msg: 'Account ID must be no more than ' + USER_ACCT_ID_MAX_LENGTH + ' characters in length'
                }
            }
        },
        linkedin_id: {
            type: DataTypes.STRING( USER_ACCT_ID_MAX_LENGTH ),
            allowNull: true,
            defaultValue: false,
            validate: {
                len: {
                    args: [ 1, USER_ACCT_ID_MAX_LENGTH ],
                    msg: 'Account ID must be no more than ' + USER_ACCT_ID_MAX_LENGTH + ' characters in length'
                }
            }
        },
        given_name: {
            type: DataTypes.STRING( USER_NAME_MAX_LENGTH ),
            allowNull: false,
            validate: {
                len: {
                    args: [ 1, USER_NAME_MAX_LENGTH ],
                    msg: 'Given name must be no more than ' + USER_NAME_MAX_LENGTH + ' characters in length'
                }
            }
        },
        family_name: {
            type: DataTypes.STRING( USER_NAME_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [ 1, USER_NAME_MAX_LENGTH ],
                    msg: 'Family name can be no more than ' + USER_NAME_MAX_LENGTH + ' characters in length'
                }
            }
        },
        profile_image: {
            type: DataTypes.STRING( USER_PROFILE_IMAGE_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [ 1, USER_PROFILE_IMAGE_MAX_LENGTH ],
                    msg: 'Profile image URL can be no more than ' + USER_PROFILE_IMAGE_MAX_LENGTH + ' characters in length'
                }
            }
        }
    }, {
        // timestamps: true,      // defaulted globally
        // createdAt:  true,
        // updatedAt:  true,
        paranoid: true,
        // freezeTableName: true, // defaulted globally
        tableName: 'user',        // force table name to this value
        validate: {
            usernameOrEmailOrPhoneNotNull: function() {
                if ((this.username === null) && (this.email === null) && (this.phone === null))
                    throw new Error('User account require either an username, email address or phone number');
            }
        },
        hooks: {
        },
        classMethods: {
            associate: function(models) {
                User.hasOne(models.UserProfile,    { as: 'Profile',   foreignKey: 'user_id', onDelete: 'cascade' });
                User.hasOne(models.UserSettings,   { as: 'Settings',  foreignKey: 'user_id', onDelete: 'cascade' });
                User.hasMany(models.Song,          { as: 'Songs',     foreignKey: 'user_id' });
                User.hasMany(models.Contact,       { as: 'Contacts',  foreignKey: 'user_id' });
                User.hasMany(models.Phone,         { as: 'Phones',    foreignKey: 'user_id' });
                User.hasMany(models.Address,       { as: 'Addresses', foreignKey: 'user_id' });
            //  User.belongsToMany(User,           { as: 'Followers', foreignKey:'follower', through: { model: models.Follower,   unique: true } });
            //  User.belongsToMany(User,           { as: 'Followees', foreignKey:'followee', through: { model: models.Follower,   unique: true } });
                User.belongsToMany(models.Message, { as: 'Messages',  foreignKey:'message_id', through: { model: models.UserMessage, unique: true } });
            },
            // Generate a hash for the given data (password)
            generateHash: function(data) {
                return bcrypt.hashSync(data, bcrypt.genSaltSync(GEN_SALT_ROUNDS), null);
            },
            extractPhone: function(db, value, countryCode) {
                return db.Sequelize.Validator.toPhone(value, countryCode);
            },
            extractEmail: function(db, value) {
                value = db.Sequelize.Validator.trim(db.Sequelize.Validator.toString(value)).toLowerCase();
                if (db.Sequelize.Validator.equals(value, ''))
                    value = null;

                return value;
            },
            extractFamilyName: function(db, value) {
                value = db.Sequelize.Validator.trim(db.Sequelize.Validator.toString(value));
                if (db.Sequelize.Validator.equals(value, ''))
                    value = null;

                return value;
            }
        },
        instanceMethods: {
            // Validate a password against the saved password salt/hash
            verifyPassword: function(password) {
                return bcrypt.compareSync(password, this.password_hash);
            }
        }
    });

    return User;
};
