//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: group.js
//
// DESCRIPTION: Definition of the group table model used by SequelizeJS to map
//              objects.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/12/01
//******************************************************************************
'use strict';

var GROUP_NAME_MAX_LENGTH = 100;

module.exports = function defineGroup(sequelize, DataTypes) {
    var Group = sequelize.define('Group', {
        /*eslint-disable camelcase, new-cap */
        group_id: {
            type: DataTypes.BIGINT, // .UNSIGNED
            primaryKey: true,
            autoIncrement: true
        },
        is_owner: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        name: {
            type: DataTypes.STRING( GROUP_NAME_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, GROUP_NAME_MAX_LENGTH],
                    msg: 'Group name can be no more than '
                         + GROUP_NAME_MAX_LENGTH
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
        tableName: 'group',       // force table name to this value
        validate: {
        },
        classMethods: {
            function associate(models) {
                Group.belongsTo(models.Country, { as: 'country', foreignKey: 'country_id' });
                Group.belongsToMany(models.User, { as: 'members', foreignKey:'user_id', through: { model: models.UserGroup, unique: true } });
            }
        },
        instanceMethods: {
        }
    });

    return Group;
};
