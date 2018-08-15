
module.exports = {

    'facebookAuth' : {
        'clientID'        : '237926340174397', 
        'clientSecret'    : '541d3fc846bd1bea351dde682fa1e269', 
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields'   : ['id', 'email', 'name'] 

    }
};
