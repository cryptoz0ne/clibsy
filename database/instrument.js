//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: instrument.js
//
// DESCRIPTION: Definition of the instrument table model used by SequelizeJS to
//              map objects.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/12/01
//******************************************************************************
'use strict';

var INSTRUMENT_NAME_MAX_LENGTH = 100;

module.exports = function defineInstrument(sequelize, DataTypes) {
    var Instrument = sequelize.define('Instrument', {
        /*eslint-disable camelcase, new-cap */
        instrument_id: {
            type: DataTypes.BIGINT, // .UNSIGNED
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING( INSTRUMENT_NAME_MAX_LENGTH ),
            allowNull: true,
            defaultValue: null,
            validate: {
                len: {
                    args: [1, INSTRUMENT_NAME_MAX_LENGTH],
                    msg: 'Instrument name can be no more than '
                         + INSTRUMENT_NAME_MAX_LENGTH
                         + ' characters in length'
                }
            }
        },
        category: {
            type: DataTypes.ENUM('bowed-strings', 'woodwind', 'brass', 'percussion', 'keyboard', 'guitar', 'other'),
            allowNull: false,
            defaultValue: 'other',
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
        tableName: 'instrument',  // force table name to this value
        validate: {
        },
        classMethods: {
            function associate(models) {
                Instrument.belongsToMany(models.Songs, { as: 'songs', foreignKey:'instrument_id', through: { model: models.SongInstrument, unique: true } });
            }
        },
        instanceMethods: {
        }
    });

    return Instrument;
};
