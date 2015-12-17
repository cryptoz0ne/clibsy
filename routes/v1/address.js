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
 * @apiSuccess (200) {Number}  address_id       ID of the address
 * @apiSuccess (200) {String}  address1         Address line 1 of street address
 * @apiSuccess (200) {String}  address2         Address line 2 of street address
 * @apiSuccess (200) {String}  address3         Address line 3 of street address
 * @apiSuccess (200) {String}  address4         Address line 4 of street address
 * @apiSuccess (200) {String}  locality         Locality (city) of street address
 * @apiSuccess (200) {String}  region_id        Region (state) of street address
 * @apiSuccess (200) {String}  postal_code      Postal code (zip code) of street address
 * @apiSuccess (200) {Number}  country_id       Country of street address
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "user_id": 100,
 *      "username": "guyUser123",
 *      "email": "user@email.com",
 *      "phone": "+12125556789",
 *      "given_name": "Guy",
 *      "family_name": "User",
 *      "profile_image": "104867096017346081747.jpg",
 *      "profile": {
 *          "is_private": false,
 *          "acct_level": 1, (TODO: values need to be defined)
 *          "occupation": "musician",
 *          "stage_name": "The Band",
 *          "company": "Universal",
 *          "company_image": "318132138843432138684.jpg",
 *          "company_country": 1, (TODO: values need to be defined)
 *          "default_address": 1,
 *          "website": "https://www.theband.com",
 *          "bio": "This will be a long text block used as a biographical description of the user.", (TODO: allow for rich text formatting)
 *          "address": {
 *              "address1": "123 Fake St",
 *              "address2": "APT 1",
 *              "address3": null,
 *              "address4": null,
 *              "locality": "New York",
 *              "region": "NY",
 *              "postal_code": "10001",
 *              "country_id": 1
 *          },
 *          "country": {
 *              "country_id": 1,
 *              "name": "United States"
 *              "iso_name": "UNITED STATES"
 *              "iso_2": "US",
 *              "iso_3": "USA",
 *              "iso_numeric": "840"
 *          }
 *      },
 *      "settings": {
 *          "rcv_newsletter": true,
 *          "allow_read_receipt": true,
 *          "notify_method": 2, (TODO: values need to be defined)
 *          "notify_msg_rcv": true,
 *          "notify_msg_read": false
 *      }
 *  }
 *
 * @apiUse UnauthorizedError
 */

/**
 * @api {PATCH} /addresses/:id TODO
 * @apiName PatchAddressesId
 * @apiGroup Address
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription TODO
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 */

/**
 * @api {POST} /addresses TODO
 * @apiName PostAddressesId
 * @apiGroup Address
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription TODO
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 */

/**
 * @api {DELETE} /addresses/:id TODO
 * @apiName DeleteAddressesId
 * @apiGroup Address
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription TODO
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 */
