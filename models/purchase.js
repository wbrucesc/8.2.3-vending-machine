'use strict';
module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define('Purchase', {
    paymentAmount: DataTypes.INTEGER,
    purchaseDate: DataTypes.DATE,
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Snacks",
        key: "id"
      }
    }
  });

  Purchase.associate = function(models){
    Purchase.belongsTo(models.Snack, {foreignKey: "itemId"}); 
  };
  return Purchase;
};
