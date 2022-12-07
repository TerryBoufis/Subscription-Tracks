const router = require('express').Router();
const { Subscription, User } = require('../models');


router.get('/', async (req, res) => {
  try {
    // Gets all subscriptions and JOIN with user data
    const subscriptionData = await Subscription.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serializes the data so the template can read it
    const subscriptions = subscriptionData.map((subscription) => subscription.get({ plain: true }));

    // Passes the serialized data and session flag into template
    res.render('homepage', { 
      subscriptions, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/subscription/:id', async (req, res) => {
  try {
    const subscriptionData = await subscription.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const subscription = subscriptionData.get({ plain: true });

    res.render('subscription', {
      ...subscription,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirects the request to another route
  if (req.session.logged_in) {
    res.redirect('/userProfile');
    return;
  }

  res.render('login');
});

module.exports = router;