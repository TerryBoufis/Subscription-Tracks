// import models
const Subscription = require('./User');
const User = require('./Subscription');

// Subscription belongsTo User
Subscription.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

  // User have many Sunscriptions
User.hasMany(Subscription, {
    foreignKey: 'Subscription_id',
  });

  module.exports = {
    Subscription,
    User,
  };