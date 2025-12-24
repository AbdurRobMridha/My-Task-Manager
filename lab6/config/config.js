// config/config.js  (replace the entire content with this exact code)
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'taskdb',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: 'mysql',
    database: 'taskdb_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: null,
    database: 'taskdb_production',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
};