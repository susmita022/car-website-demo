const passport = require('passport');
const db = require('../models/User').default
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '620032842825-ar0tb91adv4p9p1r8h89lclqd921aj7k.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback: true
},
    async function (request, accessToken, refreshToken, profile, done) {
        try {
            const query = 'SELECT * FROM google_user WHERE google_id = ?';
            db.query(query, [profile.id], async (err, results) => {
                if (err) {
                    return done(err);
                }

                if (results.length === 0) {
                    const insertQuery = 'INSERT INTO google_user (google_id, name, email) VALUES (?, ?, ?)';
                    db.query(insertQuery, [profile.id, profile.displayName, profile.emails[0].value], (err, result) => {
                        if (err) {
                            return done(err);
                        }
                        return done(null, profile);
                    });
                } else {
                    // If the user exists, continue with the authentication process
                    return done(null, profile);
                }
            });
        } catch (err) {
            return done(err);
        }
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});