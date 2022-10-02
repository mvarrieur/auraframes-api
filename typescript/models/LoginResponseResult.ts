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

import { CurrentUser } from '../models/CurrentUser';
import { HttpFile } from '../http/http';

export class LoginResponseResult {
    'currentUser'?: CurrentUser;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currentUser",
            "baseName": "current_user",
            "type": "CurrentUser",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LoginResponseResult.attributeTypeMap;
    }

    public constructor() {
    }
}
