exports.handler = async ({queryStringParameters}) => {
    return {
      body: JSON.stringify(queryStringParameters),
      statusCode: 200
    }
  }