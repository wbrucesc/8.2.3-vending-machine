const models = require('../models');

const ApiController = {
  list: function(req, res){
    models.Snack.findAll().then(function(snacks){
      res.json(snacks);
    });
  },
  purchase: function(req, res){
    let itemId = req.params.id;
    let payment = req.body.payment;
    let change = 0;
    let message = "";

    models.Snack.findById(itemId).then(function(snack){
      if (payment >= snack.price && snack.quantity > 0){
        snack.quantity -= 1;
        snack.purchased += 1;
        snack.save();
        const newPurchase = models.Purchase.create({
          paymentAmount: payment,
          purchaseDate: Date.now(),
          itemId: itemId
        });
        change = payment - snack.price;
        message = "Alright you're all set. Your change is " + change + ". " + "Come back soon!";
        return res.json({status: "success", message: message, data: snack});
      } else if (snack.quantity === 0) {
        message = "Sorry that snack is out of stock";
        return res.json({status: "fail", message:message, data: snack});
      } else if (payment < snack.price) {
        message = "You did not pay enough for the item. The price is " + snack.price;
        return res.json({status: "fail", message:message, data:snack});
      }
    });
  },
  addSnack: function(req, res){
    models.Snack.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      quantity: req.body.quantity,
      purchased: 0
    });
    models.Snack.findAll().then(function(snacks){
      res.json(snacks);
    });
  },
  allPurchases: function(req, res){
    models.Purchase.findAll({
      include: [{
        model: models.Snack
      }]
    }).then(function(purchases){
      res.json({data: purchases});
    });
  },
  earned: function(req, res){
    models.Purchase.sum('paymentAmount').then(function(earnings){
      res.json({totalEarnings: earnings});
    });
  },
  update: function(req, res){
    itemId = req.params.id;
    models.Snack.findById(itemId).then(function(snack){
      snack.price = req.body.price;
      snack.description = req.body.description;
      snack.quantity = req.body.quantity;
      snack.save();
    });
  }

};

module.exports = ApiController;
