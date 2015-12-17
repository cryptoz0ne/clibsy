//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: genre.js
//
// DESCRIPTION: Definition of the genre table model used by SequelizeJS to map
//              objects.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/12/01
//******************************************************************************
'use strict';

var GENRE_NAME_MAX_LENGTH = 100;

module.exports = function defineGenre(sequelize, DataTypes) {
    var Genre = sequelize.define('Genre', {
        /*eslint-disable camelcase, new-cap */
        genre_id: {
            type: DataTypes.BIGINT, // .UNSIGNED
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING( GENRE_NAME_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, GENRE_NAME_MAX_LENGTH],
                    msg: 'Genre name can be no more than '
                         + GENRE_NAME_MAX_LENGTH
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
        tableName: 'genre',       // force table name to this value
        validate: {
        },
        classMethods: {
            associate(models) {
                Genre.hasMany(models.Song, { as: 'songs', foreignKey: 'genre_id' });
            }
        },
        instanceMethods: {
        }
    });

    return Genre;
};
