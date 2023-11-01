import { config, passport  } from '@imtbl/sdk';

const passportInstance = new passport.Passport({
  baseConfig: new config.ImmutableConfiguration({
    environment: config.Environment.PRODUCTION,
  }),
  clientId: 'ztSwJsT74OVOolt73Egks10lVnNx9CT7',
  redirectUri: 'https://gghis-guess-immutable.netlify.app/',
  logoutRedirectUri: 'https://*t',
  audience: 'platform_api',
  scope: 'openid offline_access email transact'
});

export { passportInstance };