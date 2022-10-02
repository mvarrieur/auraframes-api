# .FramesApi

All URIs are relative to *https://api.pushd.com/v5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFrames**](FramesApi.md#getFrames) | **GET** /frames.json | Access to an Aura Frame


# **getFrames**
> Frames getFrames()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FramesApi(configuration);

let body:.FramesApiGetFramesRequest = {
  // string (optional)
  includeSharedAlbums: "include_shared_albums_example",
};

apiInstance.getFrames(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeSharedAlbums** | [**string**] |  | (optional) defaults to undefined


### Return type

**Frames**

### Authorization

[TokenAuth](README.md#TokenAuth), [UserId](README.md#UserId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


