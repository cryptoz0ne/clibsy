//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: region.js
//
// DESCRIPTION: Definition of the region API endpoints.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/01/12
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
'use strict';

/**
 * @apiDefine Region Region
 *
 * API endpoints that interact with region resources.
 */

/**
 * @api {GET} /regions/:id [GET] /regions/:id
 * @apiName GetRegionsId
 * @apiGroup Region
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves data of region (:id).
 *
 * @apiSuccess (200) {Number} region_id  ID of the region
 * @apiSuccess (200) {String} name       Official name of region
 * @apiSuccess (200) {String} code       ISO code of region
 * @apiSuccess (200) {String} abbr       Assigned abbreviation of region
 * @apiSuccess (200) {String} category   Category of region
 * @apiSuccess (200) {Number} country_id Link to associated country
 * @apiSuccess (200) {Object} country
 * @apiSuccess (200) {Number} country.country_id  ID of the country
 * @apiSuccess (200) {String} country.name        Name of country
 * @apiSuccess (200) {String} country.iso_name    Official ISO name of country
 * @apiSuccess (200) {String} country.iso_2       ISO Alpha-2 code
 * @apiSuccess (200) {String} country.iso_3       ISO Alpha-3 code
 * @apiSuccess (200) {Number} country.iso_numeric ISO numeric code
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "region_id": 51,
 *      "name": "New York",
 *      "code": "US-NY",
 *      "abbr": "NY",
 *      "category": "state",
 *      "country_id": 1,
 *      "country": {
 *          "country_id": 1,
 *          "name": "United States"
 *          "iso_name": "UNITED STATES"
 *          "iso_2": "US",
 *          "iso_3": "USA",
 *          "iso_numeric": "840"
 *      }
 *  }
 *
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */
