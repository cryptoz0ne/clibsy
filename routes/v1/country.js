//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: country.js
//
// DESCRIPTION: Definition of the country API endpoints.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/01/12
//******************************************************************************
'use strict';

/**
 * @apiDefine Country Country
 *
 * API endpoints that interact with country resources.
 */

/**
 * @api {GET} /countries [GET] /countries
 * @apiName GetCountries
 * @apiGroup Country
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves an array of all countries available.
 *
 * @apiSuccess (200) {Array} countries Array of countries
 *
 * @apiUse InternalServerError
 */

/**
 * @api {GET} /countries/:id [GET] /countries/:id
 * @apiName GetCountriesId
 * @apiGroup Country
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves data of country (:id).
 *
 * @apiSuccess (200) {Number} country_id  ID of the country
 * @apiSuccess (200) {String} name        Name of country
 * @apiSuccess (200) {String} iso_name    Official ISO name of country
 * @apiSuccess (200) {String} iso_2       ISO Alpha-2 code
 * @apiSuccess (200) {String} iso_3       ISO Alpha-3 code
 * @apiSuccess (200) {Number} iso_numeric ISO numeric code
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "country_id": 1,
 *      "name": "United States"
 *      "iso_name": "UNITED STATES"
 *      "iso_2": "US",
 *      "iso_3": "USA",
 *      "iso_numeric": "840"
 *  }
 *
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */

/**
 * @api {GET} /countries/:id/regions [GET] /countries/:id/regions
 * @apiName GetCountriesIdRegions
 * @apiGroup Country
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves all regions of country (:id).
 *
 * @apiSuccess (200) {Number} country_id  ID of the country
 * @apiSuccess (200) {String} name        Name of country
 * @apiSuccess (200) {String} iso_name    Official ISO name of country
 * @apiSuccess (200) {String} iso_2       ISO Alpha-2 code
 * @apiSuccess (200) {String} iso_3       ISO Alpha-3 code
 * @apiSuccess (200) {Number} iso_numeric ISO numeric code
 * @apiSuccess (200) {Array}  regions     Array of regions using the following "region" object layout
 * @apiSuccess (200) {Object} regions.region
 * @apiSuccess (200) {Number} regions.region.region_id ID of the region
 * @apiSuccess (200) {String} regions.region.name      Official name of region
 * @apiSuccess (200) {String} regions.region.code      ISO code of region
 * @apiSuccess (200) {String} regions.region.abbr      Assigned abbreviation of region
 * @apiSuccess (200) {String} regions.region.category  Category of region
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "country_id": 1,
 *      "name": "United States"
 *      "iso_name": "UNITED STATES"
 *      "iso_2": "US",
 *      "iso_3": "USA",
 *      "iso_numeric": "840"
 *      "regions": [
 *          {
 *              "region_id": 51,
 *              "name": "New York",
 *              "code": "US-NY",
 *              "abbr": "NY",
 *              "category": "state"
 *          },
 *          ...
 *      ]
 *  }
 *
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */
