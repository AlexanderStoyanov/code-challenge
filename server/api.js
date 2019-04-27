const express = require('express');
const request = require('request');

const router = express.Router();
const url = 'https://next.json-generator.com/api/json/get/EkzBIUWNL'

router.get('/products', (req, res) => {
  request({
    url: url,
    json: true
  }, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      //console.log(body);
      res.json(body);
    }
  });
});


router.get('/products/:id', (req, res) => {
  request({
    url: url,
    json: true
  }, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      //res.render('product-detail', { body: body });
    }
  });
});


module.exports = router;