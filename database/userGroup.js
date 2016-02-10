//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: userGroup.js
//
// DESCRIPTION: Definition of the user_group table model used by SequelizeJS to
//              map objects.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/12/07
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
'use strict';

var USER_GROUP_ROLE_MAX_LENGTH = 100;

module.exports = function defineUserGroup(sequelize, DataTypes) {
    var UserGroup = sequelize.define('UserGroup', {
        /*eslint-disable camelcase, new-cap */
        role: {
            type: DataTypes.STRING( USER_GROUP_ROLE_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, USER_GROUP_ROLE_MAX_LENGTH],
                    msg: 'Group member role can be no more than '
                         + USER_GROUP_ROLE_MAX_LENGTH
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
        tableName: 'user_group',  // force table name to this value
        validate: {
        },
        hooks: {
        },
        classMethods: {
            associate(models) { // eslint-disable-line no-unused-vars
                // user_id and group_id foreign key references handled by
                // through table definition
            }
        },
        instanceMethods: {
        }
    });

    return UserGroup;
};
