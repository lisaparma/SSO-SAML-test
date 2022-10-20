var passport = require('passport');

module.exports = (app) => {
    app.get('/login',
        (req, res, next) => {
            console.log('/Start login handler');
            next();
        },
        passport.authenticate('samlStrategy'),
    );

    app.post('/login/callback',
        (req, res, next) => {
            console.log('/Start login callback ');
            next();
        },
        passport.authenticate('samlStrategy'),
        (req, res) => {
            console.log('login call back dumps');
            console.log(req.user);
            res.redirect("http://localhost:3000/logged");
            //res.send('Log in Callback Success');
        }
    );
}