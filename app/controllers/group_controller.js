const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const token = require('../libs/tokenLib')
const AuthModel = mongoose.model('Auth')
const emailLib = require('../libs/mail-service')

/* Models */
const UserModel = mongoose.model('User');
const GroupModel = mongoose.model('Group');
const NotificationModel = mongoose.model('Notification')

const applicationUrl = 'http://localhost:3000/'


let getAllGroup = (req, res) => {

    let findUserDetails = () => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({
                    'userId': req.params.userId
                })
                .select()
                .lean()
                .exec((err, userDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Group Controller: findUserDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(userDetails)) {
                        logger.info('No User Found', 'Group  Controller:findGroups')
                        let apiResponse = response.generate(true, 'No User Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'User Details Found', 200, userDetails)
                        resolve(userDetails)
                    }
                })
        })
    } // end finduserDetails

    let findGroups = () => {
        return new Promise((resolve, reject) => {

            GroupModel.find({
                    'group_creatorId': req.params.userId
                })
                .select()
                .lean()
                .exec((err, GroupDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Group Controller: findGroups', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Groups', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(GroupDetails)) {
                        logger.info('No Group Found', 'Group  Controller:findGroups')
                        let apiResponse = response.generate(true, 'No Group Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Groups Found and Grouped', 200, GroupDetails)
                        resolve(apiResponse)
                    }
                })
        })
    } // end findGroups


    findUserDetails(req, res)
        .then(findGroups)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'Groups Found and Grouped', 200, resolve)
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

} // end getAllGroupsFunction 



let addGroupFunction = (req, res) => {

    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            console.log(req.body);
            if (req.body.group_name && req.body.group_creatorId && req.body.group_creatorName) {
                resolve(req);
            } else {
                logger.error('Field Missing During Group Creation', 'GroupController: addGroupFunction()', 4)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }

        })
    } // end validate user input 

    let addGroup = () => {
        return new Promise((resolve, reject) => {
            //console.log(req.body)
            let newGroup = new GroupModel({
                groupId: shortid.generate(),
                group_name: req.body.group_name,
                group_creatorId: req.body.group_creatorId,
                group_creatorName: req.body.group_creatorName,
                description: req.body.description,
                group_updater_id: req.body.group_updater_id,
                group_updater_name: req.body.group_updater_name,
                group_createdon: time.now(),
                updatedon: time.now(),
                group_users: req.body.group_users,
            })


            console.log(newGroup)


            newGroup.save((err, newGroup) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'groupController: addGroup', 10)
                    let apiResponse = response.generate(true, 'Failed to add new group', 500, null)
                    reject(apiResponse)
                } else {
                    let newGroupObj = newGroup.toObject();
                    resolve(newGroupObj)
                }
            })

        })
    } // end addGroup function

    let notification = () => {

        return new Promise((resolve, reject) => {

            let newNotification = new NotificationModel({

                notifyId: shortid.generate(),
                notificationtext: addGroup.newGroupObj.group_name+"Group is created and you are added to this group",
                user: req.body.user,
                createdon: time.now(),
                updatedon: time.now(),
                isSeen: false

            })

            console.log(newNotification)
            newNotification.save((err, newNotification) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'groupController: addGroup', 10)
                    let apiResponse = response.generate(true, 'Failed to add new group notify', 500, null)
                    reject(apiResponse)
                } else {
                    let newNotificationObj = newNotification.toObject();
                    resolve(newNotificationObj)
                }

            })
        })
    }




    validateUserInput(req, res)
    .then(addGroup)
    .then(notification)


        .then((resolve) => {
            let apiResponse = response.generate(false, 'Group Created', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

} // end add group function



let updateGroupFunction = (req, res) => {

    let findGroupDetails = () => {
        return new Promise((resolve, reject) => {
            GroupModel.findOne({
                    'groupId': req.params.groupId
                })
                .select()
                .lean()
                .exec((err, GroupDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Group Controller: findGroupDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Group Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(GroupDetails)) {
                        logger.info('No Group Found', 'Group  Controller:findGroupDetails')
                        let apiResponse = response.generate(true, 'No Group Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Group Details Found', 200, GroupDetails)
                        resolve(GroupDetails)
                    }
                })
        })
    } // end findGroupdetails

    let updateGroup = (GroupDetails) => {
        return new Promise((resolve, reject) => {

            let options = req.body;
            options.updatedon = time.now(),
                options.group_updater_id = options.group_updater_id,
                options.group_updater_name = options.group_updater_name

            GroupModel.update({
                'groupId': req.params.groupId
            }, options).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Group Controller:updateGroup', 10)
                    let apiResponse = response.generate(true, 'Failed To Update group details', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No Group Found', 'Group Controller:updateGroup')
                    let apiResponse = response.generate(true, 'No Group Found', 404, null)
                    reject(apiResponse)
                } else {

                    let apiResponse = response.generate(false, 'Group details Updated', 200, GroupDetails)
                    resolve(apiResponse)
                }
            }); // end Group model update

        })
    } // end updateGroupfunction


    findGroupDetails(req, res)
        .then(updateGroup)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'Group Updated', 200, "None")
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

} // end updategroupFunction 

let getGroupDetails = (req, res) => {
    GroupModel.findOne({
            'groupId': req.params.groupId
        })
        .select()
        .lean()
        .exec((err, GroupDetails) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Group Controller: getGroupDetails', 10)
                let apiResponse = response.generate(true, 'Failed To FindGroups', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(GroupDetails)) {
                logger.info('NoGroup Found', 'Group  Controller:getGroupDetailsFunction')
                let apiResponse = response.generate(true, 'NoGroup Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Group Found', 200, GroupDetails)
                res.send(apiResponse)
            }
        })
} // end getGroupDetailsFunction


let deleteGroupFunction = (req, res) => {

    let findGroupDetails = () => {
        return new Promise((resolve, reject) => {
            GroupModel.findOne({
                    'groupId': req.params.groupId
                })
                .select()
                .lean()
                .exec((err, GroupDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Group Controller: findGroupDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Group Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(GroupDetails)) {
                        logger.info('No Group Found', 'Group  Controller:findGroupDetails')
                        let apiResponse = response.generate(true, 'No Group Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Group Details Found', 200, GroupDetails)
                        resolve(GroupDetails)
                    }
                })
        })
    } // end validate user input

    let deleteGroup = (GroupDetails) => {
        return new Promise((resolve, reject) => {

            GroupModel.findOneAndRemove({
                'groupId': req.params.groupId
            }).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Group Controller: deleteGroup', 10)
                    let apiResponse = response.generate(true, 'Failed To delete Group', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No Group Found', 'Group Controller: deleteGroup')
                    let apiResponse = response.generate(true, 'No Group Found', 404, null)
                    reject(apiResponse)
                } else {

                    let apiResponse = response.generate(false, 'Deleted the Group successfully', 200, null)
                    resolve(apiResponse)
                }
            }); // end Group model find and remove

        })
    } // end deleteGroup function


    findGroupDetails(req, res)
        .then(deleteGroup)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'Deleted the Group successfully', 200, resolve)
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

} // end deleteGroupFunction 




module.exports = {
    addGroupFunction: addGroupFunction,
    updateGroupFunction: updateGroupFunction,
    getAllGroup: getAllGroup,
    getGroupDetails: getGroupDetails,
    deleteGroupFunction: deleteGroupFunction
}