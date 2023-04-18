const express = require('express');
const path = require('path');

const adminRouter = express.Router();

const products = [];

adminRouter.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

adminRouter.post('/add-product', (req, res) => {
  products.push(req.body.title);
  res.redirect('/add-product');
});

module.exports = adminRouter;
