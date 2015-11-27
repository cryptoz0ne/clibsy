//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: user.js
//
// DESCRIPTION: Definition of the user API endpoints.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/11/10
//******************************************************************************
'use strict';

/**
 * @apiDefine User User
 *
 * API endpoints that interact with user resources.
 */

/**
 * @apiIgnore
 * @api {GET} /users Retreive data for all users
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves an array of users. (TODO: define what users to retrieve)
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiSuccess (200) {Object} users Array of users
 *
 * @apiUse UnauthorizedError
 */

/**
 * @api {GET} /users/me Retreive data of current user
 * @apiName GetUsersMe
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves data of user.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiParam (query) p      (optional) Set to 1 to include user profile object; otherwise, the object is not included
 * @apiParam (query) s      (optional) Set to 1 to include user settings object; otherwise, the object is not included.
 *
 * @apiSuccess (200) {Number}  user_id                  ID of the user
 * @apiSuccess (200) {String}  username                 Unique username for login
 * @apiSuccess (200) {String}  email                    Unique email for login and/or communications
 * @apiSuccess (200) {String}  phone                    Unique phone number for login and/or communications
 * @apiSuccess (200) {String}  given_name               Given name (first name)
 * @apiSuccess (200) {String}  family_name              Family name (last name)
 * @apiSuccess (200) {String}  profile_image            URL string pointing to the profile image
 * @apiSuccess (200) {Object}  profile
 * @apiSuccess (200) {Boolean} profile.is_private       True if user account is set to private, false if set to public
 * @apiSuccess (200) {Number}  profile.acct_level       Account subscription level
 * @apiSuccess (200) {String}  profile.occupation       Occupation title
 * @apiSuccess (200) {String}  profile.stage_name       Stage name
 * @apiSuccess (200) {String}  profile.company          Name of associated company
 * @apiSuccess (200) {String}  profile.company_image    Image/logo of associated company
 * @apiSuccess (200) {Number}  profile.company_country  Country of origin of associated company
 * @apiSuccess (200) {String}  profile.address1         Address line 1 of street address
 * @apiSuccess (200) {String}  profile.address2         Address line 2 of street address
 * @apiSuccess (200) {String}  profile.address3         Address line 3 of street address
 * @apiSuccess (200) {String}  profile.address4         Address line 4 of street address
 * @apiSuccess (200) {String}  profile.locality         Locality (city) of street address
 * @apiSuccess (200) {String}  profile.region           Region (state) of street address
 * @apiSuccess (200) {String}  profile.postal_code      Postal code (zip code) of street address
 * @apiSuccess (200) {Number}  profile.country          Country of origin (according to street address)
 * @apiSuccess (200) {String}  profile.website          Website URL address
 * @apiSuccess (200) {String}  profile.bio              Biographical description
 * @apiSuccess (200) {Object}  settings
 * @apiSuccess (200) {Boolean} settings.newsletter      True if user wants to receive newsletter
 * @apiSuccess (200) {Boolean} settings.allow_read      If true, allow sender to see that message was read
 * @apiSuccess (200) {Number}  settings.notify_method   Method used to send notifications (email, text message, etc)
 * @apiSuccess (200) {Boolean} settings.message_rcv     If true, send notification when receiving a message
 * @apiSuccess (200) {Boolean} settings.message_read    If true, send notification when a sent message is read
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
 *          "address1": "",
 *          "address2": "",
 *          "address3": null,
 *          "address4": null,
 *          "locality": "New York",
 *          "region": "NY",
 *          "postal_code": "10001",
 *          "country": 1, (TODO: values need to be defined)
 *          "website": "https://www.theband.com",
 *          "bio": "This will be a long text block used as a biographical description of the user." (TODO: allow for rich text formatting)
 *      },
 *      "settings": {
 *          "newsletter": false,
 *          "allow_read": true,
 *          "notify_method": 2, (TODO: values need to be defined)
 *          "message_rcv": true,
 *          "message_read": false
 *      }
 *  }
 *
 * @apiUse UnauthorizedError
 */

/**
 * @api {GET} /users/:id Retreive data of current user
 * @apiName GetUsersId
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves data of user.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiParam (param) id     User ID of the user
 *
 * @apiParam (query) p      (optional) Set to 1 to include user profile object; otherwise, the object is not included
 *
 * @apiSuccess (200) {Number}  user_id                  ID of the user
 * @apiSuccess (200) {String}  username                 Unique username for login
 * @apiSuccess (200) {String}  email                    Unique email for login and/or communications
 * @apiSuccess (200) {String}  phone                    Unique phone number for login and/or communications
 * @apiSuccess (200) {String}  given_name               Given name (first name)
 * @apiSuccess (200) {String}  family_name              Family name (last name)
 * @apiSuccess (200) {String}  profile_image            URL string pointing to the profile image
 * @apiSuccess (200) {Object}  profile
 * @apiSuccess (200) {Boolean} profile.is_private       True if user account is set to private, false if set to public
 * @apiSuccess (200) {Number}  profile.acct_level       Account subscription level
 * @apiSuccess (200) {String}  profile.occupation       Occupation title
 * @apiSuccess (200) {String}  profile.stage_name       Stage name
 * @apiSuccess (200) {String}  profile.company          Name of associated company
 * @apiSuccess (200) {String}  profile.company_image    Image/logo of associated company
 * @apiSuccess (200) {Number}  profile.company_country  Country of origin of associated company
 * @apiSuccess (200) {String}  profile.address1         Address line 1 of street address
 * @apiSuccess (200) {String}  profile.address2         Address line 2 of street address
 * @apiSuccess (200) {String}  profile.address3         Address line 3 of street address
 * @apiSuccess (200) {String}  profile.address4         Address line 4 of street address
 * @apiSuccess (200) {String}  profile.locality         Locality (city) of street address
 * @apiSuccess (200) {String}  profile.region           Region (state) of street address
 * @apiSuccess (200) {String}  profile.postal_code      Postal code (zip code) of street address
 * @apiSuccess (200) {Number}  profile.country          Country of origin (according to street address)
 * @apiSuccess (200) {String}  profile.website          Website URL address
 * @apiSuccess (200) {String}  profile.bio              Biographical description
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
 *          "address1": "",
 *          "address2": "",
 *          "address3": null,
 *          "address4": null,
 *          "locality": "New York",
 *          "region": "NY",
 *          "postal_code": "10001",
 *          "country": 1, (TODO: values need to be defined)
 *          "website": "https://www.theband.com",
 *          "bio": "This will be a long text block used as a biographical description of the user." (TODO: allow for rich text formatting)
 *      }
 *  }
 *
 * @apiUse UnauthorizedError
 */

/**
 * @api {GET} /users/:id/profiles Retreive profile data of user (:id)
 * @apiName GetUsersIdProfiles
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves profile data of user.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiParam (param) id     User ID of the user
 *
 * @apiSuccess (200) {Number}  user_id                  ID of the user
 * @apiSuccess (200) {Object}  profile
 * @apiSuccess (200) {Boolean} profile.is_private       True if user account is set to private, false if set to public
 * @apiSuccess (200) {Number}  profile.acct_level       Account subscription level
 * @apiSuccess (200) {String}  profile.occupation       Occupation title
 * @apiSuccess (200) {String}  profile.stage_name       Stage name
 * @apiSuccess (200) {String}  profile.company          Name of associated company
 * @apiSuccess (200) {String}  profile.company_image    Image/logo of associated company
 * @apiSuccess (200) {Number}  profile.company_country  Country of origin of associated company
 * @apiSuccess (200) {String}  profile.address1         Address line 1 of street address
 * @apiSuccess (200) {String}  profile.address2         Address line 2 of street address
 * @apiSuccess (200) {String}  profile.address3         Address line 3 of street address
 * @apiSuccess (200) {String}  profile.address4         Address line 4 of street address
 * @apiSuccess (200) {String}  profile.locality         Locality (city) of street address
 * @apiSuccess (200) {String}  profile.region           Region (state) of street address
 * @apiSuccess (200) {String}  profile.postal_code      Postal code (zip code) of street address
 * @apiSuccess (200) {Number}  profile.country          Country of origin (according to street address)
 * @apiSuccess (200) {String}  profile.website          Website URL address
 * @apiSuccess (200) {String}  profile.bio              Biographical description
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "user_id": 100,
 *      "profile": {
 *          "is_private": false,
 *          "acct_level": 1, (TODO: values need to be defined)
 *          "occupation": "musician",
 *          "stage_name": "The Band",
 *          "company": "Universal",
 *          "company_image": "318132138843432138684.jpg",
 *          "company_country": 1, (TODO: values need to be defined)
 *          "address1": "",
 *          "address2": "",
 *          "address3": null,
 *          "address4": null,
 *          "locality": "New York",
 *          "region": "NY",
 *          "postal_code": "10001",
 *          "country": 1, (TODO: values need to be defined)
 *          "website": "https://www.theband.com",
 *          "bio": "This will be a long text block used as a biographical description of the user." (TODO: allow for rich text formatting)
 *      }
 *  }
 *
 * @apiUse UnauthorizedError
 */

/**
 * @api {GET} /users/:id/settings Retreive settings data of user (:id)
 * @apiName GetUsersIdSettings
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves settings data of user.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiParam (param) id     User ID of the user
 *
 * @apiSuccess (200) {Number}  user_id                  ID of the user
 * @apiSuccess (200) {Object}  settings
 * @apiSuccess (200) {Boolean} settings.newsletter      True if user wants to receive newsletter
 * @apiSuccess (200) {Boolean} settings.allow_read      If true, allow sender to see that message was read
 * @apiSuccess (200) {Number}  settings.notify_method   Method used to send notifications (email, text message, etc)
 * @apiSuccess (200) {Boolean} settings.message_rcv     If true, send notification when receiving a message
 * @apiSuccess (200) {Boolean} settings.message_read    If true, send notification when a sent message is read
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "user_id": 100,
 *      "settings": {
 *          "newsletter": false,
 *          "allow_read": true,
 *          "notify_method": 2, (TODO: values need to be defined)
 *          "message_rcv": true,
 *          "message_read": false
 *      }
 *  }
 *
 * @apiUse UnauthorizedError
 */

/**
 * @api {PATCH} /users/:id Updates data of user (:id)
 * @apiName PatchUsersId
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Updates data of user. All request body fields are optional. Any fields not specified, are ignored and unchanged.
 *
 * @apiHeader {String} authorization    Authorization token.
 *
 * @apiParam (param) id User ID of the user
 *
 * @apiParam (body) username
 * @apiParam (body) email
 * @apiParam (body) phone
 * @apiParam (body) given_name
 * @apiParam (body) family_name
 *
 * @apiSuccess (200) {Number} user_id       ID of the user
 *
 * @apiUse UnauthorizedError
 */

/**
 * @api {POST} /users Create a new user
 * @apiName PostUsers
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Create a new user.
 *
 * @apiParam (body) username
 * @apiParam (body) email
 * @apiParam (body) phone
 * @apiParam (body) given_name
 * @apiParam (body) family_name
 *
 * @apiSuccess (201) {Number} user_id       ID of the user
 * @apiSuccess (201) {String} username      Unique username for login
 * @apiSuccess (201) {String} email         Unique email for login and/or communications
 * @apiSuccess (201) {String} phone         Unique phone number for login and/or communications
 * @apiSuccess (201) {String} given_name    Given name (first name)
 * @apiSuccess (201) {String} family_name   Family name (last name)
 *
 * @apiUse UnauthorizedError
 */


// // GET ROUTES
//     /users/:id
//     /users/:id/image
//     /users/:id/addresses
//     /users/:id/phones
//     /users/:id/devices
//     /users/:id/preferences
//     /users/:id/subscriptions/:type
//     /users/:id/subscription/:subscriptionId
//     /users/:id/subscriptionForService/:serviceId
//     /users/:id/merchant/staff
//     /users/:id/merchant/staffMember/:staffId
//     /users/:id/service/staff
//     /users/:id/service/staffMember/:staffId
//     /users/:id/transactions
//     /users/:id/transaction/:transactionId

// // PATCH ROUTES
//     /users/:id
//     /users/:id/address/:addressId
//     /users/:id/phone/:phoneId
//     /users/:id/device/:deviceId

// // POST ROUTES
//     /users

//     /users/:id/image
//     /users/:id/address
//     /users/:id/phone
//     /users/:id/device
//     /users/:id/password
//     /users/:id/pin
//     /users/:id/preference/payment
//     /users/:id/preference/loyalty
//     /users/:id/preference/checkin
//     /users/:id/subscriptionForService/:serviceId
//     /users/:id/referrals?p=[phone]...&e=[email]... [**REMOVED**]

// // DELETE ROUTES
//     /users/:id
// 501 /users/:id/image/:size
//     /users/:id/address/:addressId
//     /users/:id/phone/:phoneId
//     /users/:id/device/:deviceId
//     /users/:id/preference/payment
//     /users/:id/preference/loyalty
//     /users/:id/preference/checkin
//     /users/:id/subscription/:subscriptionId

// // CATCH-ALL ROUTES (error)
//     /users/* (GET)
//     /users/* (PUT)
//     /users/* (POST)
//     /users/* (DELETE)
