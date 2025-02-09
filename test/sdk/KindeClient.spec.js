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
import sinon from 'sinon';

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KindeManagementApi);
  }
}(this, function(expect, KindeManagementApi) {
  'use strict';

  var instance;
  const options = {
    domain: "https://example.com",
    clientId: "test_client_id",
    clientSecret: "test_client_secret",
    redirectUri: "https://example.com/callback",
    logoutRedirectUri: "https://example.com/logout",
    grantType: 'authorization_code',
  };

  beforeEach(function() {
    instance = new KindeManagementApi.KindeClient(options);
  });

  describe('KindeClient', function() {
    describe('constructor', function() {
      it('should create an instance of KindeClient', function() {
        expect(instance.domain).to.equal(options.domain);
        expect(instance.clientId).to.equal(options.clientId);
        expect(instance.clientSecret).to.equal(options.clientSecret);
        expect(instance.redirectUri).to.equal(options.redirectUri);
        expect(instance.logoutRedirectUri).to.equal(options.logoutRedirectUri);
        expect(instance.grantType).to.equal(options.grantType);
      });
    });

    describe('login', function() {
      let req, res, next, sandbox;
      beforeEach(() => {
        req = {
          headers: {
            cookie: '',
          },
          query: {},
        };
        res = {
          cookie: sinon.spy(),
          redirect: sinon.spy(),
        };
        next = sinon.spy();
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call login successfully', async () => {
        req.query = { state: 'random_state', org_code: 'org-code' };
        KindeManagementApi.SessionStore.setData('session-id', {});
        req.headers.cookie = 'sessionId=session-id';
        sandbox.stub(KindeManagementApi.AuthorizationCode.prototype, 'generateAuthorizationURL').returns('https://example.com/oauth2/auth?response_type=code&client_id=client_id&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=openid%20profile%20email%20offline&state=random_state&org_code=org_code&start_page=login');
        await instance.login()(req, res, next);
        expect(res.cookie.calledOnce).to.be(true);
        expect(res.redirect.calledOnce).to.be(true);
        expect(res.redirect.getCall(0).args[0]).to.be(`https://example.com/oauth2/auth?response_type=code&client_id=client_id&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=openid%20profile%20email%20offline&state=random_state&org_code=org_code&start_page=login`);
        expect(KindeManagementApi.SessionStore.getDataByKey('session-id', 'kindeOauthState')).to.be('random_state');
      });

      it('should call login throw an error', async () => {
        req.query = { state: 'random_state', org_code: 'org-code' };
        await instance.login()(req, {}, next);
        expect(next.calledOnce).to.be(true);
        expect(next.firstCall.args[0]).to.be.an(Error);
      });
    });

    describe('register', function() {
      let req, res, next, sandbox;
      beforeEach(() => {
        req = {
          headers: {
            cookie: '',
          },
          query: {},
        };
        res = {
          cookie: sinon.spy(),
          redirect: sinon.spy(),
        };
        next = sinon.spy();
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call register successfully', async () => {
        req.query = { state: 'random_state', org_code: 'org-code' };
        KindeManagementApi.SessionStore.setData('session-id', {});
        req.headers.cookie = 'sessionId=session-id';
        sandbox.stub(KindeManagementApi.AuthorizationCode.prototype, 'generateAuthorizationURL').returns('https://example.com/oauth2/auth?response_type=code&client_id=client_id&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=openid%20profile%20email%20offline&state=random_state&org_code=org_code&start_page=registration');
        await instance.register()(req, res, next);
        expect(res.cookie.calledOnce).to.be(true);
        expect(res.redirect.calledOnce).to.be(true);
        expect(res.redirect.getCall(0).args[0]).to.be(`https://example.com/oauth2/auth?response_type=code&client_id=client_id&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=openid%20profile%20email%20offline&state=random_state&org_code=org_code&start_page=registration`);
        expect(KindeManagementApi.SessionStore.getDataByKey('session-id', 'kindeOauthState')).to.be('random_state');
      });

      it('should call register throw an error', async () => {
        await instance.register()(req, {}, next);
        expect(next.calledOnce).to.be(true);
        expect(next.firstCall.args[0]).to.be.an(Error);
      });
    });

    describe('callback', function() {
      let req, res, next, sandbox;
      const payloadAccessToken = {
        aud: [],
        azp: '09b4aec1c8b14c11a83ed94d458d605f',
        exp: Date.now(),
        feature_flags: {
          competitions_limit: { t: 'i', v: 5 },
          is_dark_mode: { t: 'b', v: true },
          pink: { t: 's', v: 'pink' },
          test: { t: 'b', v: false },
          test1: { t: 'i', v: 5 },
          theme: { t: 's', v: 'pink1' },
        },
        iat: 1681978619,
        iss: 'https://nguyenstsdev-dev.au.kinde.com',
        jti: '2accb1dc-b9da-4f63-8b0f-a3dfae721f40',
        org_code: 'org_7052552de68',
        permissions: [ 'update:todos', 'create:todos' ],
        scp: [ 'openid', 'profile', 'email', 'offline' ],
        sub: 'kp:0094bbe7230c42f3be027b52e4e179a5',
      };
      const base64Payload = Buffer.from(JSON.stringify(payloadAccessToken)).toString('base64');
      const validToken = `header.${base64Payload}.signature`;
      beforeEach(() => {
        req = {
          headers: {
            cookie: '',
          },
          query: {},
        };
        res = {
          cookie: sinon.spy(),
          redirect: sinon.spy(),
        };
        next = sinon.spy();
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call callback successfully', async () => {
        req.query = { state: 'random_state', code: 'code' };
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeOauthState: 'random_state'
        });
        req.headers.cookie = 'sessionId=session-id';
        const getTokenStub = sinon.stub(KindeManagementApi.AuthorizationCode.prototype, 'getToken').resolves({
          access_token: validToken,
          id_token: validToken,
          expires_in: 86399,
          refresh_token: 'my.refresh-token.example',
        });
        const saveTokenStub = sinon.stub(instance, 'saveToken');
        await instance.callback()(req, res, next);
        expect(next.calledOnce).to.be(true);
        expect(getTokenStub.calledOnce).to.be(true);
        expect(saveTokenStub.calledOnce).to.be(true);
        getTokenStub.restore();
        saveTokenStub.restore();
      });

      it('should call callback throws an error', async () => {
        await instance.callback()(req, {}, next);
        expect(next.calledOnce).to.be(true);
        expect(next.firstCall.args[0]).to.be.an(Error);
      });
    });

    describe('createOrg', function() {
      let req, res, next, sandbox;
      beforeEach(() => {
        req = {
          headers: {
            cookie: '',
          },
          query: {},
        };
        res = {
          cookie: sinon.spy(),
          redirect: sinon.spy(),
        };
        next = sinon.spy();
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call createOrg successfully', async () => {
        req.query = { state: 'random_state', org_code: 'org-code' };
        KindeManagementApi.SessionStore.setData('session-id', {});
        req.headers.cookie = 'sessionId=session-id';
        sandbox.stub(KindeManagementApi.AuthorizationCode.prototype, 'generateAuthorizationURL').returns('https://example.com/oauth2/auth?response_type=code&client_id=client_id&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=openid%20profile%20email%20offline&state=random_state&start_page=registration&is_create_org=true&org_name=org_name');
        await instance.createOrg()(req, res, next);
        expect(res.cookie.calledOnce).to.be(true);
        expect(res.redirect.calledOnce).to.be(true);
        expect(res.redirect.getCall(0).args[0]).to.be(`https://example.com/oauth2/auth?response_type=code&client_id=client_id&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=openid%20profile%20email%20offline&state=random_state&start_page=registration&is_create_org=true&org_name=org_name`);
        expect(KindeManagementApi.SessionStore.getDataByKey('session-id', 'kindeOauthState')).to.be('random_state');
      });

      it('should call createOrg throws an error', async () => {
        await instance.createOrg()(req, {}, next);
        expect(next.calledOnce).to.be(true);
        expect(next.firstCall.args[0]).to.be.an(Error);
      });
    });

    describe('logout', function() {
      it('should call logout successfully', () => {
        const req = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        const res = {
          redirect: sinon.spy(),
          clearCookie: sinon.spy(),
        };
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeAccessToken: 'my.access-token.example',
          kindeRefreshToken: 'my.refresh-token.example',
          kindeLoginTimeStamp: Date.now(),
          kindeExpiresIn: 3600,
        });
        instance.logout()(req, res);
        expect(res.clearCookie.calledOnce).to.be(true);
        expect(res.redirect.calledOnce).to.be(true);
        expect(res.redirect.calledWith(`${instance.logoutEndpoint}?redirect=${encodeURIComponent(instance.logoutRedirectUri)}`)).to.be(true);
        expect(KindeManagementApi.SessionStore.getData('session-id')).to.be(undefined);
      });
    });

    describe('getToken', () => {
      let sandbox;
      beforeEach(() => {
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call getToken successfully', async () => {
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeAccessToken: 'my.access-token.example',
          kindeRefreshToken: 'my.refresh-token.example',
          kindeLoginTimeStamp: Date.now(),
          kindeExpiresIn: 3600,
        });
        sandbox.stub(instance, 'isTokenExpired').returns(false);
        const result = await instance.getToken(request);
        expect(result).to.be('my.access-token.example');
      });
    });

    describe('saveToken', () => {
      const payloadAccessToken = {
        aud: [],
        azp: '09b4aec1c8b14c11a83ed94d458d605f',
        exp: Date.now(),
        feature_flags: {
          competitions_limit: { t: 'i', v: 5 },
          is_dark_mode: { t: 'b', v: true },
          pink: { t: 's', v: 'pink' },
          test: { t: 'b', v: false },
          test1: { t: 'i', v: 5 },
          theme: { t: 's', v: 'pink1' },
        },
        iat: 1681978619,
        iss: 'https://nguyenstsdev-dev.au.kinde.com',
        jti: '2accb1dc-b9da-4f63-8b0f-a3dfae721f40',
        org_code: 'org_7052552de68',
        permissions: [ 'update:todos', 'create:todos' ],
        scp: [ 'openid', 'profile', 'email', 'offline' ],
        sub: 'kp:0094bbe7230c42f3be027b52e4e179a5',
      };
      const base64Payload = Buffer.from(JSON.stringify(payloadAccessToken)).toString('base64');
      const validToken = `header.${base64Payload}.signature`;
      const token = {
        access_token: validToken,
        id_token: validToken,
        expires_in: 3600,
        refresh_token: 'my.refresh-token.example',
      };

      it('should call saveToken successfully', () => {
        instance.saveToken('session-id', token);
        expect(KindeManagementApi.SessionStore.getDataByKey('session-id', 'kindeLoginTimeStamp')).to.be.a('number');
        expect(KindeManagementApi.SessionStore.getDataByKey('session-id', 'kindeAccessToken')).to.be(validToken);
        expect(KindeManagementApi.SessionStore.getDataByKey('session-id', 'kindeIdToken')).to.be(validToken);
        expect(KindeManagementApi.SessionStore.getDataByKey('session-id', 'kindeExpiresIn')).to.be(3600);
        expect(KindeManagementApi.SessionStore.getDataByKey('session-id', 'kindeRefreshToken')).to.be('my.refresh-token.example');
      });
    });

    describe('isTokenExpired', () => {
      it('should call isTokenExpired return true if it is expired', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeLoginTimeStamp: Date.now() - 3601 * 1000,
          kindeExpiresIn: 3600,
        });
        const result = instance.isTokenExpired('session-id');
        expect(result).to.be(true);
      });

      it('should call isTokenExpired return false if it is not expired', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeLoginTimeStamp: Date.now() - 1000,
          kindeExpiresIn: 3600,
        });
        const result = instance.isTokenExpired('session-id');
        expect(result).to.be(false);
      });
    });

    describe('getRefreshToken', () => {
      afterEach(() => {
        sinon.restore();
      });
    
      it('should call getRefreshToken successfully', async () => {
        const sessionId = '123456';
        const kindeRefreshToken = 'refresh_token';
        const refreshedToken = { token: 'new_token' };    
        const authStub = sinon.stub(KindeManagementApi.RefreshToken.prototype, 'getToken').resolves(refreshedToken);
        const getSessionDataStub = sinon.stub(KindeManagementApi.SessionStore, 'getDataByKey').returns(kindeRefreshToken);  
        const result = await instance.getRefreshToken(sessionId);
        expect(getSessionDataStub.calledWith(sessionId, 'kindeRefreshToken')).to.be(true);
        expect(authStub.calledWith(sinon.match.any, kindeRefreshToken)).to.be(true);
        expect(result).to.eql(refreshedToken);
      });
    
      it('should call getRefreshToken throw an error ', async () => {
        const sessionId = '123456';
        sinon.stub(KindeManagementApi.SessionStore, 'getDataByKey').returns(undefined);
        try {
          await instance.getRefreshToken(sessionId);
        } catch (error) {
          expect(error.message).to.eql('Cannot get token - user is not authenticated');
        }
      });
    });

    describe('isAuthenticated', function() {
      let sandbox;
      beforeEach(() => {
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call isAuthenticated return true', async () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeAccessToken: 'access_token',
          kindeLoginTimeStamp: Date.now(),
          kindeExpiresIn: 86399,
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        sandbox.stub(instance, 'isTokenExpired').returns(false);
        const isAuthenticated = await instance.isAuthenticated(request);
        expect(isAuthenticated).to.be(true);
      });

      it('should call isAuthenticated return false', async () => {
        KindeManagementApi.SessionStore.setData('session-id', {});
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        const isAuthenticated = await instance.isAuthenticated(request);
        expect(isAuthenticated).to.be(false);
      });
    });

    describe('getFlag', () => {
      let sandbox;
      beforeEach(() => {
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call getFlag return the flag value if it is found', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {
            'my-flag': { t: 'i', v: 123 },
          },
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        const result = instance.getFlag(request, 'my-flag');
        expect(result.code).to.equal('my-flag');
        expect(result.type).to.equal('integer');
        expect(result.value).to.equal(123);
        expect(result.is_default).to.equal(false);
      });

      it('should call getFlag return the default value if the flag is not found', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {},
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        const defaultValue = true;
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        const result = instance.getFlag(request, 'my-flag', { defaultValue }, 'b');
        expect(result.code).to.equal('my-flag');
        expect(result.type).to.equal('boolean');
        expect(result.value).to.equal(true);
        expect(result.is_default).to.equal(true);
      });

      it('should call getFlag throw error if the flag is not found and no default provided', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {},
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        expect(() => {
          instance.getFlag(request, 'my-flag');
        }).to.throwError('Flag my-flag does not exist, and no default value has been provided');
      });

      it('should call getFlag throw error if the flag is of type not boolean', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {
            'my-flag': { t: 's', v: 'a' },
          },
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        const defaultValue = 123;
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        expect(() => {
          instance.getFlag(request, 'my-flag', { defaultValue }, 'i');
        }).to.throwError('Flag my-flag is of type string - requested type integer');
      });
    });

    describe('getBooleanFlag', () => {
      let sandbox;
      beforeEach(() => {
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call getBooleanFlag return the flag value if it is found', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {
            'my-flag': { t: 'b', v: false },
          },
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        const defaultValue = true;
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        const result = instance.getBooleanFlag(request, 'my-flag', defaultValue);
        expect(result).to.be(false);
      });

      it('should call getBooleanFlag return the default value if the flag is not found', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {},
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        const defaultValue = true;
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        const result = instance.getBooleanFlag(request, 'my-flag', defaultValue);
        expect(result).to.be(defaultValue);
      });

      it('should call getBooleanFlag throw error if the flag is not found and no default provided', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {},
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        expect(() => {
          instance.getBooleanFlag(request, 'my-flag');
        }).to.throwError('Flag my-flag does not exist, and no default value has been provided');
      });

      it('should call getBooleanFlag throw error if the flag is of type not boolean', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {
            'my-flag': { t: 's', v: 'a' },
          },
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        expect(() => {
          instance.getBooleanFlag(request, 'my-flag', false);
        }).to.throwError('Flag my-flag is of type string - requested type boolean');
      });
    });

    describe('getStringFlag', () => {
      let sandbox;
      beforeEach(() => {
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call getStringFlag return the flag value if it is found', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {
            'my-flag': { t: 's', v: 'flag-value' },
          },
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        const result = instance.getStringFlag(request, 'my-flag');
        expect(result).to.be('flag-value');
      });

      it('should call getStringFlag return the default value if the flag is not found', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {},
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        const defaultValue = 'default-value';
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        const result = instance.getStringFlag(request, 'my-flag', defaultValue);
        expect(result).to.be(defaultValue);
      });

      it('should call getStringFlag throw error if the flag is not found and no default provided', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {},
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        expect(() => {
          instance.getStringFlag(request, 'my-flag');
        }).to.throwError('Flag my-flag does not exist, and no default value has been provided');
      });

      it('should call getStringFlag throw error if the flag is of type not boolean', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {
            'my-flag': { t: 'b', v: true },
          },
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        expect(() => {
          instance.getStringFlag(request, 'my-flag', false);
        }).to.throwError('Flag my-flag is of type string - requested type boolean');
      });
    });

    describe('getIntegerFlag', () => {
      let sandbox;
      beforeEach(() => {
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call getIntegerFlag return the flag value if it is found', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {
            'my-flag': { t: 'i', v: 123 },
          },
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        const result = instance.getIntegerFlag(request, 'my-flag');
        expect(result).to.be(123);
      });

      it('should call getIntegerFlag return the default value if the flag is not found', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {},
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        const defaultValue = 42;
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        const result = instance.getIntegerFlag(request, 'my-flag', defaultValue);
        expect(result).to.be(defaultValue);
      });

      it('should call getIntegerFlag throw error if the flag is not found and no default provided', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {},
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        expect(() => {
          instance.getIntegerFlag(request, 'my-flag');
        }).to.throwError('Flag my-flag does not exist, and no default value has been provided');
      });

      it('should call getIntegerFlag throw error if the flag is of type not boolean', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {
            'my-flag': { t: 'b', v: true },
          },
        });
        const request = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        expect(() => {
          instance.getIntegerFlag(request, 'my-flag', false);
        }).to.throwError('Flag my-flag is of type integer - requested type boolean');
      });
    });

    describe('clearSession', function() {
      it('should call cleanSession successfully', function() {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeFeatureFlags: {
            'my-flag': { t: 'b', v: true },
          },
        });
        const res = {
          clearCookie: sinon.spy(),
        };
        instance.clearSession('session-id', res);
        expect(res.clearCookie.calledOnce).to.be(true);
        expect(KindeManagementApi.SessionStore.getData('session-id')).to.be(undefined);
      });
    });

    describe('getUserDetails', function() {
      it('should call getUserDetails successfully', function() {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeLoginTimeStamp: Date.now(),
          kindeExpiresIn: 86399,
          kindeUser: {
            name: 'John Doe',
            email: 'johndoe@example.com',
          },
        });
        const req = {
          headers: {
            cookie: 'sessionId=session-id',
          },
        };
        const isAuthenticatedStub = sinon.stub(instance, 'isAuthenticated').returns(true);  
        const userDetails = instance.getUserDetails(req);
        expect(userDetails).to.eql({
          name: 'John Doe',
          email: 'johndoe@example.com',
        });
        isAuthenticatedStub.restore();
      });

      it('should call getUserDetails throw an error', function() {
        KindeManagementApi.SessionStore.setData('session-id', {});
        const isAuthenticatedStub = sinon.stub(instance, 'isAuthenticated').returns(false);  
        expect(function() {
          instance.getUserDetails(request);
        }).to.throwError('Request is missing required authentication credential');
        isAuthenticatedStub.restore();
      });
    });

    describe('getClaims', function() {
      let req, sandbox;
      beforeEach(() => {
        req = {
          headers: {
            cookie: '',
          },
        };
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call getClaims successfully', () => {
        KindeManagementApi.SessionStore.setData('session-id', {
          kindeIdToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        });
        req.headers.cookie = 'sessionId=session-id';
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        const claims = instance.getClaims(req, 'id_token');
        expect(claims).to.be.an('object');
        expect(claims.sub).to.equal('1234567890');
        expect(claims.name).to.equal('John Doe');
        expect(claims.iat).to.equal(1516239022);
      });

      it('should call getClaims throw an error', () => {
        sandbox.stub(instance, 'isAuthenticated').returns(false);
        const fn = () => instance.getClaims(req, 'id_token');
        expect(fn).to.throwError('Request is missing required authentication credential');
      });
    });

    describe('getClaim', function() {
      let sandbox;
      const req = {};
      beforeEach(() => {
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call getClaim successfully', () => {
        const fakeTokenData = {
          sub: '12345',
          email: 'johndoe@example.com',
        };
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        sandbox.stub(instance, 'getClaims').returns(fakeTokenData);
        const claimValue = instance.getClaim(req, 'email', 'access_token');
        expect(claimValue.name).to.equal('email');
        expect(claimValue.value).to.equal('johndoe@example.com');
      });

      it('should call getClaim throw an error', () => {
        sandbox.stub(instance, 'isAuthenticated').returns(false);
        expect(() => {
          instance.getClaim(req, 'email', 'access_token');
        }).to.throwError('Request is missing required authentication credential');
      });
    });

    describe('getPermissions', function() {
      let sandbox;
      const req = {};
      beforeEach(() => {
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call getPermissions successfully', () => {
        const orgCode = 'org123';
        const permissions = ['view', 'edit'];
        const claims = {
          org_code: orgCode,
          permissions: permissions,
        };
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        sandbox.stub(instance, 'getClaims').returns(claims);
        const expectedPermissions = {
          orgCode: orgCode,
          permissions: permissions,
        };
        expect(instance.getPermissions(req)).to.eql(expectedPermissions);
        sandbox.restore();
      });

      it('should call getPermissions throw an error', () => {
        sandbox.stub(instance, 'isAuthenticated').returns(false);
        expect(() => instance.getPermissions(req)).to.throwException((exception) => {
            expect(exception.message).to.be(
              'Request is missing required authentication credential'
            );
        });
      });
    });

    describe('getPermission', function() {
      let sandbox;
      const req = {};
      const sampleClaims = {
        org_code: 'sampleOrgCode',
        permissions: ['permission1', 'permission2'],
      };
      beforeEach(() => {
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call getPermission successfully', () => {
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        sandbox.stub(instance, 'getClaims').returns(sampleClaims);
        const result = instance.getPermission(req, 'permission1');
        expect(result).to.be.an('object');
        expect(result.orgCode).to.eql('sampleOrgCode');
        expect(result.isGranted).to.be(true);
      });

      it('should call getPermission throw an error', () => {
        sandbox.stub(instance, 'isAuthenticated').returns(false);
        expect(() => {
          instance.getPermission(req, 'permission1');
        }).to.throwError('Request is missing required authentication credential');
      });
    });

    describe('getOrganization', function() {
      let sandbox;
      const req = {};
      beforeEach(() => {
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call getOrganization successfully ', () => {
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        sandbox.stub(instance, 'getClaims').withArgs(req).returns({
          org_code: 'org-123',
        });
        const result = instance.getOrganization(req);
        expect(result).to.eql({ orgCode: 'org-123' });
      });

      it('should call getOrganization throw an error', () => {
        sandbox.stub(instance,'isAuthenticated').returns(false);  
        expect(() => instance.getOrganization(req)).to.throwError('Request is missing required authentication credential');
      });
    });

    describe('getUserOrganizations', function() {
      let sandbox;
      const req = {};
      beforeEach(() => {
        sandbox = sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call getUserOrganizations successfully', function() {
        sandbox.stub(instance, 'isAuthenticated').returns(true);
        sandbox.stub(instance, 'getClaims').withArgs(req, 'id_token').returns({
          org_codes: ['org1', 'org2']
        });
        const result = instance.getUserOrganizations(req);
        expect(result).to.eql({
          orgCodes: ['org1', 'org2'],
        });
      });

      it('should call getUserOrganizations throw an error', function() {
        sandbox.stub(instance, 'isAuthenticated').returns(false);
        expect(() => instance.getUserOrganizations(req)).to.throwError('Request is missing required authentication credential');
      });
    });
  });
}));
