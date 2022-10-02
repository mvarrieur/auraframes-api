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

import { Bool } from '../models/Bool';
import { User } from '../models/User';
import { HttpFile } from '../http/http';

export class Asset {
    'id'?: string;
    'userId'?: string;
    'thumbnailUrl'?: string;
    'portraitUrl'?: string;
    'landscapeUrl'?: string;
    'landscape1610Url'?: string;
    'portrait45Url'?: string;
    'videoUrl'?: string;
    'landscapeRect'?: string;
    'portraitRect'?: string;
    'userLandscapeRect'?: string;
    'userPortraitRect'?: string;
    'autoLandscape1610Rect'?: string;
    'userLandscape1610Rect'?: string;
    'autoPortrait45Rect'?: string;
    'userPortrait45Rect'?: string;
    'exifOrientation'?: string;
    'handledAt'?: string;
    'uploadedAt'?: string;
    'goodResolution'?: Bool;
    'sourceId'?: string;
    'duplicateOfId'?: string;
    'rotationCw'?: string;
    'locationName'?: string;
    'md5Hash'?: string;
    'isSubscription'?: boolean;
    'glacieredAt'?: string;
    'unglacierable'?: Bool;
    'duration'?: string;
    'livePhotoOff'?: string;
    'localIdentifier'?: string;
    'createdAtOnClient'?: string;
    'selected'?: Bool;
    'fileName'?: string;
    'rawFileName'?: string;
    'videoFileName'?: string;
    'width'?: string;
    'height'?: string;
    'takenAt'?: string;
    'horizontalAccuracy'?: string;
    'favorite'?: Bool;
    'orientation'?: string;
    'hdr'?: Bool;
    'panorama'?: Bool;
    'isLive'?: string;
    'burstId'?: string;
    'burstSelectionTypes'?: string;
    'representsBurst'?: string;
    'dataUti'?: string;
    'originalFileName'?: string;
    'uploadPriority'?: string;
    'iosMediaSubtypes'?: string;
    'takenAtUserOverrideAt'?: string;
    'durationUnclipped'?: string;
    'videoClipStart'?: string;
    'videoClipExcludesAudio'?: string;
    'videoClippedByUserAt'?: string;
    'location'?: string;
    'user'?: User;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "userId",
            "baseName": "user_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "thumbnailUrl",
            "baseName": "thumbnail_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "portraitUrl",
            "baseName": "portrait_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "landscapeUrl",
            "baseName": "landscape_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "landscape1610Url",
            "baseName": "landscape_16_10_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "portrait45Url",
            "baseName": "portrait_4_5_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "videoUrl",
            "baseName": "video_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "landscapeRect",
            "baseName": "landscape_rect",
            "type": "string",
            "format": ""
        },
        {
            "name": "portraitRect",
            "baseName": "portrait_rect",
            "type": "string",
            "format": ""
        },
        {
            "name": "userLandscapeRect",
            "baseName": "user_landscape_rect",
            "type": "string",
            "format": ""
        },
        {
            "name": "userPortraitRect",
            "baseName": "user_portrait_rect",
            "type": "string",
            "format": ""
        },
        {
            "name": "autoLandscape1610Rect",
            "baseName": "auto_landscape_16_10_rect",
            "type": "string",
            "format": ""
        },
        {
            "name": "userLandscape1610Rect",
            "baseName": "user_landscape_16_10_rect",
            "type": "string",
            "format": ""
        },
        {
            "name": "autoPortrait45Rect",
            "baseName": "auto_portrait_4_5_rect",
            "type": "string",
            "format": ""
        },
        {
            "name": "userPortrait45Rect",
            "baseName": "user_portrait_4_5_rect",
            "type": "string",
            "format": ""
        },
        {
            "name": "exifOrientation",
            "baseName": "exif_orientation",
            "type": "string",
            "format": ""
        },
        {
            "name": "handledAt",
            "baseName": "handled_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "uploadedAt",
            "baseName": "uploaded_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "goodResolution",
            "baseName": "good_resolution",
            "type": "Bool",
            "format": ""
        },
        {
            "name": "sourceId",
            "baseName": "source_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "duplicateOfId",
            "baseName": "duplicate_of_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "rotationCw",
            "baseName": "rotation_cw",
            "type": "string",
            "format": ""
        },
        {
            "name": "locationName",
            "baseName": "location_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "md5Hash",
            "baseName": "md5_hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "isSubscription",
            "baseName": "is_subscription",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "glacieredAt",
            "baseName": "glaciered_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "unglacierable",
            "baseName": "unglacierable",
            "type": "Bool",
            "format": ""
        },
        {
            "name": "duration",
            "baseName": "duration",
            "type": "string",
            "format": ""
        },
        {
            "name": "livePhotoOff",
            "baseName": "live_photo_off",
            "type": "string",
            "format": ""
        },
        {
            "name": "localIdentifier",
            "baseName": "local_identifier",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAtOnClient",
            "baseName": "created_at_on_client",
            "type": "string",
            "format": ""
        },
        {
            "name": "selected",
            "baseName": "selected",
            "type": "Bool",
            "format": ""
        },
        {
            "name": "fileName",
            "baseName": "file_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "rawFileName",
            "baseName": "raw_file_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "videoFileName",
            "baseName": "video_file_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "string",
            "format": ""
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "string",
            "format": ""
        },
        {
            "name": "takenAt",
            "baseName": "taken_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "horizontalAccuracy",
            "baseName": "horizontal_accuracy",
            "type": "string",
            "format": ""
        },
        {
            "name": "favorite",
            "baseName": "favorite",
            "type": "Bool",
            "format": ""
        },
        {
            "name": "orientation",
            "baseName": "orientation",
            "type": "string",
            "format": ""
        },
        {
            "name": "hdr",
            "baseName": "hdr",
            "type": "Bool",
            "format": ""
        },
        {
            "name": "panorama",
            "baseName": "panorama",
            "type": "Bool",
            "format": ""
        },
        {
            "name": "isLive",
            "baseName": "is_live",
            "type": "string",
            "format": ""
        },
        {
            "name": "burstId",
            "baseName": "burst_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "burstSelectionTypes",
            "baseName": "burst_selection_types",
            "type": "string",
            "format": ""
        },
        {
            "name": "representsBurst",
            "baseName": "represents_burst",
            "type": "string",
            "format": ""
        },
        {
            "name": "dataUti",
            "baseName": "data_uti",
            "type": "string",
            "format": ""
        },
        {
            "name": "originalFileName",
            "baseName": "original_file_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "uploadPriority",
            "baseName": "upload_priority",
            "type": "string",
            "format": ""
        },
        {
            "name": "iosMediaSubtypes",
            "baseName": "ios_media_subtypes",
            "type": "string",
            "format": ""
        },
        {
            "name": "takenAtUserOverrideAt",
            "baseName": "taken_at_user_override_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "durationUnclipped",
            "baseName": "duration_unclipped",
            "type": "string",
            "format": ""
        },
        {
            "name": "videoClipStart",
            "baseName": "video_clip_start",
            "type": "string",
            "format": ""
        },
        {
            "name": "videoClipExcludesAudio",
            "baseName": "video_clip_excludes_audio",
            "type": "string",
            "format": ""
        },
        {
            "name": "videoClippedByUserAt",
            "baseName": "video_clipped_by_user_at",
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
            "name": "user",
            "baseName": "user",
            "type": "User",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Asset.attributeTypeMap;
    }

    public constructor() {
    }
}

