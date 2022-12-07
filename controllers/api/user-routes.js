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

  router.post("/", async (req, res) => {
    try {
      const userData = await User.create(req.body);
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put("/:id", async (req, res) => {
    try {
      const userData = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const userData = await User.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!userData) {
        res.status(404).json({ message: 'No user found with this id!' });
        return;
      }
  
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
    // deletes a user by its `id` value
  
  module.exports = router;
