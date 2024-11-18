// import { auth } from 'express-oauth2-jwt-bearer';

// const checkJwt = auth({
//   audience: '{https://book-store-api}', // e.g. https://book-store-api
//   issuerBaseURL: `https://{dev-iqt65ryq05bu3vl7.us.auth0.com/}/`,
// });

//export default authMiddleware;
import { auth } from 'express-oauth2-jwt-bearer';

const checkJwt = auth({
  audience: 'https://book-store-api', // Replace with your actual audience
  issuerBaseURL: 'https://dev-iqt65ryq05bu3vl7.us.auth0.com/',
});

export default checkJwt; // Export checkJwt as the default middleware
