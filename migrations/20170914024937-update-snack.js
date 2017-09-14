'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Snacks', 'paid');
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.addColumn('Snacks', 'paid');
  }
};
