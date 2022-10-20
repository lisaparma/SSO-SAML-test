var passport = require('passport');
var saml = require('passport-saml');
var fs = require('fs');
var path = require('path');

module.exports = (app) => {
    var samlStrategy = new saml.Strategy({
        callbackUrl: 'http://localhost:4300/login/callback',
        entryPoint: 'http://localhost:8080/simplesaml/saml2/idp/SSOService.php',
        issuer: 'saml-poc',
        identifierFormat: null,
        decryptionPvk: fs.readFileSync(path.join(__dirname, '../../certs/key.pem'), 'utf8'),
        privateCert: fs.readFileSync(path.join(__dirname, '../../certs/key.pem'), 'utf8'),
        cert: fs.readFileSync(path.join(__dirname, '../../certs/idp_key.pem'), 'utf8'),
        validateInResponseTo: false,
        disableRequestedAuthnContext: true
    }, (profile, done) => done(null, profile));
    passport.use('samlStrategy', samlStrategy);

    passport.serializeUser((user, done) => {
        console.log('Serialize user');
        console.log(user);
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        console.log('Deserialize user');
        console.log(user);
        done(null, user);
    });

    app.use(passport.initialize({}));
    app.use(passport.session({}));
}