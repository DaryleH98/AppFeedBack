const passport = require('passport');
module.exports = (app) => {
    //create a GET route
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

    app.get('/auth/google/callback', passport.authenticate('google'))
};