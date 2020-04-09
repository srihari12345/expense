'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose');
const shortId = require('shortid');
const time = require('../libs/timeLib')
const expenseHistorySchema = mongoose.Schema({
    groupId: {
        type: String,
        default:  ''
    },
    historyId: {
        type: String,
        default: shortId.generate,
        required: true,
    },
    expense_creator: {
        id: String,
        name: String,
        default: ''
    },
    expense_updated: {
        id: String,
        name: String,
        default: ''
    },
    expense_deleted: {
        id: String,
        name: String,
        default: ''
    },
    isCreated: {
        type: Boolean,
        default: false
    },
    isUpdated: {
        type: Boolean,
        default: false
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdOn: {
        type: Date,
        default: '',
    },
    amount: {
        type: Number,
        default: '',
    },
    previous_amount: {
        type: Number,
        default: '',

    },
    category: [{
        type: String,
        name: '',
        default: '',
    }],
    added_category: [{
        type: String,
        name: '',
        default: ''
    }],
    removed_category: [{
        type: String,
        name: '',
        default: ''
    }],
    expense_users: [{
        id: String,
        name: String
    }],
    added_expense_users: [{
        id: String,
        name: String  
    }],
    removed_expense_users: [{
        id: String,
        name: String  
    }]
});

module.exports = mongoose.model('ExpenseHistory', expenseHistorySchema);