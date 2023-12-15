window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: process.env.clientId,
    redirectUri: 'https://immutable-stackupinvaders.adityanarayan13.repl.co/',
    logoutRedirectUri: 'https://immutable-stackupinvaders.adityanarayan13.repl.co/logout.html',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });

