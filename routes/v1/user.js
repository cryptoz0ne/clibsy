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
 * @api {GET} /users [GET] /users
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission Admin
 *
 * @apiDescription Retrieves an array of users. (TODO: define what users to retrieve)
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiSuccess (200) {Array} users Array of users
 *
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */

/**
 * @api {GET} /users/me [GET] /users/me
 * @apiName GetUsersMe
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieve data of current user
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Query) pr (optional) Set to 1 to include user profile object; otherwise, the object is not included
 * @apiParam (Query) st (optional) Set to 1 to include user settings object; otherwise, the object is not included
 * @apiParam (Query) a  (optional) (**not implemented**) Set to 1 to include array of user address objects; otherwise, the object is not included
 * @apiParam (Query) c  (optional) (**not implemented**) Set to 1 to include array of user contact objects; otherwise, the object is not included
 * @apiParam (Query) ph (optional) (**not implemented**) Set to 1 to include array of user phone objects; otherwise, the object is not included
 * @apiParam (Query) sg (optional) (**not implemented**) Set to 1 to include array of user song objects; otherwise, the object is not included
 * @apiParam (Query) f  (optional) (**not implemented**) Set to 1 to include follower/followee counts; otherwise, the counts are no included
 * @apiParam (Query) m  (optional) (**not implemented**) Set to 1 to include unread message count; otherwise, the count is not included
 *
 * @apiSuccess (200) {Number}  user_id        ID of the user
 * @apiSuccess (200) {String}  username       Unique username for login
 * @apiSuccess (200) {String}  email          Unique email for login and/or communications
 * @apiSuccess (200) {Boolean} email_verified True if email was verified by the user, false if not verified
 * @apiSuccess (200) {String}  phone          Unique phone number for login and/or communications
 * @apiSuccess (200) {Boolean} phone_verified True if phone was verified by the user, false if not verified
 * @apiSuccess (200) {String}  given_name     Given name (first name)
 * @apiSuccess (200) {String}  family_name    Family name (last name)
 * @apiSuccess (200) {String}  profile_image  URL string pointing to the profile image
 * @apiSuccess (200) {Object}  profile
 * @apiSuccess (200) {Boolean} profile.is_private True if user account is set to private, false if set to public
 * @apiSuccess (200) {Number}  profile.acct_level Account subscription level
 * @apiSuccess (200) {String}  profile.occupation Occupation title
 * @apiSuccess (200) {String}  profile.stage_name Stage name
 * @apiSuccess (200) {String}  profile.website    Website URL address
 * @apiSuccess (200) {String}  profile.bio        Biographical description
 * @apiSuccess (200) {Number}  profile.company_id Link to company information
 * @apiSuccess (200) {Number}  profile.address_id Link to default address information
 * @apiSuccess (200) {Number}  profile.phone_id   Link to default phone number information
 * @apiSuccess (200) {Object}  profile.company
 * @apiSuccess (200) {Number}  profile.company.company_id ID of the company
 * @apiSuccess (200) {String}  profile.company.name       Name of the company
 * @apiSuccess (200) {String}  profile.company.logo_image URL string pointing to the company logo image
 * @apiSuccess (200) {String}  profile.company.email      Email address of company
 * @apiSuccess (200) {String}  profile.company.website    Website URL of the company
 * @apiSuccess (200) {String}  profile.company.desc       Description of the company
 * @apiSuccess (200) {Object}  profile.address
 * @apiSuccess (200) {Number}  profile.address.address_id  ID of the address
 * @apiSuccess (200) {String}  profile.address.name        Name of address
 * @apiSuccess (200) {String}  profile.address.address1    Street address line 1 of address
 * @apiSuccess (200) {String}  profile.address.address2    Street address line 2 of address
 * @apiSuccess (200) {String}  profile.address.address3    Street address line 3 of address
 * @apiSuccess (200) {String}  profile.address.address4    Street address line 4 of address
 * @apiSuccess (200) {String}  profile.address.locality    Locality (city) of address
 * @apiSuccess (200) {String}  profile.address.region_id   Region (state) ID of region for address
 * @apiSuccess (200) {String}  profile.address.postal_code Postal code (zip code) of address
 * @apiSuccess (200) {Object}  profile.address.region
 * @apiSuccess (200) {Number}  profile.address.region.region_id  ID of the region
 * @apiSuccess (200) {String}  profile.address.region.name       Official name of region
 * @apiSuccess (200) {String}  profile.address.region.code       ISO code of region
 * @apiSuccess (200) {String}  profile.address.region.abbr       Assigned abbreviation of region
 * @apiSuccess (200) {String}  profile.address.region.category   Category of region
 * @apiSuccess (200) {Number}  profile.address.region.country_id Link to associated country
 * @apiSuccess (200) {Object}  profile.address.region.country
 * @apiSuccess (200) {Number}  profile.address.region.country.country_id  ID of the country
 * @apiSuccess (200) {String}  profile.address.region.country.name        Name of country
 * @apiSuccess (200) {String}  profile.address.region.country.iso_name    Official ISO name of country
 * @apiSuccess (200) {String}  profile.address.region.country.iso_2       ISO Alpha-2 code
 * @apiSuccess (200) {String}  profile.address.region.country.iso_3       ISO Alpha-3 code
 * @apiSuccess (200) {Number}  profile.address.region.country.iso_numeric ISO numeric code
 * @apiSuccess (200) {Object}  profile.phone
 * @apiSuccess (200) {Number}  profile.phone.phone_id   ID of the phone number
 * @apiSuccess (200) {Number}  profile.phone.name       Name of phone number
 * @apiSuccess (200) {Number}  profile.phone.number     Digits of phone number
 * @apiSuccess (200) {Number}  profile.phone.extension  Extension digits of phone number
 * @apiSuccess (200) {Number}  profile.phone.country_id Link to associated country
 * @apiSuccess (200) {Object}  profile.phone.country
 * @apiSuccess (200) {Number}  profile.phone.country.country_id  ID of the country
 * @apiSuccess (200) {String}  profile.phone.country.name        Name of country
 * @apiSuccess (200) {String}  profile.phone.country.iso_name    Official ISO name of country
 * @apiSuccess (200) {String}  profile.phone.country.iso_2       ISO Alpha-2 code
 * @apiSuccess (200) {String}  profile.phone.country.iso_3       ISO Alpha-3 code
 * @apiSuccess (200) {Number}  profile.phone.country.iso_numeric ISO numeric code
 * @apiSuccess (200) {Object}  settings
 * @apiSuccess (200) {Boolean} settings.rcv_newsletter     True if user wants to receive newsletter
 * @apiSuccess (200) {Boolean} settings.allow_read_receipt True allows sender to see that message was read
 * @apiSuccess (200) {Number}  settings.notify_method      Method used to send notifications (email, text message, etc)
 * @apiSuccess (200) {Boolean} settings.notify_msg_rcv     True sends notification when receiving a message
 * @apiSuccess (200) {Boolean} settings.notify_msg_read    True sends notification when a sent message is read
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "user_id": 100,
 *      "username": "guyUser123",
 *      "email": "user@email.com",
 *      "email_verified": true,
 *      "phone": "+12125556789",
 *      "phone_verified": true,
 *      "given_name": "Guy",
 *      "family_name": "User",
 *      "profile_image": "img/104867096017346081747.jpg",
 *      "profile": {
 *          "is_private": false,
 *          "acct_level": 1,
 *          "occupation": "musician",
 *          "stage_name": "The Band",
 *          "website": "https://www.theband.com",
 *          "bio": "This will be a long text block used as a biographical description of the user.",
 *          "company_id": 101,
 *          "address_id": 101,
 *          "phone_id": 101,
 *          "company": {
 *              "company_id": 101,
 *              "name": "Universal",
 *              "logo_image": "img/318132138843432138684.jpg",
 *              "email": "support@universal.com",
 *              "website": "http://www.universal.com",
 *              "desc": "We are a big music company among other things."
 *          },
 *          "address": {
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
 *          "phone": {
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
 *          }
 *      },
 *      "settings": {
 *          "rcv_newsletter": true,
 *          "allow_read_receipt": true,
 *          "notify_method": 2,
 *          "notify_msg_rcv": true,
 *          "notify_msg_read": false
 *      }
 *  }
 *
 * @apiUse UnauthorizedError
 * @apiUse InternalServerError
 */

/**
 * @api {GET} /users/:id [GET] /users/:id
 * @apiName GetUsersId
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves data of user (:id). Information provided will differ based on the relationship between the current user and the specified user.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Param) id User ID of the user
 *
 * @apiParam (Query) pr (optional) Set to 1 to include user profile object; otherwise, the object is not included
 *
 * @apiSuccess (200) {Number}  user_id        ID of the user
 * @apiSuccess (200) {String}  username       Unique username for login
 * @apiSuccess (200) {String}  email          Unique email for login and/or communications
 * @apiSuccess (200) {Boolean} email_verified True if email was verified by the user, false if not verified
 * @apiSuccess (200) {String}  phone          Unique phone number for login and/or communications
 * @apiSuccess (200) {Boolean} phone_verified True if phone was verified by the user, false if not verified
 * @apiSuccess (200) {String}  given_name     Given name (first name)
 * @apiSuccess (200) {String}  family_name    Family name (last name)
 * @apiSuccess (200) {String}  profile_image  URL string pointing to the profile image
 * @apiSuccess (200) {Object}  profile
 * @apiSuccess (200) {Boolean} profile.is_private True if user account is set to private, false if set to public
 * @apiSuccess (200) {Number}  profile.acct_level Account subscription level
 * @apiSuccess (200) {String}  profile.occupation Occupation title
 * @apiSuccess (200) {String}  profile.stage_name Stage name
 * @apiSuccess (200) {String}  profile.website    Website URL address
 * @apiSuccess (200) {String}  profile.bio        Biographical description
 * @apiSuccess (200) {Number}  profile.company_id Link to company information
 * @apiSuccess (200) {Number}  profile.address_id Link to default address information
 * @apiSuccess (200) {Number}  profile.phone_id   Link to default phone number information
 * @apiSuccess (200) {Object}  profile.company
 * @apiSuccess (200) {Number}  profile.company.company_id ID of the company
 * @apiSuccess (200) {String}  profile.company.name       Name of the company
 * @apiSuccess (200) {String}  profile.company.logo_image URL string pointing to the company logo image
 * @apiSuccess (200) {String}  profile.company.email      Email address of company
 * @apiSuccess (200) {String}  profile.company.website    Website URL of the company
 * @apiSuccess (200) {String}  profile.company.desc       Description of the company
 * @apiSuccess (200) {Object}  profile.address
 * @apiSuccess (200) {Number}  profile.address.address_id  ID of the address
 * @apiSuccess (200) {String}  profile.address.name        Name of address
 * @apiSuccess (200) {String}  profile.address.address1    Street address line 1 of address
 * @apiSuccess (200) {String}  profile.address.address2    Street address line 2 of address
 * @apiSuccess (200) {String}  profile.address.address3    Street address line 3 of address
 * @apiSuccess (200) {String}  profile.address.address4    Street address line 4 of address
 * @apiSuccess (200) {String}  profile.address.locality    Locality (city) of address
 * @apiSuccess (200) {String}  profile.address.region_id   Region (state) ID of region for address
 * @apiSuccess (200) {String}  profile.address.postal_code Postal code (zip code) of address
 * @apiSuccess (200) {Object}  profile.address.region
 * @apiSuccess (200) {Number}  profile.address.region.region_id  ID of the region
 * @apiSuccess (200) {String}  profile.address.region.name       Official name of region
 * @apiSuccess (200) {String}  profile.address.region.code       ISO code of region
 * @apiSuccess (200) {String}  profile.address.region.abbr       Assigned abbreviation of region
 * @apiSuccess (200) {String}  profile.address.region.category   Category of region
 * @apiSuccess (200) {Number}  profile.address.region.country_id Link to associated country
 * @apiSuccess (200) {Object}  profile.address.region.country
 * @apiSuccess (200) {Number}  profile.address.region.country.country_id  ID of the country
 * @apiSuccess (200) {String}  profile.address.region.country.name        Name of country
 * @apiSuccess (200) {String}  profile.address.region.country.iso_name    Official ISO name of country
 * @apiSuccess (200) {String}  profile.address.region.country.iso_2       ISO Alpha-2 code
 * @apiSuccess (200) {String}  profile.address.region.country.iso_3       ISO Alpha-3 code
 * @apiSuccess (200) {Number}  profile.address.region.country.iso_numeric ISO numeric code
 * @apiSuccess (200) {Object}  profile.phone
 * @apiSuccess (200) {Number}  profile.phone.phone_id   ID of the phone number
 * @apiSuccess (200) {Number}  profile.phone.name       Name of phone number
 * @apiSuccess (200) {Number}  profile.phone.number     Digits of phone number
 * @apiSuccess (200) {Number}  profile.phone.extension  Extension digits of phone number
 * @apiSuccess (200) {Number}  profile.phone.country_id Link to associated country
 * @apiSuccess (200) {Object}  profile.phone.country
 * @apiSuccess (200) {Number}  profile.phone.country.country_id  ID of the country
 * @apiSuccess (200) {String}  profile.phone.country.name        Name of country
 * @apiSuccess (200) {String}  profile.phone.country.iso_name    Official ISO name of country
 * @apiSuccess (200) {String}  profile.phone.country.iso_2       ISO Alpha-2 code
 * @apiSuccess (200) {String}  profile.phone.country.iso_3       ISO Alpha-3 code
 * @apiSuccess (200) {Number}  profile.phone.country.iso_numeric ISO numeric code
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      ... (same as [GET] /users/me excluding the user settings)
 *  }
 *
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */

/**
 * @api {GET} /users/me/profiles [GET] /users/me/profiles
 * @apiName GetUsersMeProfiles
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves profile data of user (:id).
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiSuccess (200) {Number}  user_id    ID of the user
 * @apiSuccess (200) {Boolean} is_private True if user account is set to private, false if set to public
 * @apiSuccess (200) {Number}  acct_level Account subscription level
 * @apiSuccess (200) {String}  occupation Occupation title
 * @apiSuccess (200) {String}  stage_name Stage name
 * @apiSuccess (200) {String}  website    Website URL address
 * @apiSuccess (200) {String}  bio        Biographical description
 * @apiSuccess (200) {Number}  company_id Link to company information
 * @apiSuccess (200) {Number}  address_id Link to default address information
 * @apiSuccess (200) {Number}  phone_id   Link to default phone number information
 * @apiSuccess (200) {Object}  company
 * @apiSuccess (200) {Number}  company.company_id ID of the company
 * @apiSuccess (200) {String}  company.name       Name of the company
 * @apiSuccess (200) {String}  company.logo_image URL string pointing to the company logo image
 * @apiSuccess (200) {String}  company.email      Email address of company
 * @apiSuccess (200) {String}  company.website    Website URL of the company
 * @apiSuccess (200) {String}  company.desc       Description of the company
 * @apiSuccess (200) {Object}  address
 * @apiSuccess (200) {Number}  address.address_id  ID of the address
 * @apiSuccess (200) {String}  address.name        Name of address
 * @apiSuccess (200) {String}  address.address1    Street address line 1 of address
 * @apiSuccess (200) {String}  address.address2    Street address line 2 of address
 * @apiSuccess (200) {String}  address.address3    Street address line 3 of address
 * @apiSuccess (200) {String}  address.address4    Street address line 4 of address
 * @apiSuccess (200) {String}  address.locality    Locality (city) of address
 * @apiSuccess (200) {String}  address.region_id   Region (state) ID of region for address
 * @apiSuccess (200) {String}  address.postal_code Postal code (zip code) of address
 * @apiSuccess (200) {Object}  address.region
 * @apiSuccess (200) {Number}  address.region.region_id  ID of the region
 * @apiSuccess (200) {String}  address.region.name       Official name of region
 * @apiSuccess (200) {String}  address.region.code       ISO code of region
 * @apiSuccess (200) {String}  address.region.abbr       Assigned abbreviation of region
 * @apiSuccess (200) {String}  address.region.category   Category of region
 * @apiSuccess (200) {Number}  address.region.country_id Link to associated country
 * @apiSuccess (200) {Object}  address.region.country
 * @apiSuccess (200) {Number}  address.region.country.country_id  ID of the country
 * @apiSuccess (200) {String}  address.region.country.name        Name of country
 * @apiSuccess (200) {String}  address.region.country.iso_name    Official ISO name of country
 * @apiSuccess (200) {String}  address.region.country.iso_2       ISO Alpha-2 code
 * @apiSuccess (200) {String}  address.region.country.iso_3       ISO Alpha-3 code
 * @apiSuccess (200) {Number}  address.region.country.iso_numeric ISO numeric code
 * @apiSuccess (200) {Object}  phone
 * @apiSuccess (200) {Number}  phone.phone_id   ID of the phone number
 * @apiSuccess (200) {Number}  phone.name       Name of phone number
 * @apiSuccess (200) {Number}  phone.number     Digits of phone number
 * @apiSuccess (200) {Number}  phone.extension  Extension digits of phone number
 * @apiSuccess (200) {Number}  phone.country_id Link to associated country
 * @apiSuccess (200) {Object}  phone.country
 * @apiSuccess (200) {Number}  phone.country.country_id  ID of the country
 * @apiSuccess (200) {String}  phone.country.name        Name of country
 * @apiSuccess (200) {String}  phone.country.iso_name    Official ISO name of country
 * @apiSuccess (200) {String}  phone.country.iso_2       ISO Alpha-2 code
 * @apiSuccess (200) {String}  phone.country.iso_3       ISO Alpha-3 code
 * @apiSuccess (200) {Number}  phone.country.iso_numeric ISO numeric code
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "user_id": 100,
 *      "is_private": false,
 *      "acct_level": 1,
 *      "occupation": "musician",
 *      "stage_name": "The Band",
 *      "website": "https://www.theband.com",
 *      "bio": "This will be a long text block used as a biographical description of the user.",
 *      "company_id": 101,
 *      "address_id": 101,
 *      "phone_id": 101,
 *      "company": {
 *          "company_id": 101,
 *          "name": "Universal",
 *          "logo_image": "img/318132138843432138684.jpg",
 *          "email": "support@universal.com",
 *          "website": "http://www.universal.com",
 *          "desc": "We are a big music company among other things."
 *      },
 *      "address": {
 *          "address_id": 101,
 *          "name": "Home",
 *          "address1": "123 Fake St",
 *          "address2": "APT 100",
 *          "address3": null,
 *          "address4": null,
 *          "locality": "New York",
 *          "region_id": 51,
 *          "postal_code": "10001",
 *          "region": {
 *              "region_id": 51,
 *              "name": "New York",
 *              "code": "US-NY",
 *              "abbr": "NY",
 *              "category": "state",
 *              "country_id": 1,
 *              "country": {
 *                  "country_id": 1,
 *                  "name": "United States"
 *                  "iso_name": "UNITED STATES"
 *                  "iso_2": "US",
 *                  "iso_3": "USA",
 *                  "iso_numeric": "840"
 *              }
 *          }
 *      },
 *      "phone": {
 *          "phone_id": 101,
 *          "name": "Cell",
 *          "number": "+12125551234",
 *          "extension": null,
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
 * @apiUse InternalServerError
 */

/**
 * @api {GET} /users/:id/profiles [GET] /users/:id/profiles
 * @apiName GetUsersIdProfiles
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves profile data of user (:id).
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Param) id User ID of the user
 *
 * @apiSuccess (200) {Number}  user_id    ID of the user
 * @apiSuccess (200) {Boolean} is_private True if user account is set to private, false if set to public
 * @apiSuccess (200) {Number}  acct_level Account subscription level
 * @apiSuccess (200) {String}  occupation Occupation title
 * @apiSuccess (200) {String}  stage_name Stage name
 * @apiSuccess (200) {String}  website    Website URL address
 * @apiSuccess (200) {String}  bio        Biographical description
 * @apiSuccess (200) {Number}  company_id Link to company information
 * @apiSuccess (200) {Number}  address_id Link to default address information
 * @apiSuccess (200) {Number}  phone_id   Link to default phone number information
 * @apiSuccess (200) {Object}  company
 * @apiSuccess (200) {Number}  company.company_id ID of the company
 * @apiSuccess (200) {String}  company.name       Name of the company
 * @apiSuccess (200) {String}  company.logo_image URL string pointing to the company logo image
 * @apiSuccess (200) {String}  company.email      Email address of company
 * @apiSuccess (200) {String}  company.website    Website URL of the company
 * @apiSuccess (200) {String}  company.desc       Description of the company
 * @apiSuccess (200) {Object}  address
 * @apiSuccess (200) {Number}  address.address_id  ID of the address
 * @apiSuccess (200) {String}  address.name        Name of address
 * @apiSuccess (200) {String}  address.address1    Street address line 1 of address
 * @apiSuccess (200) {String}  address.address2    Street address line 2 of address
 * @apiSuccess (200) {String}  address.address3    Street address line 3 of address
 * @apiSuccess (200) {String}  address.address4    Street address line 4 of address
 * @apiSuccess (200) {String}  address.locality    Locality (city) of address
 * @apiSuccess (200) {String}  address.region_id   Region (state) ID of region for address
 * @apiSuccess (200) {String}  address.postal_code Postal code (zip code) of address
 * @apiSuccess (200) {Object}  address.region
 * @apiSuccess (200) {Number}  address.region.region_id  ID of the region
 * @apiSuccess (200) {String}  address.region.name       Official name of region
 * @apiSuccess (200) {String}  address.region.code       ISO code of region
 * @apiSuccess (200) {String}  address.region.abbr       Assigned abbreviation of region
 * @apiSuccess (200) {String}  address.region.category   Category of region
 * @apiSuccess (200) {Number}  address.region.country_id Link to associated country
 * @apiSuccess (200) {Object}  address.region.country
 * @apiSuccess (200) {Number}  address.region.country.country_id  ID of the country
 * @apiSuccess (200) {String}  address.region.country.name        Name of country
 * @apiSuccess (200) {String}  address.region.country.iso_name    Official ISO name of country
 * @apiSuccess (200) {String}  address.region.country.iso_2       ISO Alpha-2 code
 * @apiSuccess (200) {String}  address.region.country.iso_3       ISO Alpha-3 code
 * @apiSuccess (200) {Number}  address.region.country.iso_numeric ISO numeric code
 * @apiSuccess (200) {Object}  phone
 * @apiSuccess (200) {Number}  phone.phone_id   ID of the phone number
 * @apiSuccess (200) {Number}  phone.name       Name of phone number
 * @apiSuccess (200) {Number}  phone.number     Digits of phone number
 * @apiSuccess (200) {Number}  phone.extension  Extension digits of phone number
 * @apiSuccess (200) {Number}  phone.country_id Link to associated country
 * @apiSuccess (200) {Object}  phone.country
 * @apiSuccess (200) {Number}  phone.country.country_id  ID of the country
 * @apiSuccess (200) {String}  phone.country.name        Name of country
 * @apiSuccess (200) {String}  phone.country.iso_name    Official ISO name of country
 * @apiSuccess (200) {String}  phone.country.iso_2       ISO Alpha-2 code
 * @apiSuccess (200) {String}  phone.country.iso_3       ISO Alpha-3 code
 * @apiSuccess (200) {Number}  phone.country.iso_numeric ISO numeric code
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "user_id": 100,
 *      "is_private": false,
 *      "acct_level": 1,
 *      "occupation": "musician",
 *      "stage_name": "The Band",
 *      "website": "https://www.theband.com",
 *      "bio": "This will be a long text block used as a biographical description of the user.",
 *      "company_id": 101,
 *      "address_id": 101,
 *      "phone_id": 101,
 *      "company": {
 *          "company_id": 101,
 *          "name": "Universal",
 *          "logo_image": "img/318132138843432138684.jpg",
 *          "email": "support@universal.com",
 *          "website": "http://www.universal.com",
 *          "desc": "We are a big music company among other things."
 *      },
 *      "address": {
 *          "address_id": 101,
 *          "name": "Home",
 *          "address1": "123 Fake St",
 *          "address2": "APT 100",
 *          "address3": null,
 *          "address4": null,
 *          "locality": "New York",
 *          "region_id": 51,
 *          "postal_code": "10001",
 *          "region": {
 *              "region_id": 51,
 *              "name": "New York",
 *              "code": "US-NY",
 *              "abbr": "NY",
 *              "category": "state",
 *              "country_id": 1,
 *              "country": {
 *                  "country_id": 1,
 *                  "name": "United States"
 *                  "iso_name": "UNITED STATES"
 *                  "iso_2": "US",
 *                  "iso_3": "USA",
 *                  "iso_numeric": "840"
 *              }
 *          }
 *      },
 *      "phone": {
 *          "phone_id": 101,
 *          "name": "Cell",
 *          "number": "+12125551234",
 *          "extension": null,
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
 * @api {GET} /users/me/settings [GET] /users/me/settings
 * @apiName GetUsersMeSettings
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves settings data of the current user.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiSuccess (200) {Number}  user_id            ID of the user
 * @apiSuccess (200) {Boolean} rcv_newsletter     True if user wants to receive newsletter
 * @apiSuccess (200) {Boolean} allow_read_receipt True allows sender to see that message was read
 * @apiSuccess (200) {Number}  notify_method      Method used to send notifications (email, text message, etc)
 * @apiSuccess (200) {Boolean} notify_msg_rcv     True sends notification when receiving a message
 * @apiSuccess (200) {Boolean} notify_msg_read    True sends notification when a sent message is read
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "user_id": 100,
 *      "rcv_newsletter": true,
 *      "allow_read_receipt": true,
 *      "notify_method": 2,
 *      "notify_msg_rcv": true,
 *      "notify_msg_read": false
 *  }
 *
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */

/**
 * @apiIgnore
 * @api {GET} /users/:id/followers [GET] /users/:id/followers
 * @apiName GetUsersFollowers
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieve number of followers for user (:id).
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Param) id User ID of the user
 *
 * @apiSuccess (200) {Number} user_id   ID of the user
 * @apiSuccess (200) {Number} followers Number of followers for user
 * @apiSuccess (200) {Number} followees Number of others user is following
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "user_id": 100,
 *      "followers": 123,
 *      "followees": 24
 *  }
 *
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */

/**
 * @api {PATCH} /users/me [PATCH] /users/me
 * @apiName PatchUsersMe
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Updates data of the current user. All request body fields are optional. Any fields not specified, are ignored and unchanged.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Body) username
 * @apiParam (Body) email
 * @apiParam (Body) phone
 * @apiParam (Body) given_name
 * @apiParam (Body) family_name
 * @apiParam (Body) profile_image Use multipart/form-data to upload image file
 *
 * @apiSuccess (200) {Number}  user_id        ID of the user
 * @apiSuccess (200) {String}  username       Unique username for login
 * @apiSuccess (200) {String}  email          Unique email for login and/or communications
 * @apiSuccess (200) {Boolean} email_verified True if email was verified by the user, false if not verified
 * @apiSuccess (200) {String}  phone          Unique phone number for login and/or communications
 * @apiSuccess (200) {Boolean} phone_verified True if phone was verified by the user, false if not verified
 * @apiSuccess (200) {String}  given_name     Given name (first name)
 * @apiSuccess (200) {String}  family_name    Family name (last name)
 * @apiSuccess (200) {String}  profile_image  URL string pointing to the profile image
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "user_id": 100,
 *      "username": "guyUser123",
 *      "email": "user@email.com",
 *      "email_verified": true,
 *      "phone": "+12125556789",
 *      "phone_verified": true,
 *      "given_name": "Guy",
 *      "family_name": "User",
 *      "profile_image": "img/104867096017346081747.jpg"
 *  }
 *
 * @apiUse BadRequestError
 * @apiUse UnauthorizedError
 * @apiUse InternalServerError
 */

/**
 * @api {PATCH} /users/me/profiles [PATCH] /users/me/profiles
 * @apiName PatchUsersMeProfiles
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Updates profile data of the current user. All request body fields are optional. Any fields not specified, are ignored and unchanged.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Body) is_private
 * @apiParam (Body) occupation
 * @apiParam (Body) stage_name
 * @apiParam (Body) website
 * @apiParam (Body) bio
 * @apiParam (Body) company_id
 * @apiParam (Body) address_id
 * @apiParam (Body) phone_id
 *
 * @apiSuccess (200) {Number}  user_id    ID of the user
 * @apiSuccess (200) {Boolean} is_private True if user account is set to private, false if set to public
 * @apiSuccess (200) {Number}  acct_level Account subscription level
 * @apiSuccess (200) {String}  occupation Occupation title
 * @apiSuccess (200) {String}  stage_name Stage name
 * @apiSuccess (200) {String}  website    Website URL address
 * @apiSuccess (200) {String}  bio        Biographical description
 * @apiSuccess (200) {Number}  company_id Link to company information
 * @apiSuccess (200) {Number}  address_id Link to default address information
 * @apiSuccess (200) {Number}  phone_id   Link to default phone number information
 * @apiSuccess (200) {Object}  company
 * @apiSuccess (200) {Number}  company.company_id ID of the company
 * @apiSuccess (200) {String}  company.name       Name of the company
 * @apiSuccess (200) {String}  company.logo_image URL string pointing to the company logo image
 * @apiSuccess (200) {String}  company.email      Email address of company
 * @apiSuccess (200) {String}  company.website    Website URL of the company
 * @apiSuccess (200) {String}  company.desc       Description of the company
 * @apiSuccess (200) {Object}  address
 * @apiSuccess (200) {Number}  address.address_id  ID of the address
 * @apiSuccess (200) {String}  address.name        Name of address
 * @apiSuccess (200) {String}  address.address1    Street address line 1 of address
 * @apiSuccess (200) {String}  address.address2    Street address line 2 of address
 * @apiSuccess (200) {String}  address.address3    Street address line 3 of address
 * @apiSuccess (200) {String}  address.address4    Street address line 4 of address
 * @apiSuccess (200) {String}  address.locality    Locality (city) of address
 * @apiSuccess (200) {String}  address.region_id   Region (state) ID of region for address
 * @apiSuccess (200) {String}  address.postal_code Postal code (zip code) of address
 * @apiSuccess (200) {Object}  address.region
 * @apiSuccess (200) {Number}  address.region.region_id  ID of the region
 * @apiSuccess (200) {String}  address.region.name       Official name of region
 * @apiSuccess (200) {String}  address.region.code       ISO code of region
 * @apiSuccess (200) {String}  address.region.abbr       Assigned abbreviation of region
 * @apiSuccess (200) {String}  address.region.category   Category of region
 * @apiSuccess (200) {Number}  address.region.country_id Link to associated country
 * @apiSuccess (200) {Object}  address.region.country
 * @apiSuccess (200) {Number}  address.region.country.country_id  ID of the country
 * @apiSuccess (200) {String}  address.region.country.name        Name of country
 * @apiSuccess (200) {String}  address.region.country.iso_name    Official ISO name of country
 * @apiSuccess (200) {String}  address.region.country.iso_2       ISO Alpha-2 code
 * @apiSuccess (200) {String}  address.region.country.iso_3       ISO Alpha-3 code
 * @apiSuccess (200) {Number}  address.region.country.iso_numeric ISO numeric code
 * @apiSuccess (200) {Object}  phone
 * @apiSuccess (200) {Number}  phone.phone_id   ID of the phone number
 * @apiSuccess (200) {Number}  phone.name       Name of phone number
 * @apiSuccess (200) {Number}  phone.number     Digits of phone number
 * @apiSuccess (200) {Number}  phone.extension  Extension digits of phone number
 * @apiSuccess (200) {Number}  phone.country_id Link to associated country
 * @apiSuccess (200) {Object}  phone.country
 * @apiSuccess (200) {Number}  phone.country.country_id  ID of the country
 * @apiSuccess (200) {String}  phone.country.name        Name of country
 * @apiSuccess (200) {String}  phone.country.iso_name    Official ISO name of country
 * @apiSuccess (200) {String}  phone.country.iso_2       ISO Alpha-2 code
 * @apiSuccess (200) {String}  phone.country.iso_3       ISO Alpha-3 code
 * @apiSuccess (200) {Number}  phone.country.iso_numeric ISO numeric code
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "user_id": 100,
 *      "is_private": false,
 *      "acct_level": 1,
 *      "occupation": "musician",
 *      "stage_name": "The Band",
 *      "website": "https://www.theband.com",
 *      "bio": "This will be a long text block used as a biographical description of the user.",
 *      "company_id": 101,
 *      "address_id": 101,
 *      "phone_id": 101,
 *      "company": {
 *          "company_id": 101,
 *          "name": "Universal",
 *          "logo_image": "img/318132138843432138684.jpg",
 *          "email": "support@universal.com",
 *          "website": "http://www.universal.com",
 *          "desc": "We are a big music company among other things."
 *      },
 *      "address": {
 *          "address_id": 101,
 *          "name": "Home",
 *          "address1": "123 Fake St",
 *          "address2": "APT 100",
 *          "address3": null,
 *          "address4": null,
 *          "locality": "New York",
 *          "region_id": 51,
 *          "postal_code": "10001",
 *          "region": {
 *              "region_id": 51,
 *              "name": "New York",
 *              "code": "US-NY",
 *              "abbr": "NY",
 *              "category": "state",
 *              "country_id": 1,
 *              "country": {
 *                  "country_id": 1,
 *                  "name": "United States"
 *                  "iso_name": "UNITED STATES"
 *                  "iso_2": "US",
 *                  "iso_3": "USA",
 *                  "iso_numeric": "840"
 *              }
 *          }
 *      },
 *      "phone": {
 *          "phone_id": 101,
 *          "name": "Cell",
 *          "number": "+12125551234",
 *          "extension": null,
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
 * @api {PATCH} /users/me/settings [PATCH] /users/me/settings
 * @apiName PatchUsersMeSettings
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Updates settings data of the current user. All request body fields are optional. Any fields not specified, are ignored and unchanged.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Body) rcv_newsletter
 * @apiParam (Body) allow_read_receipt
 * @apiParam (Body) notify_method
 * @apiParam (Body) notify_msg_rcv
 * @apiParam (Body) notify_msg_read
 *
 * @apiSuccess (200) {Number}  user_id            ID of the user
 * @apiSuccess (200) {Boolean} rcv_newsletter     True if user wants to receive newsletter
 * @apiSuccess (200) {Boolean} allow_read_receipt True allows sender to see that message was read
 * @apiSuccess (200) {Number}  notify_method      Method used to send notifications (email, text message, etc)
 * @apiSuccess (200) {Boolean} notify_msg_rcv     True sends notification when receiving a message
 * @apiSuccess (200) {Boolean} notify_msg_read    True sends notification when a sent message is read
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "user_id": 100,
 *      "rcv_newsletter": true,
 *      "allow_read_receipt": true,
 *      "notify_method": 2,
 *      "notify_msg_rcv": true,
 *      "notify_msg_read": false
 *  }
 *
 * @apiUse BadRequestError
 * @apiUse UnauthorizedError
 * @apiUse InternalServerError
 */

// TODO: how to initially set the profile and settings data (default and return with successful creation)
/**
 * @api {POST} /users [POST] /users
 * @apiName PostUsers
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Create a new user.
 *
 * @apiParam (Body) username
 * @apiParam (Body) email
 * @apiParam (Body) phone
 * @apiParam (Body) given_name
 * @apiParam (Body) family_name
 * @apiParam (Body) profile_image Use multipart/form-data to upload image file
 *
 * @apiSuccess (201) {Number}  user_id        ID of the user
 * @apiSuccess (201) {String}  username       Unique username for login
 * @apiSuccess (201) {String}  email          Unique email for login and/or communications
 * @apiSuccess (201) {Boolean} email_verified True if email was verified by the user, false if not verified
 * @apiSuccess (201) {String}  phone          Unique phone number for login and/or communications
 * @apiSuccess (201) {Boolean} phone_verified True if phone was verified by the user, false if not verified
 * @apiSuccess (201) {String}  given_name     Given name (first name)
 * @apiSuccess (201) {String}  family_name    Family name (last name)
 * @apiSuccess (201) {String}  profile_image  URL string pointing to the profile image
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 201 OK
 *  {
 *      "user_id": 100,
 *      "username": "guyUser123",
 *      "email": "user@email.com",
 *      "email_verified": true,
 *      "phone": "+12125556789",
 *      "phone_verified": true,
 *      "given_name": "Guy",
 *      "family_name": "User",
 *      "profile_image": "img/104867096017346081747.jpg"
 *  }
 *
 * @apiUse BadRequestError
 * @apiUse InternalServerError
 */

/**
 * @api {POST} /users/me/password [POST] /users/me/password
 * @apiName PostUsersPassword
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Changes the password of the current user.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Body) password
 * @apiParam (Body) password_old
 *
 * @apiSuccess (204) NoContent
 *
 * @apiUse BadRequestError
 * @apiUse UnauthorizedError
 * @apiUse InternalServerError
 */

/**
 * @api {DELETE} /users/me [DELETE] /users/me
 * @apiName DeleteUsers
 * @apiGroup User
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Delete the current user.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiSuccess (204) NoContent
 *
 * @apiUse UnauthorizedError
 * @apiUse InternalServerError
 */
