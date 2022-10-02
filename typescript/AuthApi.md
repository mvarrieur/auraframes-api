# .AuthApi

All URIs are relative to *https://api.pushd.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](AuthApi.md#login) | **POST** /login.json | Login to Aura Frames


# **login**
> LoginResponse login()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiLoginRequest = {
  // string (optional)
  xDeviceIdentifier: "x-device-identifier_example",
  // string (optional)
  xClientDeviceId: "x-client-device-id_example",
  // LoginRequest | Login Information (optional)
  loginRequest: {
    appIdentifier: "appIdentifier_example",
    clientDeviceId: "clientDeviceId_example",
    identifierForVendor: "identifierForVendor_example",
    locale: "locale_example",
    user: {
      email: "email_example",
      password: "password_example",
    },
  },
};

apiInstance.login(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequest** | **LoginRequest**| Login Information |
 **xDeviceIdentifier** | [**string**] |  | (optional) defaults to undefined
 **xClientDeviceId** | [**string**] |  | (optional) defaults to undefined


### Return type

**LoginResponse**

### Authorization

[TokenAuth](README.md#TokenAuth), [UserId](README.md#UserId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


