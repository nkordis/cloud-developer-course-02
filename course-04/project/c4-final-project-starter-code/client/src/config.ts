// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 's57j0ad4za'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-u23y6q-y.eu.auth0.com',            // Auth0 domain
  clientId: 'LwEoS9OjUwDrPHrCfDvie2Z4XYtUqICf',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
