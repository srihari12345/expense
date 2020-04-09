'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose');
const shortId = require('shortid');
const User = require('../models/User')
const time = require('../libs/timeLib')
const groupSchema = mongoose.Schema({


    groupId: {
        type: String,
        default: shortId.generate,
        index:true,
        unique:true
    },

    group_creatorId: {
        type: String,
        //ref: 'User',
        default:''
    },
    group_creatorName: {
        type: String,
        //ref: 'User',
        default:''
    },
    group_name: {
        type: String,
        default: '',
    },
    description: {
        type:String,
        default:''

    },
    group_createdon: {
        type: Date,
        default: Date.now,
    },
    updatedon: {
        type: Date,
        default: '',
    },
    group_updater_id: {
        type: String,
        //ref: 'User',
        default:''
    },
    group_updater_name: {
        type: String,
        //ref: 'User',
        default:''
    },

    group_users: [{
        item_id:String,
        item_text:String
    }],
    expenses:[
        {
            type:String,
            Default: ''
        }
    ]
});

module.exports = mongoose.model('Group', groupSchema);