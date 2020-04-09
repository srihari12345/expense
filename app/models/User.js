'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose');
const shortId = require('shortid');
const time = require('../libs/timeLib')
const userSchema = mongoose.Schema({

  userId: {
    type: String,
    default:shortId.generate,
    index: true,
    unique: true,
    required: true
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  phoneNumber: {
    type: String,
    default: 0
  },
  createdOn :{
    type:Date,
    default:Date.now
  },
 

});

module.exports=mongoose.model('User', userSchema);
