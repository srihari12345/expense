'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose');
const shortId = require('shortid');
const time = require('../libs/timeLib')
const expenseSchema = mongoose.Schema({
    expenseName:{
        type:String,
        default:''
    },
    category:[{
        item_id: String,
        item_text: String
    }],
    expenseId:{
        type:String,
        default:shortId.generate
    },
    amount:{
        type:Number,
        default:''
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    updatedOn: {
        type: Date,
        default: ''
    },
    deletedOn: {
        type: Date,
        default: ''
    },
    expensePaidBy: [{
        item_id: String,
        item_text: String
    }],
    expenseUsersInvolved: [
        {
            item_id: String,
            item_text: String
        }
    ],
    groupId: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('Expense', expenseSchema);