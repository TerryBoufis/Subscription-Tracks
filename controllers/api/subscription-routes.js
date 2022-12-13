const router = require("express").Router();
const { Subscription, User } = require("../../models");

// The `/api/subscriptions` endpoint

router.get("/", async (req, res) => {
  try {
    const subscriptionData = await Subscription.findAll({ include: [User] });
    return res.status(200).json(subscriptionData);
  } catch (err) {
    res.status(500).json(err);
  }
  // finds all subscriptions
  // includes its associated user
});

router.get("/:id", async (req, res) => {
  try {
    const subscriptionData = await Subscription.findByPk(req.params.id, {
      include: [User],
    });

    if (!categoryData) {
      res.status(404).json({ message: "No subscription found with this id!" });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// finds one subscription by its `id` value
// includes its associated user

router.post("/", async (req, res) => {
  try {
    const subscriptionData = await Subscription.create(req.body);
    res.status(200).json(subscriptionData);
  } catch (err) {
    res.status(400).json(err);
  }
});
// creates a new subscription

router.delete('/:id', async (req, res) => {
    try {
      const subscriptionData = await Subscription.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!subscriptionData) {
        res.status(404).json({ message: 'No subscription found with this id!' });
        return;
      }
  
      res.status(200).json(subscriptionData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
    // deletes a subscription by its `id` value
  
  module.exports = router;