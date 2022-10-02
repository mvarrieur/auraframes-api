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

import { Features } from '../models/Features';
import { HttpFile } from '../http/http';

export class CurrentUser {
    'adminAccount'?: string;
    'attributionId'?: string;
    'attributionString'?: string;
    'authToken'?: string;
    'autoUploadOff'?: boolean;
    'avatarFileName'?: string;
    'billingInfo'?: string;
    'charitySubscriptionsLaunched'?: boolean;
    'confirmedEmail'?: string;
    'createdAt'?: string;
    'currentSourceId'?: string;
    'eligibleForAppReviewPrompt'?: boolean;
    'email'?: string;
    'features'?: Array<Features>;
    'googlePhotosDisabled'?: string;
    'hasAccessToNewGooglePhotos'?: boolean;
    'hasFrame'?: boolean;
    'id'?: string;
    'latestAppVersion'?: string;
    'livePhotosLaunched'?: boolean;
    'locale'?: string;
    'name'?: string;
    'printSubscriptionsLaunched'?: boolean;
    'recurlyAccountCode'?: string;
    'shortId'?: string;
    'showPushPrompt'?: boolean;
    'smartAlbumsOff'?: boolean;
    'smartSuggestionsOff'?: boolean;
    'subscriptionsLaunched'?: boolean;
    'testAccount'?: string;
    'thanksLaunched'?: boolean;
    'tooltipAddPhotosSeen'?: boolean;
    'tooltipAddedPhotosSeen'?: boolean;
    'tooltipGesturesSeen'?: boolean;
    'tooltipInboxSeen'?: boolean;
    'tooltipManageFramesSeen'?: boolean;
    'tooltipSettingsSeen'?: boolean;
    'unconfirmedEmail'?: string;
    'updatedAt'?: string;
    'verboseLoggingEnabled'?: boolean;
    'warnSmartAlbumsDeprecated'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "adminAccount",
            "baseName": "admin_account",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributionId",
            "baseName": "attribution_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "attributionString",
            "baseName": "attribution_string",
            "type": "string",
            "format": ""
        },
        {
            "name": "authToken",
            "baseName": "auth_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "autoUploadOff",
            "baseName": "auto_upload_off",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "avatarFileName",
            "baseName": "avatar_file_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingInfo",
            "baseName": "billing_info",
            "type": "string",
            "format": ""
        },
        {
            "name": "charitySubscriptionsLaunched",
            "baseName": "charity_subscriptions_launched",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "confirmedEmail",
            "baseName": "confirmed_email",
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
            "name": "currentSourceId",
            "baseName": "current_source_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "eligibleForAppReviewPrompt",
            "baseName": "eligible_for_app_review_prompt",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "Array<Features>",
            "format": ""
        },
        {
            "name": "googlePhotosDisabled",
            "baseName": "google_photos_disabled",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasAccessToNewGooglePhotos",
            "baseName": "has_access_to_new_google_photos",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hasFrame",
            "baseName": "has_frame",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "latestAppVersion",
            "baseName": "latest_app_version",
            "type": "string",
            "format": ""
        },
        {
            "name": "livePhotosLaunched",
            "baseName": "live_photos_launched",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "printSubscriptionsLaunched",
            "baseName": "print_subscriptions_launched",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "recurlyAccountCode",
            "baseName": "recurly_account_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortId",
            "baseName": "short_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "showPushPrompt",
            "baseName": "show_push_prompt",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "smartAlbumsOff",
            "baseName": "smart_albums_off",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "smartSuggestionsOff",
            "baseName": "smart_suggestions_off",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "subscriptionsLaunched",
            "baseName": "subscriptions_launched",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "testAccount",
            "baseName": "test_account",
            "type": "string",
            "format": ""
        },
        {
            "name": "thanksLaunched",
            "baseName": "thanks_launched",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tooltipAddPhotosSeen",
            "baseName": "tooltip_add_photos_seen",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tooltipAddedPhotosSeen",
            "baseName": "tooltip_added_photos_seen",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tooltipGesturesSeen",
            "baseName": "tooltip_gestures_seen",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tooltipInboxSeen",
            "baseName": "tooltip_inbox_seen",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tooltipManageFramesSeen",
            "baseName": "tooltip_manage_frames_seen",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tooltipSettingsSeen",
            "baseName": "tooltip_settings_seen",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "unconfirmedEmail",
            "baseName": "unconfirmed_email",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "verboseLoggingEnabled",
            "baseName": "verbose_logging_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "warnSmartAlbumsDeprecated",
            "baseName": "warn_smart_albums_deprecated",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CurrentUser.attributeTypeMap;
    }

    public constructor() {
    }
}

