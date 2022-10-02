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

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiLoginRequest {
    /**
     * 
     * @type string
     * @memberof AuthApilogin
     */
    xDeviceIdentifier?: string
    /**
     * 
     * @type string
     * @memberof AuthApilogin
     */
    xClientDeviceId?: string
    /**
     * Login Information
     * @type LoginRequest
     * @memberof AuthApilogin
     */
    loginRequest?: LoginRequest
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Login to Aura Frames
     * @param param the request object
     */
    public login(param: AuthApiLoginRequest = {}, options?: Configuration): Promise<LoginResponse> {
        return this.api.login(param.xDeviceIdentifier, param.xClientDeviceId, param.loginRequest,  options).toPromise();
    }

}

import { ObservableFramesApi } from "./ObservableAPI";
import { FramesApiRequestFactory, FramesApiResponseProcessor} from "../apis/FramesApi";

export interface FramesApiGetFramesRequest {
    /**
     * 
     * @type string
     * @memberof FramesApigetFrames
     */
    includeSharedAlbums?: string
}

export class ObjectFramesApi {
    private api: ObservableFramesApi

    public constructor(configuration: Configuration, requestFactory?: FramesApiRequestFactory, responseProcessor?: FramesApiResponseProcessor) {
        this.api = new ObservableFramesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Access to an Aura Frame
     * @param param the request object
     */
    public getFrames(param: FramesApiGetFramesRequest = {}, options?: Configuration): Promise<Frames> {
        return this.api.getFrames(param.includeSharedAlbums,  options).toPromise();
    }

}
