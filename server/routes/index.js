const userRouter = require('./user');
const artistRouter = require('./artist');
const aboutusRouter = require('./aboutus');
function route(app) {
    app.use('/', userRouter);
    app.use('/', artistRouter);
    app.use('/', aboutusRouter);
}

module.exports = route;