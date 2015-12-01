//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: song.js
//
// DESCRIPTION: Definition of the song table model used by SequelizeJS to map
//              objects.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/10/18
//******************************************************************************
'use strict';

var SONG_FILE_TYPE_MAX_LENGTH = 25;
var SONG_FILE_NAME_MAX_LENGTH = 255;
var SONG_LOCAL_FILE_NAME_MAX_LENGTH = 255;
var SONG_TITLE_MAX_LENGTH = 255;
var SONG_WRITER_MAX_LENGTH = 255;
var SONG_NOTES_MAX_LENGTH = 255;
var SONG_TEMPO_MAX_LENGTH = 255;
var SONG_MOOD_MAX_LENGTH = 255;

module.exports = function(sequelize, DataTypes) {
    var Song = sequelize.define('Song', {
        /*eslint-disable camelcase, new-cap */
        song_id: {
            type: DataTypes.BIGINT, // .UNSIGNED
            primaryKey: true,
            autoIncrement: true
        },
        is_private: {
            type: DataTypes.BOOLEAN,
        },
        file_type: {
            type: DataTypes.STRING( SONG_FILE_TYPE_MAX_LENGTH ),
        },
        file_name: {
            type: DataTypes.STRING( SONG_FILE_NAME_MAX_LENGTH ),
        },
        local_file_name: {
            type: DataTypes.STRING( SONG_LOCAL_FILE_NAME_MAX_LENGTH ),
        },
        title: {
            type: DataTypes.STRING( SONG_TITLE_MAX_LENGTH ),
        },
        writer: {
            type: DataTypes.STRING( SONG_WRITER_MAX_LENGTH ),
        },
        notes: {
            type: DataTypes.STRING( SONG_NOTES_MAX_LENGTH ),
        },
        tempo: {
            type: DataTypes.STRING( SONG_TEMPO_MAX_LENGTH ),
        },
        mood: {
            type: DataTypes.STRING( SONG_MOOD_MAX_LENGTH ),
        },
        // instruments: {
        // },
        // genres: {
        // },
        // themes: {
        // },
        // vocals: {
        // }
        /*eslint-enable camelcase, new-cap */
    }, {
        // timestamps: true,      // defaulted globally
        // createdAt:  true,
        // updatedAt:  true,
        paranoid: true,
        // freezeTableName: true, // defaulted globally
        tableName: 'song',        // force table name to this value
        validate: {
        },
        hooks: {
        },
        classMethods: {
            associate: function(models) {
                Song.belongsTo(models.User, { as: 'owner', foreignKey: 'user_id' });
            }
        },
        instanceMethods: {
        }
    });

    return Song;
};
