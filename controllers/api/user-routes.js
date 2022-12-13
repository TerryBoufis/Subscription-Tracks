const router = require('express').Router();
const { User, Subscription } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll({include: [Subscription]});
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
    // finds all users
    // includes their associated subscription data
  });

  router.get('/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id, {
        include: [Subscription]
      });
  
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
  
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
    // finds a single user by its `id`
    // includes their associated subscription data
  });


    //Sign-up controller
  router.post("/", async (req, res) => {
    console.log('1234')
    try {
      const userData = await User.create(req.body);
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.redirect('/');
      })
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
    //login controller
  router.post('/login', async (req, res) => {
    try {
      const userData = await User.findOne({ where: { email: req.body.email } });

      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email, please try again.' });
          return;
      }

      const validPassword = await userData.checkPassword(req.body.password);

      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect password, please try again' });
        return;
        
      }

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

        res.json({ user: userData, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  })

    //logout controller
  router.post('/logout', (req, res) => {
    if(req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  })
  
  module.exports = router;
