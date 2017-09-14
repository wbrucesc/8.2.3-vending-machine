const express = require('express');

const ApiController = require('./controllers/api');

module.exports = function(app){
  const apiRouter = express.Router();

  apiRouter.get('/customer/items', ApiController.list);                        //gets list of items
  apiRouter.post('/customer/items/:id/purchases', ApiController.purchase);     //purchase an item
  apiRouter.get('/vendor/purchases', ApiController.allPurchases);            //list all purchases
  apiRouter.get('/vendor/money', ApiController.earned);                      //show total earnings
  apiRouter.post('/vendor/items', ApiController.addSnack);                   //add new snack to list
  apiRouter.put('/vendor/items/:id', ApiController.update);            //updates item qty, desc., & price

  app.use('/api', apiRouter);
};
