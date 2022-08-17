const AuthenticationController = require("../controllers/AuthenticationController")
const TestController = require("../controllers/TestController")
const AuthenticationControllerPolicy = require("../policies/AuthenticationControllerPolicy")

module.exports = (route) => {
    /* Test */
    route.group('/api', (router) => {
        router.get('/test',
            TestController.test
        )
    
        /* Authentication */
        router.post('/register',
            AuthenticationControllerPolicy.register,
            AuthenticationController.register
        )
        router.post('/login',
            AuthenticationController.login
        )
        router.get('/users',
            AuthenticationController.user
        )
    })
}