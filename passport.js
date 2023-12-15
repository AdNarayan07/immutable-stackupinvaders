window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: '1R7KZRwaSiA7tpWeMnK8OnhlyaEXP2B7',
    redirectUri: 'https://liked-redbird-noted.ngrok-free.app/',
    logoutRedirectUri: 'https://liked-redbird-noted.ngrok-free.app/logout.html',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });

