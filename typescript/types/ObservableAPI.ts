import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class ObservableAuthApi {
    private requestFactory: AuthApiRequestFactory;
    private responseProcessor: AuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApiResponseProcessor();
    }

    /**
     * Login to Aura Frames
     * @param xDeviceIdentifier 
     * @param xClientDeviceId 
     * @param loginRequest Login Information
     */
    public login(xDeviceIdentifier?: string, xClientDeviceId?: string, loginRequest?: LoginRequest, _options?: Configuration): Observable<LoginResponse> {
        const requestContextPromise = this.requestFactory.login(xDeviceIdentifier, xClientDeviceId, loginRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.login(rsp)));
            }));
    }

}

import { FramesApiRequestFactory, FramesApiResponseProcessor} from "../apis/FramesApi";
export class ObservableFramesApi {
    private requestFactory: FramesApiRequestFactory;
    private responseProcessor: FramesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FramesApiRequestFactory,
        responseProcessor?: FramesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FramesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FramesApiResponseProcessor();
    }

    /**
     * Access to an Aura Frame
     * @param includeSharedAlbums 
     */
    public getFrames(includeSharedAlbums?: string, _options?: Configuration): Observable<Frames> {
        const requestContextPromise = this.requestFactory.getFrames(includeSharedAlbums, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFrames(rsp)));
            }));
    }

}
