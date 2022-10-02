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

import { Asset } from '../models/Asset';
import { HttpFile } from '../http/http';

export class Impression {
    'lastViewedOrCreatedAt'?: string;
    'viewCount'?: string;
    'gestureDirection'?: string;
    'createdAt'?: string;
    'livePhotoOnTransition'?: string;
    'viewedAt'?: string;
    'id'?: string;
    'lastViewedAt'?: string;
    'lastShownWithAssetId'?: string;
    'frameId'?: string;
    'assetId'?: string;
    'asset'?: Asset;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "lastViewedOrCreatedAt",
            "baseName": "last_viewed_or_created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "viewCount",
            "baseName": "view_count",
            "type": "string",
            "format": ""
        },
        {
            "name": "gestureDirection",
            "baseName": "gesture_direction",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "livePhotoOnTransition",
            "baseName": "live_photo_on_transition",
            "type": "string",
            "format": ""
        },
        {
            "name": "viewedAt",
            "baseName": "viewed_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastViewedAt",
            "baseName": "last_viewed_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastShownWithAssetId",
            "baseName": "last_shown_with_asset_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "frameId",
            "baseName": "frame_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "assetId",
            "baseName": "asset_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "asset",
            "baseName": "asset",
            "type": "Asset",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Impression.attributeTypeMap;
    }

    public constructor() {
    }
}
