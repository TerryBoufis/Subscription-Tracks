const router = require('express').Router();
const subscriptionRoutes = require('./subscription-routes');
const userRoutes = require('./user-routes');


router.use('/subscription', subscriptionRoutes);
router.use('/users', userRoutes);


module.exports = router;
