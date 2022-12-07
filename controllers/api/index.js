const router = require('express').Router();
const subscriptionRoutes = require('./subscription-routes');
const userRoutes = require('./user-routes');


router.use('/subscriptions', subscriptionRoutes);
router.use('/users', userRoutes);


module.exports = router;
