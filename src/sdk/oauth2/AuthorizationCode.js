import { randomString } from "../utils/Utils";

export default class AuthorizationCode {
  /**
   * Function to get the authorization URL and state to save in req.session
   *
   * @param {Object} client - Object that holds client information
   * @param {Object} options - Additional options for the authorization process
   * @property {string} options.start_page - URL of the page that will initiate the authorization
   * @property {string} options.state - Optional parameter used to pass a value to the authorization server
   * @property {bool} options.is_create_org - Flag indicating if the user is creating a new organization
   * @property {string} options.org_code - Organization code
   * @property {string} options.org_name - Organization name
   *
   * @returns {Object} Object containing the authorization URL and state
   * @property {string} state - The value of the state parameter
   * @property {string} url - The authorization URL to redirect the user to
   */
  generateAuthorizationURL(client, options) {
    const {
      start_page,
      state = randomString(),
      is_create_org = false,
      org_code,
      org_name
    } = options;

    const searchParams = {
      client_id: client.clientId,
      response_type: 'code',
      scope: client.scope,
      state,
      start_page,
      redirect_uri: client.redirectUri,
      ...(!!client.audience && { audience : client.audience }),
      ...(!!is_create_org && { is_create_org }),
      ...(!!org_code && { org_code }),
      ...(!!org_name && { org_name })
    }

    return {
      state,
      url: `${client.authorizationEndpoint}?${new URLSearchParams(searchParams).toString()}`,
    };
  }

  /**
   * Function to get token from authorization code
   * 
   * @param {Object} client - KindeClient instance
   * @param {string} code - Authorization code obtained from authorization server
   * @param {string} scope - The scopes you want to request
   *
   * @returns {Object} JSON object with token information like access_token, refresh_token, expires_in etc.
   */

  async getToken(client, code, scope = 'openid profile email offline') {
    const searchParams = {
      grant_type: 'authorization_code',
      client_id: client.clientId,
      client_secret: client.clientSecret,
      scope,
      code,
      redirect_uri: client.redirectUri,
    };

    const res = await fetch(client.tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(searchParams),
    });
    const token = await res.json();
    return token;
  }
}