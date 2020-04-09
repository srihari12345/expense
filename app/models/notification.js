'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose');
const shortId = require('shortid');
const time = require('../libs/timeLib')
const notificationSchema = mongoose.Schema({
    
    notifyId:{
        type:String,
        default:shortId.generate,
    },
    user :{
        name:String,
        id:String
    },
    notificationText:{
        type:String,
        default:''
    },
    isSeen:{
        type:Boolean,
        default:'false'
    },
    createdon:{
        type:Date,
        default:Date.now,
    },
    updatedon:{
        type:Date,
        default:Date.now
    }
});


module.exports = mongoose.model('Notification', notificationSchema);