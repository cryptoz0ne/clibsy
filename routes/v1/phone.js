//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: phone.js
//
// DESCRIPTION: Definition of the phone API endpoints.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/11/30
//******************************************************************************
'use strict';

/**
 * @apiDefine Phone Phone
 *
 * API endpoints that interact with phone resources.
 */

/**
 * @api {GET} /phones Retreive data for all phones for the current user
 * @apiName GetPhones
 * @apiGroup Phone
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves an array of phones.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiSuccess (200) {Object} phones Array of phones
 *
 * @apiUse UnauthorizedError
 * @apiUse InternalServerError
 */

/**
 * @api {GET} /phones/:id Retreive data of phone for current user
 * @apiName GetPhonesId
 * @apiGroup Phone
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves data of phone with `id` for current user.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiSuccess (200) {Number}  phone_id   ID of the phone number
 * @apiSuccess (200) {Number}  name       Name of phone number
 * @apiSuccess (200) {Number}  number     Digits of phone number
 * @apiSuccess (200) {Number}  extension  Extension digits of phone number
 * @apiSuccess (200) {Number}  country_id Link to associated country
 * @apiSuccess (200) {Object}  country
 * @apiSuccess (200) {Number}  country.country_id   ID of the country
 * @apiSuccess (200) {String}  country.name         Name of country
 * @apiSuccess (200) {String}  country.iso_name     Official ISO name of country
 * @apiSuccess (200) {String}  country.iso_2        ISO Alpha-2 code
 * @apiSuccess (200) {String}  country.iso_3        ISO Alpha-3 code
 * @apiSuccess (200) {Number}  country.iso_numeric  ISO numeric code
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "phone_id": 101,
 *      "name": "Cell",
 *      "number": "+12125551234",
 *      "extension": null,
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
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */

/**
 * @api {PATCH} /phones/:id Updates data of phone with `id`
 * @apiName PatchPhonesId
 * @apiGroup Phone
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Updates data of phone. All request body fields are optional. Any fields not specified, are ignored and unchanged.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiParam (param) id ID of the phone
 *
 * @apiParam (body) name
 * @apiParam (body) number
 * @apiParam (body) extension
 * @apiParam (body) country_id
 *
 * @apiSuccess (200) {Number}  phone_id   ID of the phone number
 * @apiSuccess (200) {Number}  name       Name of phone number
 * @apiSuccess (200) {Number}  number     Digits of phone number
 * @apiSuccess (200) {Number}  extension  Extension digits of phone number
 * @apiSuccess (200) {Number}  country_id Link to associated country
 * @apiSuccess (200) {Object}  country
 * @apiSuccess (200) {Number}  country.country_id   ID of the country
 * @apiSuccess (200) {String}  country.name         Name of country
 * @apiSuccess (200) {String}  country.iso_name     Official ISO name of country
 * @apiSuccess (200) {String}  country.iso_2        ISO Alpha-2 code
 * @apiSuccess (200) {String}  country.iso_3        ISO Alpha-3 code
 * @apiSuccess (200) {Number}  country.iso_numeric  ISO numeric code
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "phone_id": 101,
 *      "name": "Cell",
 *      "number": "+12125551234",
 *      "extension": null,
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
 * @apiUse BadRequestError
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */

/**
 * @api {POST} /phones Create a new phone
 * @apiName PostPhones
 * @apiGroup Phone
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Create a new phone.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiParam (body) name
 * @apiParam (body) number
 * @apiParam (body) extension
 * @apiParam (body) country_id
 *
 * @apiSuccess (201) {Number}  phone_id   ID of the phone number
 * @apiSuccess (201) {Number}  name       Name of phone number
 * @apiSuccess (201) {Number}  number     Digits of phone number
 * @apiSuccess (201) {Number}  extension  Extension digits of phone number
 * @apiSuccess (201) {Number}  country_id Link to associated country
 * @apiSuccess (201) {Object}  country
 * @apiSuccess (201) {Number}  country.country_id   ID of the country
 * @apiSuccess (201) {String}  country.name         Name of country
 * @apiSuccess (201) {String}  country.iso_name     Official ISO name of country
 * @apiSuccess (201) {String}  country.iso_2        ISO Alpha-2 code
 * @apiSuccess (201) {String}  country.iso_3        ISO Alpha-3 code
 * @apiSuccess (201) {Number}  country.iso_numeric  ISO numeric code
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 201 OK
 *  {
 *      "phone_id": 101,
 *      "name": "Cell",
 *      "number": "+12125551234",
 *      "extension": null,
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
 * @apiUse BadRequestError
 * @apiUse UnauthorizedError
 * @apiUse InternalServerError
 */

/**
 * @api {DELETE} /phones/:id Delete the phone with `id` from the system
 * @apiName DeletePhonesId
 * @apiGroup Phone
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Delete the phone.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiSuccess (204) No Content
 *
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */
