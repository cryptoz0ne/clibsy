//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: message.js
//
// DESCRIPTION: Definition of the message API endpoints.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/11/10
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
'use strict';

/**
 * @apiDefine Message Message
 *
 * API endpoints that interact with message resources.
 */

/**
 * @api {GET} /messages [GET] /messages
 * @apiName GetMessages
 * @apiGroup Message
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves an array of all messages for the current user.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Query) p (optional) Set to get the given page number (1..n) based on the limit per page; otherwise, the default is page 1
 * @apiParam (Query) l (optional) Set to determine the limit of messages per page; otherwise, the default is a limit of 10
 *
 * @apiSuccess (200) {Array} messages Array of messages
 *
 * @apiUse UnauthorizedError
 * @apiUse InternalServerError
 */

/**
 * @api {GET} /messages/:id [GET] /messages/:id
 * @apiName GetMessagesId
 * @apiGroup Message
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves data of message (:id) for current user.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Query) u (optional) Set to 1 to include user objects; otherwise, the objects are not included
 *
 * @apiSuccess (200) {Number}  message_id ID of the message
 * @apiSuccess (200) {String}  subject    Subject of the message
 * @apiSuccess (200) {String}  body       Body of the message
 * @apiSuccess (200) {Array}   users      Array of users using the following "user" object layout
 * @apiSuccess (200) {Object}  users.messageUser
 * @apiSuccess (200) {Boolean} users.messageUser.is_sender  True if this user is the sender
 * @apiSuccess (200) {Boolean} users.messageUser.is_edited  True if sender edited the message
 * @apiSuccess (200) {Boolean} users.messageUser.is_flagged True if this user flagged the message
 * @apiSuccess (200) {Boolean} users.messageUser.is_read    True if this user read the message
 * @apiSuccess (200) {Number}  users.messageUser.message_id ID of the message
 * @apiSuccess (200) {Number}  users.messageUser.user_id    ID of the user
 * @apiSuccess (200) {Object}  users.messageUser.user       Full user object (optional with "u" parameter)
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "message_id": 101,
 *      "subject": "The New Message Service",
 *      "body": "This is a really long string that can contain line breaks.\nIn the future, it may support rich text.\nThanks.\nJoe",
 *      "users": [
 *          {
 *              "is_sender": false,
 *              "is_edited": false,
 *              "is_flagged": true,
 *              "is_read": true,
 *              "user_id": 100,
 *              "user" {
 *                  "user_id": 100,
 *                  "username": "guyUser123",
 *                  ...
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
 * @api {PATCH} /messages/:id [PATCH] /messages/:id
 * @apiName PatchMessagesId
 * @apiGroup Message
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Updates data of message (:id). All request body fields are optional. Any fields not specified, are ignored and unchanged.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Param) id ID of the message
 *
 * @apiParam (Body) {String}  subject
 * @apiParam (Body) {String}  body
 * @apiParam (Body) {Array}   tos[]     TODO: allow single entry as "Number"
 * @apiParam (Body) {Boolean} flagged
 * @apiParam (Body) {Boolean} read
 *
 * @apiSuccess (200) {Number}  message_id ID of the message
 * @apiSuccess (200) {String}  subject    Subject of the message
 * @apiSuccess (200) {String}  body       Body of the message
 * @apiSuccess (200) {Array}   users      Array of users using the following "user" object layout
 * @apiSuccess (200) {Object}  users.messageUser
 * @apiSuccess (200) {Boolean} users.messageUser.is_sender  True if this user is the sender
 * @apiSuccess (200) {Boolean} users.messageUser.is_edited  True if sender edited the message
 * @apiSuccess (200) {Boolean} users.messageUser.is_flagged True if this user flagged the message
 * @apiSuccess (200) {Boolean} users.messageUser.is_read    True if this user read the message
 * @apiSuccess (200) {Number}  users.messageUser.message_id ID of the message
 * @apiSuccess (200) {Number}  users.messageUser.user_id    ID of the user
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "message_id": 101,
 *      "subject": "The New Message Service",
 *      "body": "This is a really long string that can contain line breaks.\nIn the future, it may support rich text.\nThanks.\nJoe",
 *      "users": [
 *          {
 *              "is_sender": false,
 *              "is_edited": false,
 *              "is_flagged": true,
 *              "is_read": true,
 *              "user_id": 100
 *          },
 *          ...
 *      ]
 *  }
 *
 * @apiUse BadRequestError
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */

/**
 * @api {POST} /messages [POST] /messages
 * @apiName PostMessages
 * @apiGroup Message
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Create a new message.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Body) {String} subject
 * @apiParam (Body) {String} body
 * @apiParam (Body) {Array}  tos[]     TODO: allow single entry as "Number"
 *
 * @apiSuccess (201) {Number}  message_id ID of the message
 * @apiSuccess (201) {String}  subject    Subject of the message
 * @apiSuccess (201) {String}  body       Body of the message
 * @apiSuccess (201) {Array}   users      Array of users using the following "user" object layout
 * @apiSuccess (201) {Object}  users.messageUser
 * @apiSuccess (201) {Boolean} users.messageUser.is_sender  True if this user is the sender
 * @apiSuccess (200) {Boolean} users.messageUser.is_edited  True if sender edited the message
 * @apiSuccess (201) {Boolean} users.messageUser.is_flagged True if this user flagged the message
 * @apiSuccess (201) {Boolean} users.messageUser.is_read    True if this user read the message
 * @apiSuccess (200) {Number}  users.messageUser.message_id ID of the message
 * @apiSuccess (200) {Number}  users.messageUser.user_id    ID of the user
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 201 OK
 *  {
 *      "message_id": 101,
 *      "subject": "The New Message Service",
 *      "body": "This is a really long string that can contain line breaks.\nIn the future, it may support rich text.\nThanks.\nJoe",
 *      "users": [
 *          {
 *              "is_sender": false,
 *              "is_edited": false,
 *              "is_flagged": true,
 *              "is_read": true,
 *              "user_id": 100
 *          },
 *          ...
 *      ]
 *  }
 *
 * @apiUse BadRequestError
 * @apiUse UnauthorizedError
 * @apiUse InternalServerError
 */

/**
 * @apiIgnore
 * @api {DELETE} /messages/:id [DELETE] /messages/:id
 * @apiName DeleteMessagesId
 * @apiGroup Message
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Delete the message (:id).
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Param) id ID of the message
 *
 * @apiSuccess (204) NoContent
 *
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */
