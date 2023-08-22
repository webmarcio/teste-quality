const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const helmet = require('helmet');
const sequelize = require('./Sequelize');

const routes = require('../routes');

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.database();
  }
  
  middlewares() {
    this.app.use(cors());
    this.app.use(logger('dev'));
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  
  routes() {
    this.app.use('/api/v1', routes);
  }
  
  database() {  
    sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  }
  
}

module.exports = new App();