var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: 'admin',
  port: 5432,
})

/* GET home page. */
router.get('/', function(req, res) {
  pool.query('SELECT NOW()', (err, res) => {
    //console.log(err, res)
    pool.end()
  })
  res.render('index', { title: 'Express' });
});

// api get data from postgres sql
router.get('/getdata', function(req, res) {
  console.log('day la api lay dl');
  // get data
  pool.query('select * from product_info', (err, response) => {
    console.log(response.rows)
    pool.end()
  })
  res.render('getdata');
});


module.exports = router;
