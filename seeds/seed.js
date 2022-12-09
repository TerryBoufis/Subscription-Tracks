const sequelize = require('../config/connection');
const { User, Subscription } = require('../models');

const userData = require('./userData.json');
const subscriptionData = require('./subscriptionData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const subscription of subscriptionData) {
    await Subscription.create({
      ...subscription,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();