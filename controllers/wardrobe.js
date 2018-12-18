const { promisify } = require('util');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const passport = require('passport');
const User = require('../models/User'); 
const req = require('request');
const mongoose = require('mongoose');

// To generate a unique ID for each item

const id = mongoose.Types.ObjectId();

// GET Wardrobe page

exports.getItem = (req, res) => {
      res.render('wardrobe.pug')
      title: 'Your wardrobe'
  };

//

  exports.itemList = (req, res) => {
      User.findById(req.user.id, (err, docs) => {
          res.json(docs.wardrobe.items);
      })
  };
  
  // POST Wardrobe
  
  exports.postItem = (req, res, next) => {
    User.findById(req.user.id, (err, user) => {
      user.wardrobe.items
      .push({
          type: req.body.type,
          colour: req.body.colour,
          material: req.body.material,
          brand: req.body.brand,
          _id: id
      });
      user.save();
      req.flash('success', { msg: 'Added item' });
      res.redirect('/wardrobe');
      });
  };

  // DELETE an item

/*
exports.deleteItem = (req, res, next) => {
    User.findByIdAndUpdate(req.user.id, (err, user) => {      
    console.log("hello" + user);  
    $pull: {  
        wardrobe: {
            _id: {
            }
        }
    }
    console.log(user.wardrobe.items);    
user.save();
});
res.redirect('/wardrobe');
}
*/

//5c1827dfc13025f86dfaf075

exports.deleteItem = (req, res, next) => {
    User.findOne({"_id": "5c1827dfc13025f86dfaf075"}, (err, item) => {
    console.log(item);
    if (err) {
        return console.log("error: " + err);
      }
      res.redirect('/wardrobe');      
    });
  };