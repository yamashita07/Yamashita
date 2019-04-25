'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const Availaility = loader.database.define('availabilities', {
  candidateId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  availaility: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  scheduleId: {
    type: Sequelize.UUID,
    allowNull: false,
  }
}, {
  freezeTableName: true,
  timestamps: false,
  indexes: [
    {
      fields: ['scheduleId']
    }
  ]
});

module.exports = Availaility;