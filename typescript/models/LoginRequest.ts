/**
 * Aura Frame API - Unofficial
 * Reverse Engineered API for Aura Frames
 *
 * OpenAPI spec version: 0.0.1
 * Contact: dave@mudsite.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LoginRequestUser } from '../models/LoginRequestUser';
import { HttpFile } from '../http/http';

export class LoginRequest {
    'appIdentifier': string;
    'clientDeviceId': string;
    'identifierForVendor': string;
    'locale': string;
    'user': LoginRequestUser;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appIdentifier",
            "baseName": "app_identifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientDeviceId",
            "baseName": "client_device_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "identifierForVendor",
            "baseName": "identifier_for_vendor",
            "type": "string",
            "format": ""
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string",
            "format": ""
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "LoginRequestUser",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LoginRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

