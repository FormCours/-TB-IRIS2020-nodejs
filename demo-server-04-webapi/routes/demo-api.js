const demoController = require('./../controllers/demo-controller');

const demoRouter = (router) => {

    router.route('/demo')
        .get(demoController.find)
        .post(demoController.insert);
}

module.exports = demoRouter;