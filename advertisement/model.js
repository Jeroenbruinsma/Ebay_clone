const Sequelize = require('sequelize')
const sequelize = require('../db')



const Advertisement = sequelize.define('Advertisements', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false  
  },
  pic_url: {
    type: Sequelize.STRING,
    allowNull: false  
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false  
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false  
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false  
  },
  
}, {
    timestamps: false,
    tableName: 'Advertisements'
  })

module.exports = Advertisement