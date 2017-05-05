var pg = require('pg');

var pool = new pg.Pool({
  database: 'golfer'
});

module.exports = pool;
