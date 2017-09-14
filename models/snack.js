'use strict';
module.exports = function(sequelize, DataTypes) {
  var Snack = sequelize.define('Snack', {
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER},
    description: {type: DataTypes.STRING},
    quantity: {type: DataTypes.INTEGER},          //quantity of item in stock
    purchased: {                                  //quantity of item purchased
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
  return Snack;
};
