//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: address.js
//
// DESCRIPTION: Definition of the address API endpoints.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/11/30
//******************************************************************************
'use strict';

/**
 * @apiDefine Address Address
 *
 * API endpoints that interact with address resources.
 */

/**
 * @api {GET} /addresses Retreive data for all addresses for the current user
 * @apiName GetAddresses
 * @apiGroup Address
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves an array of addresses.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiSuccess (200) {Object} addresses Array of addresses
 *
 * @apiUse UnauthorizedError
 * @apiUse InternalServerError
 */

/**
 * @api {GET} /addresses/:id Retreive data of address for current user
 * @apiName GetAddressesId
 * @apiGroup Address
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves data of address with `id` for current user.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiSuccess (200) {Number} address_id   ID of the address
 * @apiSuccess (200) {String} name         Name of address
 * @apiSuccess (200) {String} address1     Street address line 1 of address
 * @apiSuccess (200) {String} address2     Street address line 2 of address
 * @apiSuccess (200) {String} address3     Street address line 3 of address
 * @apiSuccess (200) {String} address4     Street address line 4 of address
 * @apiSuccess (200) {String} locality     Locality (city) of address
 * @apiSuccess (200) {String} region_id    Region (state) ID of region for address
 * @apiSuccess (200) {String} postal_code  Postal code (zip code) of address
 * @apiSuccess (200) {Object} region
 * @apiSuccess (200) {Number} region.region_id     ID of the region
 * @apiSuccess (200) {String} region.name          Official name of region
 * @apiSuccess (200) {String} region.code          ISO code of region
 * @apiSuccess (200) {String} region.abbr          Assigned abbreviation of region
 * @apiSuccess (200) {String} region.category      Category of region
 * @apiSuccess (200) {Number} region.country_id    Link to associated country
 * @apiSuccess (200) {Object} region.country
 * @apiSuccess (200) {Number} region.country.country_id   ID of the country
 * @apiSuccess (200) {String} region.country.name         Name of country
 * @apiSuccess (200) {String} region.country.iso_name     Official ISO name of country
 * @apiSuccess (200) {String} region.country.iso_2        ISO Alpha-2 code
 * @apiSuccess (200) {String} region.country.iso_3        ISO Alpha-3 code
 * @apiSuccess (200) {Number} region.country.iso_numeric  ISO numeric code
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "address_id": 101,
 *      "name": "Home",
 *      "address1": "123 Fake St",
 *      "address2": "APT 100",
 *      "address3": null,
 *      "address4": null,
 *      "locality": "New York",
 *      "region_id": 51,
 *      "postal_code": "10001",
 *      "region": {
 *          "region_id": 51,
 *          "name": "New York",
 *          "code": "US-NY",
 *          "abbr": "NY",
 *          "category": "state",
 *          "country_id": 1,
 *          "country": {
 *              "country_id": 1,
 *              "name": "United States"
 *              "iso_name": "UNITED STATES"
 *              "iso_2": "US",
 *              "iso_3": "USA",
 *              "iso_numeric": "840"
 *          }
 *      }
 *  }
 *
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */

/**
 * @api {PATCH} /addresses/:id Updates data of address with `id`
 * @apiName PatchAddressesId
 * @apiGroup Address
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Updates data of address. All request body fields are optional. Any fields not specified, are ignored and unchanged.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiParam (param) id ID of the address
 *
 * @apiParam (body) name
 * @apiParam (body) address1
 * @apiParam (body) address2
 * @apiParam (body) address3
 * @apiParam (body) address4
 * @apiParam (body) locality
 * @apiParam (body) postal_code
 * @apiParam (body) region_id
 *
 * @apiSuccess (200) {Number} address_id   ID of the address
 * @apiSuccess (200) {String} name         Name of address
 * @apiSuccess (200) {String} address1     Street address line 1 of address
 * @apiSuccess (200) {String} address2     Street address line 2 of address
 * @apiSuccess (200) {String} address3     Street address line 3 of address
 * @apiSuccess (200) {String} address4     Street address line 4 of address
 * @apiSuccess (200) {String} locality     Locality (city) of address
 * @apiSuccess (200) {String} region_id    Region (state) ID of region for address
 * @apiSuccess (200) {String} postal_code  Postal code (zip code) of address
 * @apiSuccess (200) {Object} region
 * @apiSuccess (200) {Number} region.region_id     ID of the region
 * @apiSuccess (200) {String} region.name          Official name of region
 * @apiSuccess (200) {String} region.code          ISO code of region
 * @apiSuccess (200) {String} region.abbr          Assigned abbreviation of region
 * @apiSuccess (200) {String} region.category      Category of region
 * @apiSuccess (200) {Number} region.country_id    Link to associated country
 * @apiSuccess (200) {Object} region.country
 * @apiSuccess (200) {Number} region.country.country_id   ID of the country
 * @apiSuccess (200) {String} region.country.name         Name of country
 * @apiSuccess (200) {String} region.country.iso_name     Official ISO name of country
 * @apiSuccess (200) {String} region.country.iso_2        ISO Alpha-2 code
 * @apiSuccess (200) {String} region.country.iso_3        ISO Alpha-3 code
 * @apiSuccess (200) {Number} region.country.iso_numeric  ISO numeric code
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "address_id": 101,
 *      "name": "Home",
 *      "address1": "123 Fake St",
 *      "address2": "APT 100",
 *      "address3": null,
 *      "address4": null,
 *      "locality": "New York",
 *      "region_id": 51,
 *      "postal_code": "10001",
 *      "region": {
 *          "region_id": 51,
 *          "name": "New York",
 *          "code": "US-NY",
 *          "abbr": "NY",
 *          "category": "state",
 *          "country_id": 1,
 *          "country": {
 *              "country_id": 1,
 *              "name": "United States"
 *              "iso_name": "UNITED STATES"
 *              "iso_2": "US",
 *              "iso_3": "USA",
 *              "iso_numeric": "840"
 *          }
 *      }
 *  }
 *
 * @apiUse BadRequestError
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */

/**
 * @api {POST} /addresses Create a new address
 * @apiName PostAddresses
 * @apiGroup Address
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Create a new address.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiParam (body) name
 * @apiParam (body) address1
 * @apiParam (body) address2
 * @apiParam (body) address3
 * @apiParam (body) address4
 * @apiParam (body) locality
 * @apiParam (body) postal_code
 * @apiParam (body) region_id
 *
 * @apiSuccess (201) {Number} address_id   ID of the address
 * @apiSuccess (201) {String} name         Name of address
 * @apiSuccess (201) {String} address1     Street address line 1 of address
 * @apiSuccess (201) {String} address2     Street address line 2 of address
 * @apiSuccess (201) {String} address3     Street address line 3 of address
 * @apiSuccess (201) {String} address4     Street address line 4 of address
 * @apiSuccess (201) {String} locality     Locality (city) of address
 * @apiSuccess (201) {String} region_id    Region (state) ID of region for address
 * @apiSuccess (201) {String} postal_code  Postal code (zip code) of address
 * @apiSuccess (201) {Object} region
 * @apiSuccess (201) {Number} region.region_id     ID of the region
 * @apiSuccess (201) {String} region.name          Official name of region
 * @apiSuccess (201) {String} region.code          ISO code of region
 * @apiSuccess (201) {String} region.abbr          Assigned abbreviation of region
 * @apiSuccess (201) {String} region.category      Category of region
 * @apiSuccess (201) {Number} region.country_id    Link to associated country
 * @apiSuccess (201) {Object} region.country
 * @apiSuccess (201) {Number} region.country.country_id   ID of the country
 * @apiSuccess (201) {String} region.country.name         Name of country
 * @apiSuccess (201) {String} region.country.iso_name     Official ISO name of country
 * @apiSuccess (201) {String} region.country.iso_2        ISO Alpha-2 code
 * @apiSuccess (201) {String} region.country.iso_3        ISO Alpha-3 code
 * @apiSuccess (201) {Number} region.country.iso_numeric  ISO numeric code
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 201 OK
 *  {
 *      "address_id": 101,
 *      "name": "Home",
 *      "address1": "123 Fake St",
 *      "address2": "APT 100",
 *      "address3": null,
 *      "address4": null,
 *      "locality": "New York",
 *      "region_id": 51,
 *      "postal_code": "10001",
 *      "region": {
 *          "region_id": 51,
 *          "name": "New York",
 *          "code": "US-NY",
 *          "abbr": "NY",
 *          "category": "state",
 *          "country_id": 1,
 *          "country": {
 *              "country_id": 1,
 *              "name": "United States"
 *              "iso_name": "UNITED STATES"
 *              "iso_2": "US",
 *              "iso_3": "USA",
 *              "iso_numeric": "840"
 *          }
 *      }
 *  }
 *
 * @apiUse BadRequestError
 * @apiUse UnauthorizedError
 * @apiUse InternalServerError
 */

/**
 * @api {DELETE} /addresses/:id Delete the address with `id` from the system
 * @apiName DeleteAddressesId
 * @apiGroup Address
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Delete the address.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiSuccess (204) No Content
 *
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */
