import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { Asset } from '../models/Asset';
import { ContributorTokens } from '../models/ContributorTokens';
import { CurrentUser } from '../models/CurrentUser';
import { Features } from '../models/Features';
import { FeedItem } from '../models/FeedItem';
import { Frame } from '../models/Frame';
import { FrameEnvironment } from '../models/FrameEnvironment';
import { Frames } from '../models/Frames';
import { Impression } from '../models/Impression';
import { LoginRequest } from '../models/LoginRequest';
import { LoginRequestUser } from '../models/LoginRequestUser';
import { LoginResponse } from '../models/LoginResponse';
import { LoginResponseResult } from '../models/LoginResponseResult';
import { Metadata } from '../models/Metadata';
import { User } from '../models/User';
import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Login to Aura Frames
     * @param xDeviceIdentifier 
     * @param xClientDeviceId 
     * @param loginRequest Login Information
     */
    public login(xDeviceIdentifier?: string, xClientDeviceId?: string, loginRequest?: LoginRequest, _options?: Configuration): Promise<LoginResponse> {
        const result = this.api.login(xDeviceIdentifier, xClientDeviceId, loginRequest, _options);
        return result.toPromise();
    }


}



import { ObservableFramesApi } from './ObservableAPI';

import { FramesApiRequestFactory, FramesApiResponseProcessor} from "../apis/FramesApi";
export class PromiseFramesApi {
    private api: ObservableFramesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FramesApiRequestFactory,
        responseProcessor?: FramesApiResponseProcessor
    ) {
        this.api = new ObservableFramesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Access to an Aura Frame
     * @param includeSharedAlbums 
     */
    public getFrames(includeSharedAlbums?: string, _options?: Configuration): Promise<Frames> {
        const result = this.api.getFrames(includeSharedAlbums, _options);
        return result.toPromise();
    }


}



