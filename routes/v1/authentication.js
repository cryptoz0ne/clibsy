//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: authentication.js
//
// DESCRIPTION: Definition of the authentication API endpoints.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/11/10
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
'use strict';

/**
 * @apiDefine Authentication Authentication
 *
 * API endpoints that are related to authentication such as Login/Logout or
 * 'Sign In'/'Sign Out'. This description can contain **markdown** syntax.
 */

/**
 * @api {POST} /login [POST] /login
 * @apiName PostLogin
 * @apiGroup Authentication
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Login/Sign in with an existing user of the system.
 *
 * @apiParam (Body) {String} identifier Username, email address or phone number of the account
 * @apiParam (Body) {String} password   Password of the account
 *
 * @apiSuccess (200) {String} token API authorization token
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "token": "Bearer rgS0eXAiOiGSI3QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjUsIm4hdCI6MTQ0MTM5NDgwMDU1MSwianRpIjoiV0ZHRkbIUGlBYSJ9._tuR_EiJq-d3dwh3kypqR4OKF_tvEtkLFXwGrvst09w",
 *  }
 *
 * @apiUse BadRequestError
 * @apiUse UnauthorizedError
 * @apiUse InternalServerError
 */

/**
 * @api {GET} /logout [GET] /logout
 * @apiName GetLogout
 * @apiGroup Authentication
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Logout/Sign out an existing user of the system.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiSuccess (204) NoContent
 *
 * @apiUse BadRequestError
 * @apiUse InternalServerError
 */

/**
 * @api {POST} /verify/unique [POST] /verify/unique
 * @apiName PostVerifyUnique
 * @apiGroup Authentication
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Verify new login information is unique. This information is given when a user creates an account for the system.
 *
 * @apiParam (Body) {String} username (optional) The username to verify is unique
 * @apiParam (Body) {String} email    (optional) The email address to verify is unique
 * @apiParam (Body) {String} phone    (optional) The phone number to verify is unique
 *
 * @apiSuccess (200) {Boolean} username (optional) True if given username is unique to the system; otherwise, false. Only returned if 'username' is provided in the request
 * @apiSuccess (200) {Boolean} email    (optional) True if given email address is unique to the system; otherwise, false. Only returned if 'email' is provided in the request
 * @apiSuccess (200) {Boolean} phone    (optional) True if given phone number is unique to the system; otherwise, false. Only returned if 'phone' is provided in the request
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "username": true,
 *      "email": true,
 *      "phone": true
 *  }
 *
 * @apiUse BadRequestError
 * @apiUse InternalServerError
 */

/**
 * @apiIgnore
 * @api {POST} /verify/email/:code [POST] /verify/email/:code
 * @apiName PostVerifyEmail
 * @apiGroup Authentication
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Verifies the email address given by a user is under the control of that user.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Param) {String} code The code used to verify the email address
 *
 * @apiSuccess (200) {Boolean} verified True if code validates the email address; otherwise, false
 *
 * @apiUse BadRequestError
 * @apiUse InternalServerError
 */

/**
 * @apiIgnore
 * @api {POST} /verify/phone [POST] /verify/phone
 * @apiName PostVerifyPhone
 * @apiGroup Authentication
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Verifies the phone number given by a user is under the control of that user.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Body) {String} code The verification code used to verify the phone number
 *
 * @apiSuccess (200) {Boolean} verified True if code validates the phone number; otherwise, false
 *
 * @apiUse BadRequestError
 * @apiUse InternalServerError
 */
