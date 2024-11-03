/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

import { fetchAllUsers, createUser } from "./controller/userController.js";

export const lambdaHandler = async (event, context) => {
  try {

    const {httpMethod, body, path, pathParameters, queryStringParameters} = event

    if(path === '/users' && httpMethod === 'GET') {
      const response = await fetchAllUsers()
      console.log('response-------->', response)
      return response
    }

    if(path === '/users' && httpMethod === 'POST') {

      const response = await createUser(JSON.parse(body))
      console.log("User created---------------->", response)
      return response;
    }
    
  } catch (err) {
    console.log('-----------ERROR-----------', err)

    return {
      statusCode: err.statusCode,
      body: JSON.stringify({
        message: err.message
      })
    };
  }
};
