const express = require('express');
const request = require('request-promise');

const router = express.Router();
const url = 'https://next.json-generator.com/api/json/get/EkzBIUWNL';

const getProducts = () => {
  return request({
    url: url,
    json: true
  });
}

router.get('/products', async (req, res) => {
  const products = await getProducts();
  if (products) {
    res.json(products);
  } else {
    throw new Error('/products failed to load');
  }
});


router.post('/product/:id', async (req, res) => {
  const products = await getProducts();
  const { productId } = req.body;
  if (products && productId) {
    const product = products.find(entry => entry._id === productId)
    res.json(product);
  } else {
    throw new Error('/product/:id failed to load');
  }
});


module.exports = router;