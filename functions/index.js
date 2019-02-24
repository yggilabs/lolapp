(() => { // this is an immediately invoked function using arrow syntax.
  'use strict'; // this should always be at the top of your js file. don't put other statements before it

  // try to keep variable declrations like the following at the top of your code
  const app = require('express')(); // express is a very common library for creating node APIs
  const functions = require('firebase-functions'); // required handle https events and various others
  const admin = require('firebase-admin'); // these are used to interact with the firestore database
  admin.initializeApp(); // this automatically handles all the configuration

  const endpoints = {
    test:
      async (req, res) => { // async arrow functions allows you to use 'await' int he function body
        res.json({status: 'ok', message: 'hello world'}); // all endpoints need to call res.json() or res.send()
      }
  };

  // create the '/api/test/' endpoint
  app.get('/test/', endpoints.test);

  exports.api = functions.https.onRequest(app); // run the app at the 'api' endpoint
})(); // the end part of the immediately invoked function
//dont put code after this
