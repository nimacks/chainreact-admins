// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.
import { APPSYNC_API_KEY, IDENTITY_POOL_ID, USER_POOL_ID, WEB_CLIENT_ID } from "./amplify-env"

const awsmobile = {
  aws_project_region: "us-east-2",
  aws_appsync_graphqlEndpoint:
    "https://najx2aa76zb55jeexyyc43nuyy.appsync-api.us-east-2.amazonaws.com/graphql",
  aws_appsync_region: "us-east-2",
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_apiKey: APPSYNC_API_KEY || process.env.APPSYNC_API_KEY,
  aws_cognito_identity_pool_id: IDENTITY_POOL_ID || process.env.IDENTITY_POOL_ID,
  aws_cognito_region: "us-east-2",
  aws_user_pools_id: USER_POOL_ID || process.env.USER_POOL_ID,
  aws_user_pools_web_client_id: WEB_CLIENT_ID || process.env.WEB_CLIENT_ID,
  oauth: {}
}

export default awsmobile
