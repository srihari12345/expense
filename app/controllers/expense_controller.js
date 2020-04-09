const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const token = require('../libs/tokenLib')
const emailLib = require('../libs/mail-service')

/* Models */
const AuthModel = mongoose.model('Auth')
const UserModel = mongoose.model('User');
const GroupModel = mongoose.model('Group');
const ExpenseModel = mongoose.model('Expense')


let getGroupExpense = (req, res) => {

    let findUserDetails = () => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ 'userId': req.params.userId })
                .select()
                .lean()
                .exec((err, userDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'ExpenseController: findUserDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(userDetails)) {
                        logger.info('No User Found', 'Expense Controller:findExpense')
                        let apiResponse = response.generate(true, 'No User Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'User Details Found', 200, userDetails)
                        resolve(userDetails)
                    }
                })
        })
    }// end finduserDetails

    let findExpense = () => {
        return new Promise((resolve, reject) => {
            console.log("in group expense console log",req.params);
            ExpenseModel.find({ 'groupId': req.params.groupId})
                .select()
                .lean()
                .exec((err, ExpenseDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'ExpenseController: findExpense', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Expense', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ExpenseDetails)) {
                        logger.info('No ExpenseFound', 'Expense Controller:findExpense')
                        let apiResponse = response.generate(true, 'No ExpenseFound', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Expense Found', 200, ExpenseDetails)
                        resolve(apiResponse)
                    }
                })
        })
    }// end findExpense


    findUserDetails(req, res)
        .then(findExpense)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'Expense Found ', 200, resolve)
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end getAllExpenseFunction 


let getExpenseDetails = (req, res) => {
    console.log(req.params);
    ExpenseModel.find({ 'groupId': req.params.groupId })
        .select()
        .lean()
        .exec((err,ExpenseDetails) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Expense Controller: getExpenseDetails', 10)
                let apiResponse = response.generate(true, 'Failed To FindExpenses', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(ExpenseDetails)) {
                logger.info('NoExpense Found', 'Expense  Controller:getExpenseDetailsFunction')
                let apiResponse = response.generate(true, 'NoExpense Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Expense Found', 200,ExpenseDetails)
                res.send(apiResponse)
            }
        })
}// end getExpenseDetailsFunction

let updateExpenseFunction = (req, res) => {

    let findExpenseDetails = () => {
        return new Promise((resolve, reject) => {
            ExpenseModel.findOne({ 'expenseId': req.params.expenseId })
                .select()
                .lean()
                .exec((err, ExpenseDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Expense Controller: findExpenseDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Expense Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ExpenseDetails)) {
                        logger.info('No Expense Found', 'Expense  Controller:findExpenseDetails')
                        let apiResponse = response.generate(true, 'No Expense Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Expense Details Found', 200, ExpenseDetails)
                        resolve(ExpenseDetails)
                    }
                })
        })
    }// end findExpensedetails

    let updateExpense = (ExpenseDetails) => {
        return new Promise((resolve, reject) => {

            let options = req.body;
            options.updatedon = time.now(),
            options.catagory=options.catagory,
            options.amount=options.amount,
            options.expense_paid_by=options.expense_paid_by,
            options.expenseUsersInvolved=options.expenseUsersInvolved
            
            ExpenseModel.update({ 'expenseId': req.params.expenseId }, options).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Expense Controller:updateExpense', 10)
                    let apiResponse = response.generate(true, 'Failed To Update Expense details', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No Expense Found', 'Expense Controller:updateExpense')
                    let apiResponse = response.generate(true, 'No Expense Found', 404, null)
                    reject(apiResponse)
                } else {

                    let apiResponse = response.generate(false, 'Expense details Updated', 200, ExpenseDetails)
                    resolve(apiResponse)
                }
            });// end Expense model update

        })
    }// end updateExpensefunction


    findExpenseDetails(req, res)
        .then(updateExpense)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'Expense Updated', 200, "None")
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}//


let deleteExpenseFunction = (req, res) => {

    let findExpenseDetails = () => {
        return new Promise((resolve, reject) => {
            ExpenseModel.findOne({ 'expenseId': req.params.expenseId })
                .select()
                .lean()
                .exec((err, ExpenseDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Expense Controller: findExpenseDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Expense Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ExpenseDetails)) {
                        logger.info('No Expense Found', 'Expense  Controller:findExpenseDetails')
                        let apiResponse = response.generate(true, 'No Expense Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Expense Details Found', 200, ExpenseDetails)
                        resolve(ExpenseDetails)
                    }
                })
        })
    }// end validate user input

    let deleteExpense = (ExpenseDetails) => {
        return new Promise((resolve, reject) => {

            ExpenseModel.findOneAndRemove({ 'expenseId': req.params.expenseId }).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Expense Controller: deleteExpense', 10)
                    let apiResponse = response.generate(true, 'Failed To delete Expense', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No Expense Found', 'Expense Controller: deleteExpense')
                    let apiResponse = response.generate(true, 'No Expense Found', 404, null)
                    reject(apiResponse)
                } else {
                    
                    let apiResponse = response.generate(false, 'Deleted the Expense successfully', 200, null)
                    resolve(apiResponse)
                }
            });// end Expense model find and remove

        })
    }// end deleteExpense function


    findExpenseDetails(req, res)
        .then(deleteExpense)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'Deleted the Expense successfully', 200, resolve)
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end deleteExpenseFunction 


let addExpenseFunction = (req, res) => {

    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body);
                if (req.body.expenseName && req.body.amount && req.body.expensePaidBy){
                    resolve(req);
                }else {
                    logger.error('Field Missing During Expense Creation', 'ExpenseController: addExpenseFunction()', 4)
                    let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                    reject(apiResponse)
                }
            
        })
    }// end validate user input 

    let addExpense = () => {
        return new Promise((resolve, reject) => {
            //console.log(req.body)
            let newExpense = new ExpenseModel({
                expenseId: shortid.generate(),
                groupId: req.body.groupId,
                expenseName: req.body.expenseName,
                expensePaidBy: req.body.expensePaidBy,
                amount:req.body.amount,
                category:req.body.category,
                createdOn: time.now(),
                updatedOn: time.now(),
                deletedOn: '',
                expenseUsersInvolved: req.body.expenseUsersInvolved
            })

            console.log(newExpense)
            newExpense.save((err, newExpense) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'ExpenseController: addExpense', 10)
                    let apiResponse = response.generate(true, 'Failed to add new Expense', 500, null)
                    reject(apiResponse)
                } else {
                    let newExpenseObj = newExpense.toObject();
                    resolve(newExpenseObj)
                }
            })

        })
    }// end addExpense function


    validateUserInput(req, res)
        .then(addExpense)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Expense Created', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end add Expense function





module.exports = {
    
    getGroupExpense:getGroupExpense,
    getExpenseDetails:getExpenseDetails,
    updateExpenseFunction:updateExpenseFunction,
    deleteExpenseFunction:deleteExpenseFunction,
    addExpenseFunction:addExpenseFunction
   
}

