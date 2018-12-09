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
          material: req.body.material,
          id: id
      });
      user.save();
      req.flash('success', { msg: 'Added item' });
      res.redirect('/wardrobe');
      });
  };