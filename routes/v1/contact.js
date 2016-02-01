//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: contact.js
//
// DESCRIPTION: Definition of the contact API endpoints.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/11/10
//******************************************************************************
'use strict';

/**
 * @apiDefine Contact Contact
 *
 * API endpoints that interact with contact resources.
 */

/**
 * @api {GET} /contacts [GET] /contacts
 * @apiName Contacts
 * @apiGroup Contact
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves an array of all contacts for the current user.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Query) p (optional) Set to get the given page number (1..n) based on the limit per page; otherwise, the default is page 1
 * @apiParam (Query) l (optional) Set to determine the limit of contacts per page; otherwise, the default is a limit of 10
 *
 * @apiSuccess (200) {Object} contacts Array of contacts
 *
 * @apiUse UnauthorizedError
 * @apiUse InternalServerError
 */

/**
 * @api {GET} /contacts/:id [GET] /contacts/:id
 * @apiName GetContactsId
 * @apiGroup Contact
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves data of contact (:id) for current user.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Query) u (optional) Set to 1 to include user objects; otherwise, the objects are not included
 *
 * @apiSuccess (200) {Number} contact_id  ID of the contact
 * @apiSuccess (200) {String} given_name  Given name (first name)
 * @apiSuccess (200) {String} family_name Family name (last name)
 * @apiSuccess (200) {String} email       Email address of contact
 * @apiSuccess (200) {String} website     Website associated with contact
 * @apiSuccess (200) {String} note        Notes associated with contact
 * @apiSuccess (200) {Object} connection
 * @apiSuccess (200) {Number} connection.user_id ID of user with account

        TODO: add information for the user connection account

 * @apiSuccess (200) {Object} company
 * @apiSuccess (200) {Number} company.company_id ID of company

        TODO: add information for the company info

 * @apiSuccess (200) {Array}   phones      Array of phone numbers using the following "phone" object layout
 * @apiSuccess (200) {Object}  phones.phone
 * @apiSuccess (200) {Number}  phones.phone.phone_id   ID of the phone number
 * @apiSuccess (200) {Number}  phones.phone.name       Name of phone number
 * @apiSuccess (200) {Number}  phones.phone.number     Digits of phone number
 * @apiSuccess (200) {Number}  phones.phone.extension  Extension digits of phone number
 * @apiSuccess (200) {Number}  phones.phone.country_id Link to associated country
 * @apiSuccess (200) {Object}  phones.phone.country
 * @apiSuccess (200) {Number}  phones.phone.country.country_id  ID of the country
 * @apiSuccess (200) {String}  phones.phone.country.name        Name of country
 * @apiSuccess (200) {String}  phones.phone.country.iso_name    Official ISO name of country
 * @apiSuccess (200) {String}  phones.phone.country.iso_2       ISO Alpha-2 code
 * @apiSuccess (200) {String}  phones.phone.country.iso_3       ISO Alpha-3 code
 * @apiSuccess (200) {Number}  phones.phone.country.iso_numeric ISO numeric code
 * @apiSuccess (200) {Object}  addresses    Array of addresses using the following "address" object layout
 * @apiSuccess (200) {Object}  addresses.address
 * @apiSuccess (200) {Number}  addresses.address.address_id  ID of the address
 * @apiSuccess (200) {String}  addresses.address.name        Name of address
 * @apiSuccess (200) {String}  addresses.address.address1    Street address line 1 of address
 * @apiSuccess (200) {String}  addresses.address.address2    Street address line 2 of address
 * @apiSuccess (200) {String}  addresses.address.address3    Street address line 3 of address
 * @apiSuccess (200) {String}  addresses.address.address4    Street address line 4 of address
 * @apiSuccess (200) {String}  addresses.address.locality    Locality (city) of address
 * @apiSuccess (200) {String}  addresses.address.region_id   Region (state) ID of region for address
 * @apiSuccess (200) {String}  addresses.address.postal_code Postal code (zip code) of address
 * @apiSuccess (200) {Object}  addresses.address.region
 * @apiSuccess (200) {Number}  addresses.address.region.region_id  ID of the region
 * @apiSuccess (200) {String}  addresses.address.region.name       Official name of region
 * @apiSuccess (200) {String}  addresses.address.region.code       ISO code of region
 * @apiSuccess (200) {String}  addresses.address.region.abbr       Assigned abbreviation of region
 * @apiSuccess (200) {String}  addresses.address.region.category   Category of region
 * @apiSuccess (200) {Number}  addresses.address.region.country_id Link to associated country
 * @apiSuccess (200) {Object}  addresses.address.region.country
 * @apiSuccess (200) {Number}  addresses.address.region.country.country_id  ID of the country
 * @apiSuccess (200) {String}  addresses.address.region.country.name        Name of country
 * @apiSuccess (200) {String}  addresses.address.region.country.iso_name    Official ISO name of country
 * @apiSuccess (200) {String}  addresses.address.region.country.iso_2       ISO Alpha-2 code
 * @apiSuccess (200) {String}  addresses.address.region.country.iso_3       ISO Alpha-3 code
 * @apiSuccess (200) {Number}  addresses.address.region.country.iso_numeric ISO numeric code
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "contact_id": 101,
 *      "given_name": "Guy",
 *      "family_name": "User",
 *      "email": "user@email.com",
 *      "website": "https://www.theband.com",
 *      "note": "Set of notes about the contact",
 *      "connection": {
 *          "user_id": 100,
 *          "username": "guyUser123",
 *          ...
 *      },
 *      "company": {
 *          "company_id": 100,
 *          ...
 *      },
 *      "phones": [
 *          {
 *              "phone_id": 101,
 *              "name": "Cell",
 *              "number": "+12125551234",
 *              "extension": null,
 *              "country_id": 1,
 *              "country": {
 *                  "country_id": 1,
 *                  "name": "United States"
 *                  "iso_name": "UNITED STATES"
 *                  "iso_2": "US",
 *                  "iso_3": "USA",
 *                  "iso_numeric": "840"
 *              }
 *          },
 *          ...
 *      ],
 *      "addresses": [
 *          {
 *              "address_id": 101,
 *              "name": "Home",
 *              "address1": "123 Fake St",
 *              "address2": "APT 100",
 *              "address3": null,
 *              "address4": null,
 *              "locality": "New York",
 *              "region_id": 51,
 *              "postal_code": "10001",
 *              "region": {
 *                  "region_id": 51,
 *                  "name": "New York",
 *                  "code": "US-NY",
 *                  "abbr": "NY",
 *                  "category": "state",
 *                  "country_id": 1,
 *                  "country": {
 *                      "country_id": 1,
 *                      "name": "United States"
 *                      "iso_name": "UNITED STATES"
 *                      "iso_2": "US",
 *                      "iso_3": "USA",
 *                      "iso_numeric": "840"
 *                  }
 *              }
 *          },
 *          ...
 *      ]
 *  }
 *
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */

/**
 * @api {PATCH} /contacts/:id [PATCH] /contacts/:id
 * @apiName PatchContactsId
 * @apiGroup Contact
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Updates data of contact (:id). All request body fields are optional. Any fields not specified, are ignored and unchanged.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Param) id ID of the contact
 *
 * @apiParam (Body) {String} given_name

        TODO: add information for the body

 *
 * @apiSuccess (200) {Number} contact_id ID of the contact

        TODO: add information for the success object

 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "contact_id": 101,
 *  }
 *
 * @apiUse BadRequestError
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */

/**
 * @api {POST} /contacts [POST] /contacts
 * @apiName PostContacts
 * @apiGroup Contact
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Create a new contact.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Body) {String} given_name

        TODO: add information for the body

 *
 * @apiSuccess (201) {Number} contact_id ID of the contact

        TODO: add information for the success object

 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 201 OK
 *  {
 *      "contact_id": 101,
 *  }
 *
 * @apiUse BadRequestError
 * @apiUse UnauthorizedError
 * @apiUse InternalServerError
 */

/**
 * @api {DELETE} /contacts/:id [DELETE] /contacts/:id
 * @apiName DeleteContactsId
 * @apiGroup Contact
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Delete the contact (:id).
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Param) id ID of the contact
 *
 * @apiSuccess (204) NoContent
 *
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */
