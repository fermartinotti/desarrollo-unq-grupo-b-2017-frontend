interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'vDOg5jxMuBurvh9SgCL9IetA6SwAKXs1',
  domain: 'morfiyagrupob.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
