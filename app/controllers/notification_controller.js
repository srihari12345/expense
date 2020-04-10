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
const NotificationModel = mongoose.model('Notification');

let getNotificationsById = (req, res) => {
    console.log(req.params);
    NotificationModel.find({
            'user.id': req.params.userId
        })
        .select()
        .lean()
        .exec((err, NotificationDetails) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Notifications Controller: getNotificationsById', 10)
                let apiResponse = response.generate(true, 'Failed To Find Notifications', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(NotificationDetails)) {
                logger.info('No Notifications Found', 'Notifications Controller:getNotificationsById')
                let apiResponse = response.generate(true, 'No Notifications Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Notifications Found', 200, NotificationDetails)
                res.send(apiResponse)
            }
        })
}

let updateNotification = (req, res) => {
    return new Promise((resolve, reject) => {
        let conditions = { notifyId: req.body.notifyId }, 
        update = { isSeen : req.body.isSeen }, 
        options = { multi: true };

            NotificationModel.update(conditions, update, options).exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Notificatons Controller:updateNotification', 10)
                let apiResponse = response.generate(true, 'Failed To Update Notificatons details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Notificatons Found', 'Notificatons Controller:updateNotification')
                let apiResponse = response.generate(true, 'No Notificatons Found', 404, null)
                res.send(apiResponse)
            } else {

                let apiResponse = response.generate(false, 'Notificatons details Updated', 200, null)
                res.send(apiResponse)
            }
        });

    })
}




module.exports = {
    getNotificationsById: getNotificationsById,
    updateNotification: updateNotification
}