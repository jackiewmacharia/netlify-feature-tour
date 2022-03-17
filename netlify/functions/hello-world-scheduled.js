const { schedule } = require('@netlify/functions')


const handler = async (event, context) => {
    console.log('Received event:', event, 'Time: ', new Date().toISOString());
    return {
      statusCode: 200
    };
  };

  module.exports.handler = schedule('@hourly', handler);
  