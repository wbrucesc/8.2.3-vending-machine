'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
  queryInterface.changeColumn('Snacks', 'name', {
    type: Sequelize.STRING,
    allowNull: false
  });
  queryInterface.changeColumn('Snacks', 'price', {
    type: Sequelize.INTEGER,
    allowNull: false
  });
  queryInterface.changeColumn('Snacks', 'description', {
    type: Sequelize.STRING,
    allowNull: false
  });
  queryInterface.changeColumn('Snacks', 'quantity', {
    type: Sequelize.INTEGER,
    allowNull: false
  });
  queryInterface.changeColumn('Snacks', 'paid', {
    type: Sequelize.INTEGER,
    allowNull: false
  });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.changeColumn('Snacks', 'name', {
      type: Sequelize.STRING,
      allowNull: true
    });
    queryInterface.changeColumn('Snacks', 'price', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
    queryInterface.changeColumn('Snacks', 'description', {
      type: Sequelize.STRING,
      allowNull: true
    });
    queryInterface.changeColumn('Snacks', 'quantity', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
    queryInterface.changeColumn('Snacks', 'paid', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
  }
};
