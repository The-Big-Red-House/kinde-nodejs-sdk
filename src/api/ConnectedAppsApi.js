/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import ApiResult from '../model/ApiResult';
import ConnectedAppsAccessToken from '../model/ConnectedAppsAccessToken';
import ConnectedAppsAuthUrl from '../model/ConnectedAppsAuthUrl';

/**
* ConnectedApps service.
* @module api/ConnectedAppsApi
* @version 1
*/
export default class ConnectedAppsApi {

    /**
    * Constructs a new ConnectedAppsApi. 
    * @alias module:api/ConnectedAppsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getConnectedAppAuthUrl operation.
     * @callback module:api/ConnectedAppsApi~getConnectedAppAuthUrlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConnectedAppsAuthUrl} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Connected App URL
     * Get a URL that authenticates and authorizes a user to a third-party connected app
     * @param {String} keyCodeRef The unique key code reference of the connected app to authenticate against.
     * @param {Number} userId The id of the user that needs to authenticate to the third-party connected app.
     * @param {module:api/ConnectedAppsApi~getConnectedAppAuthUrlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConnectedAppsAuthUrl}
     */
    getConnectedAppAuthUrl(keyCodeRef, userId, callback) {
      let postBody = null;
      // verify the required parameter 'keyCodeRef' is set
      if (keyCodeRef === undefined || keyCodeRef === null) {
        throw new Error("Missing the required parameter 'keyCodeRef' when calling getConnectedAppAuthUrl");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getConnectedAppAuthUrl");
      }

      let pathParams = {
      };
      let queryParams = {
        'key_code_ref': keyCodeRef,
        'user_id': userId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['kindeBearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ConnectedAppsAuthUrl;
      return this.apiClient.callApi(
        '/api/v1/connected_apps/auth_url', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getConnectedAppToken operation.
     * @callback module:api/ConnectedAppsApi~getConnectedAppTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ConnectedAppsAccessToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Connected App Token
     * Get an access token that can be used to call the third-party provider linked to the connected app
     * @param {String} sessionId The unique sesssion id reprensenting the login session of a user.
     * @param {module:api/ConnectedAppsApi~getConnectedAppTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ConnectedAppsAccessToken}
     */
    getConnectedAppToken(sessionId, callback) {
      let postBody = null;
      // verify the required parameter 'sessionId' is set
      if (sessionId === undefined || sessionId === null) {
        throw new Error("Missing the required parameter 'sessionId' when calling getConnectedAppToken");
      }

      let pathParams = {
      };
      let queryParams = {
        'session_id': sessionId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['kindeBearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ConnectedAppsAccessToken;
      return this.apiClient.callApi(
        '/api/v1/connected_apps/token', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the revokeConnectedAppToken operation.
     * @callback module:api/ConnectedAppsApi~revokeConnectedAppTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke Connected App Token
     * Revoke the tokens linked to the connected app session
     * @param {String} sessionId The unique sesssion id reprensenting the login session of a user.
     * @param {module:api/ConnectedAppsApi~revokeConnectedAppTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResult}
     */
    revokeConnectedAppToken(sessionId, callback) {
      let postBody = null;
      // verify the required parameter 'sessionId' is set
      if (sessionId === undefined || sessionId === null) {
        throw new Error("Missing the required parameter 'sessionId' when calling revokeConnectedAppToken");
      }

      let pathParams = {
      };
      let queryParams = {
        'session_id': sessionId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['kindeBearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ApiResult;
      return this.apiClient.callApi(
        '/api/v1/connected_apps/revoke', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}