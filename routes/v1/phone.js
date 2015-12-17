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
 * @apiGroup Phones
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
 * @apiSuccess (200) {Number}  phone_id       TODO
 * @apiSuccess (200) {String}  name           TODO
 * @apiSuccess (200) {String}  number         TODO
 * @apiSuccess (200) {String}  extension      TODO
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "phone_id": 1,
 *      "name": "Home",
 *      "number": "2125551234",
 *      "extension": null
 *  }
 *
 * @apiUse UnauthorizedError
 */

/**
 * @api {PATCH} /phones/:id TODO
 * @apiName PatchPhonesId
 * @apiGroup Phone
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
 * @api {POST} /phones TODO
 * @apiName PostPhonesId
 * @apiGroup Phone
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
 * @api {DELETE} /phones/:id TODO
 * @apiName DeletePhonesId
 * @apiGroup Phone
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
