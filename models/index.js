// import models
const Subscription = require('./Subscription');
const User = require('./User');

// Subscription belongsTo User
Subscription.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

  // User have many Sunscriptions
User.hasMany(Subscription, {
    foreignKey: 'user_id',
  });

  module.exports = { Subscription, User };