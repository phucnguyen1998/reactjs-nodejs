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
});

// api get data from postgres sql
router.get('/getdata', function(req, res) {
  // // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // // Request methods you wish to allow
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // // Request headers you wish to allow
  // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // // Set to true if you need the website to include cookies in the requests sent
  // // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  pool.query('select * from product_info', (err, response) => {
    if(err){
      console.log(err);
    }else{
      res.send(response.rows);
    }
  })

});

/* ADD home page. */
router.get('/add', function(req, res) {
  res.render("add",{});
});

router.post('/add', function(req, res) {
  let product_name = req.body.product_name;
  let product_price = req.body.product_price;
  let image = req.body.product_image;
  let sql = "insert into product_info (product_name,product_price,image) values('"+product_name+"','"+product_price+"','"+image+"')";
  pool.query(sql,(err,response) => {
    if(err){
      res.send(err);
    }
    else{
      res.send("update thanh cong")
    }
  })
  // res.send("nhan duoc du lieu "+ product_name + product_price + image);
});


module.exports = router;
