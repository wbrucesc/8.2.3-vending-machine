'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('Snacks', 'purchased', {
      type: Sequelize.INTEGER,
      defaultValue: 0
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Snacks', 'purchased');
  }
};
