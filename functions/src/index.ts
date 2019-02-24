import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as app from 'express';

admin.initializeApp(); // this automatically handles all the configuration

app.get('/test/', (request, response) => { // async arrow functions allows you to use 'await' int he function body
  try {
    response.send({status: 'ok', message: 'hello world'}); // all endpoints need to call res.send()
  } catch(error) { // if something bad happens
    console.log(error); // log the error
    response.status(500).send(error); // send a server error status code
  }
});

exports.api = functions.https.onRequest(app); // run the app at the 'api' endpoint
