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

import { HttpFile } from '../http/http';

export class Metadata {
    'attribution'?: string;
    'date'?: string;
    'location'?: string;
    'pairReasons'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attribution",
            "baseName": "attribution",
            "type": "string",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string",
            "format": ""
        },
        {
            "name": "pairReasons",
            "baseName": "pair_reasons",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Metadata.attributeTypeMap;
    }

    public constructor() {
    }
}

