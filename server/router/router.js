const express = require('express');
const viewController = require('../controllers/viewController')

const router = express.Router();

let initWebRoutes = (app) => {

    router.get('/', viewController.homeView);

    return app.use('/', router)
};

module.exports = router;
module.exports = initWebRoutes;
