//******************************************************************************
// Copyright (c) 2015-2016 Clibsy, LLC -- All rights reserved
//
// Unauthorized copying of this file, via any medium, is strictly prohibited.
// Copying or distributing requires the expressed permission of Clibsy, LLC.
//
// PROJECT: clibsy.com
//
// FILE: company.js
//
// DESCRIPTION: Definition of the company API endpoints.
//
// AUTHOR: Joe Kramer joe@clibsy.com 2015/01/12
//******************************************************************************
'use strict';

/**
 * @apiDefine Company Company
 *
 * API endpoints that interact with company resources.
 */

/**
 * @api {GET} /companies [GET] /companies
 * @apiName GetCompanies
 * @apiGroup Company
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves an array of all companies.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Query) p (optional) Set to get the given page number (1..n) based on the limit per page; otherwise, the default is page 1
 * @apiParam (Query) l (optional) Set to determine the limit of companies per page; otherwise, the default is a limit of 10
 *
 * @apiSuccess (200) {Array} companies Array of companies
 *
 * @apiUse UnauthorizedError
 * @apiUse InternalServerError
 */

/**
 * @api {GET} /companies/:id [GET] /companies/:id
 * @apiName GetCompaniesId
 * @apiGroup Company
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Retrieves data of company (:id).
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiSuccess (200) {Number} company_id ID of the company
 * @apiSuccess (200) {String} name       Name of the company
 * @apiSuccess (200) {String} logo_image URL string pointing to the company logo image
 * @apiSuccess (200) {String} email      Email address of company
 * @apiSuccess (200) {String} website    Website URL of the company
 * @apiSuccess (200) {String} desc       Description of the company
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "company_id": 101,
 *      "name": "Universal",
 *      "logo_image": "img/318132138843432138684.jpg",
 *      "email": "support@universal.com",
 *      "website": "http://www.universal.com",
 *      "desc": "We are a big music company among other things."
 *  }
 *
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */

/**
 * @api {PATCH} /companies/:id [PATCH] /companies/:id
 * @apiName PatchCompaniesId
 * @apiGroup Company
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Updates data of company (:id). All request body fields are optional. Any fields not specified, are ignored and unchanged.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Param) id ID of the company
 *
 * @apiParam (Body) {String} name
 * @apiParam (Body) {String} logo_image Use multipart/form-data to upload image file
 * @apiParam (Body) {String} email
 * @apiParam (Body) {String} website
 * @apiParam (Body) {String} desc
 *
 * @apiSuccess (200) {Number} company_id ID of the company
 * @apiSuccess (200) {String} name       Name of the company
 * @apiSuccess (200) {String} logo_image URL string pointing to the company logo image
 * @apiSuccess (200) {String} email      Email address of company
 * @apiSuccess (200) {String} website    Website URL of the company
 * @apiSuccess (200) {String} desc       Description of the company
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      "company_id": 101,
 *      "name": "Universal",
 *      "logo_image": "img/318132138843432138684.jpg",
 *      "email": "support@universal.com",
 *      "website": "http://www.universal.com",
 *      "desc": "We are a big music company among other things."
 *  }
 *
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */

/**
 * @api {POST} /companies [POST] /companies
 * @apiName PostCompanies
 * @apiGroup Company
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Create a new company.
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Body) {String} name
 * @apiParam (Body) {String} logo_image Use multipart/form-data to upload image file
 * @apiParam (Body) {String} email
 * @apiParam (Body) {String} website
 * @apiParam (Body) {String} desc
 *
 * @apiSuccess (201) {Number} company_id ID of the company
 * @apiSuccess (201) {String} name       Name of the company
 * @apiSuccess (201) {String} logo_image URL string pointing to the company logo image
 * @apiSuccess (201) {String} email      Email address of company
 * @apiSuccess (201) {String} website    Website URL of the company
 * @apiSuccess (201) {String} desc       Description of the company
 *
 * @apiSuccessExample {json} Success-Response:
 *  HTTP/1.1 201 OK
 *  {
 *      "company_id": 101,
 *      "name": "Universal",
 *      "logo_image": "img/318132138843432138684.jpg",
 *      "email": "support@universal.com",
 *      "website": "http://www.universal.com",
 *      "desc": "We are a big music company among other things."
 *  }
 *
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */

/**
 * @apiIgnore
 * @api {DELETE} /companies/:id [DELETE] /companies/:id
 * @apiName DeleteCompaniesId
 * @apiGroup Company
 *
 * @apiVersion 1.0.0
 *
 * @apiPermission none
 *
 * @apiDescription Delete the company (:id).
 *
 * @apiHeader {String} authorization Authorization token
 *
 * @apiParam (Param) id ID of the company
 *
 * @apiSuccess (204) NoContent
 *
 * @apiUse UnauthorizedError
 * @apiUse NotFoundError
 * @apiUse InternalServerError
 */
