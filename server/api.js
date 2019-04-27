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
      res.json(body);
    }
  });
});


router.post('/product/:id', (req, res) => {
  const { productId } = req.body;
  request({
    url: url,
    json: true
  }, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      const product = body.find(entry => entry._id === productId)
      res.json({ payload: product });
    }
  });
});


module.exports = router;