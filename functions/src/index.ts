import * as functions from 'firebase-functions';
import getImagesFunction from './getImages';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


export const getImages = functions.https.onCall(getImagesFunction);