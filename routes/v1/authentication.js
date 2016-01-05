//******************************************************************************
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
//******************************************************************************
'use strict';

/**
 * @apiDefine Authentication Authentication
 *
 * API endpoints that are related to authentication such as Login/Logout or 'Sign In'/'Sign Out'.
 * This description can contain **markdown** syntax.
 */

/**
 * @api {POST} /login Sign in with an existing user
 * @apiName PostLogin
 * @apiGroup Authentication
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Login a user of the system.
 *
 * @apiParam (body) {String} identifier Username, email address or phone number of the account
 * @apiParam (body) {String} password   Password of the account
 *
 * @apiSuccess (200) {String} token     API authorization token
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
 * @api {GET} /logout Sign out an existing user
 * @apiName GetLogout
 * @apiGroup Authentication
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Logout a user of the system.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiSuccess (204) NoContent
 *
 * @apiUse BadRequestError
 * @apiUse InternalServerError
 */

/**
 * @api {POST} /verify/unique Verify new login information is unique
 * @apiName PostVerifyUnique
 * @apiGroup Authentication
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Verify the information given when a user creates an account is unique to the system.
 *
 * @apiParam (body) {string} username   (optional) The username to verify is unique.
 * @apiParam (body) {string} email      (optional) The email address to verify is unique.
 * @apiParam (body) {string} phone      (optional) The phone number to verify is unique.
 *
 * @apiSuccess (200) {Boolean} username (optional) True if given username is unique to the system; otherwise, false. Only returned if 'username' is provided in the request.
 * @apiSuccess (200) {Boolean} email    (optional) True if given email address is unique to the system; otherwise, false. Only returned if 'email' is provided in the request.
 * @apiSuccess (200) {Boolean} phone    (optional) True if given phone number is unique to the system; otherwise, false. Only returned if 'phone' is provided in the request.
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
 * @api {POST} /verify/email/:code Verify email address used for login
 * @apiName PostVerifyEmail
 * @apiGroup Authentication
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Verifies the email address given by a user is under the control of that user.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiParam (param) {string} code      The code used to verify the email address.
 *
 * @apiSuccess (200) {Boolean} verified True if code validates the email address; otherwise, false.
 *
 * @apiUse InternalServerError
 */

/**
 * @apiIgnore
 * @api {POST} /verify/phone Verify phone number used for login
 * @apiName PostVerifyPhone
 * @apiGroup Authentication
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Verifies the phone number given by a user is under the control of that user.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiParam (body) {string} code       The verification code used to verify the phone number.
 *
 * @apiSuccess (200) {Boolean} verified True if code validates the phone number; otherwise, false.
 *
 * @apiUse InternalServerError
 */
