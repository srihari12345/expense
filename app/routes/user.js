const express = require('express');
const router = express.Router();
const userController = require("../controllers/user_controller");
const groupController = require("../controllers/group_controller");
const expenseController = require("../controllers/expense_controller")
const notificationsController = require("../controllers/notification_controller");
const appConfig = require("../../appConfig/appConfig")
const auth = require('../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}`;

 
    app.post(`${baseUrl}/signup`, userController.signUpFunction);
     /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/signup api for signup user.
     *
     * @apiParam {string} firstName First Name of the user. (body params) (required)
     * @apiParam {string} lastname Last Name of the user. (body params) (required)
     * @apiParam {string} countryName country Name of the user. (body params) (required)
     * @apiParam {string} mobileNumber Mobile Number of the user. (body params) (required)
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     * 
     * {
    "error": false,
    "message": "User created",
    "status": 200,
    "data": {
        "firstName": "sri",
        "lastName": "hari",
        "email": "funbobrock@gmail.com",
        "phoneNumber": "+91-1234567895",
        "_id": "5e90b58db8235c6aca26f3d0",
        "userId": "oE_P-CoP0",
        "createdOn": "2020-04-10T18:06:05.000Z",
        "__v": 0
    }
}

*/
    app.post(`${baseUrl}/login`, userController.loginFunction);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/login api for Login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     * 
     * 
     * {
    "error": false,
    "message": "Login Successful",
    "status": 200,
    "data": {
        "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkY5c08tNjYtUSIsImlhdCI6MTU4NjU0MjEyMzk1MCwiZXhwIjoxNTg2NjI4NTIzLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImZpcnN0TmFtZSI6InNyaSIsImxhc3ROYW1lIjoiaGFyaSIsImVtYWlsIjoiZnVuYm9icm9ja0BnbWFpbC5jb20iLCJwaG9uZU51bWJlciI6Iis5MS0xMjM0NTY3ODk1IiwidXNlcklkIjoib0VfUC1Db1AwIn19.Wr6dCy6yy9fZZCfIJKAKP5gUksenGZoFyXouxK5_kZw",
        "userDetails": {
            "firstName": "sri",
            "lastName": "hari",
            "email": "funbobrock@gmail.com",
            "phoneNumber": "+91-1234567895",
            "userId": "oE_P-CoP0"
        }
    }
}

*/

    app.post(`${baseUrl}/resetPassword`, userController.resetPasswordFunction);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1resetPassword api for Password Reset.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password reset instructions sent successfully",
            "status": 200,
            "data": None
        }    
    */

    app.put(`${baseUrl}/updatePassword`,userController.updatePassword);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {put} /api/v1/updatePassword api for Updating Password after Reset.
     *
     * @apiParam {string} validationToken validationToken of the user recieved on Email. (body params) (required)
     * @apiParam {string} password new password of the user . (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password Update Successfully",
            "status": 200,
            "data": "None"
            
        }
    */


    app.put(`${baseUrl}/:userId/edit`, auth.isAuthorized, userController.editUser);

     /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {put} /api/v1/:userId/edit api for Updating User Details.
     *
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} firstName First Name of the user. (body params) (optional)
     * @apiParam {string} lastname Last Name of the user. (body params) (optional)
     * @apiParam {string} mobileNumber Mobile Number of the user. (body params) (optional)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "User details Updated",
            "status": 200,
            "data": "None"
        }
    */
    app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUser);
     /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/:userId/delete api to Delete User.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
    {
        "error": false,
        "message": "Deleted the user successfully",
        "status": 200,
        "data": {
            "firstName": "srihari hari",
            "lastName": "hari hari",
            "password": "$2a$10$vESfXUSBd0bwA1YxHTvkfeYST0g4VQA37X.Nnwv/FqNzfIKRygu2O",
            "email": "funbobrock@gmail.com",
            "phoneNumber": "+91-1234567895",
            "_id": "5e90b58db8235c6aca26f3d0",
            "userId": "oE_P-CoP0",
            "createdOn": "2020-04-10T18:06:05.000Z",
            "__v": 0
        }
    }

    */
    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/view/all api for Getting all users.
     *
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:

    {
        "error": false,
        "message": "All User Details Found",
        "status": 200,
        "data": [
            {
                "firstName": "Srihari",
                "lastName": "M N",
                "password": "$2b$10$jfKN4vA2B0mlgr8M31uaFuZUafwspG1zsM2wCKD0VyCcjMZ55vno.",
                "email": "srih854@gmail.com",
                "phoneNumber": "+91-1234567890",
                "userId": "9ACpxsNZ-",
                "createdOn": "2020-04-08T03:53:14.000Z"
            },
            {
                "firstName": "hari",
                "lastName": "M N",
                "password": "$2b$10$oTotEfGz8P6QCnoKsb8.rOpMx5M3DHXp8upf4jF.4rbLt8q/aisMe",
                "email": "sriharimn28@gmail.com",
                "phoneNumber": "+91-7894561230",
                "userId": "8cnTvKbGY",
                "createdOn": "2020-04-08T03:54:07.000Z"
            },
            {
                "firstName": "Tarakeshava",
                "lastName": "C R",
                "password": "$2a$10$R9AYwawz5HrqAOiXu.NzZepe9aUPlIfP9E6nh1IfB23xl.zAIUs7.",
                "email": "tarakeshavacr@gmail.com",
                "phoneNumber": "+353-9880393073",
                "userId": "EPcD4B9KF",
                "createdOn": "2020-04-09T15:02:56.000Z"
            },
            {
                "firstName": "sri",
                "lastName": "",
                "password": "$2a$10$jPJa5amaH4Dnua55GP25K.ZV6tt8YtnLMk4E2NBXv/4Lch1sRuI0i",
                "email": "funnybobrock@gmail.com",
                "phoneNumber": "+91-1234567895",
                "userId": "1d8I51nfF",
                "createdOn": "2020-04-10T18:04:21.000Z"
            }
        ]
    }

    */


    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/:userId/details api for getting user details.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     * 
     * {
    "error": false,
    "message": "User Details Found",
    "status": 200,
    "data": {
        "firstName": "Srihari",
        "lastName": "M N",
        "email": "srih854@gmail.com",
        "phoneNumber": "+91-1234567890",
        "userId": "9ACpxsNZ-",
        "createdOn": "2020-04-08T03:53:14.000Z"
    }
}
*/

    app.post(`${baseUrl}/:userId/logout`, auth.isAuthorized, userController.logout);
     /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/:userId/logout api to logout from application.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Logged Out Successfully",
            "status": 200,
            "data": null
        }
    */




    //group routes
    app.post(`${baseUrl}/group/createGroup`,auth.isAuthorized,groupController.addGroupFunction);
/**
     * @apiGroup groups
     * @apiVersion  1.0.0
     * @api {post} /api/v1/group/createGroup api for Creatingb group and adding users to it
     *
     * @apiParam {string} group name which is group_name. (body params) (required)
     * @apiParam {string} description of the group. (body params) (required)
     * @apiParam {string} group which users to add in your group. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
    {
        group_creatorId: '8cnTvKbGY',
        group_creatorName: 'hari M N',
        group_name: 'test 123',
        description: 'test 123',
        updatedon: 2020-04-10T18:27:18.000Z,
        group_updater_id: '8cnTvKbGY',
        group_updater_name: 'hari M N',
        expenses: [],
        _id: 5e90ba86b8235c6aca26f3d2,
        groupId: 'mYl9jlAQo',
        group_createdon: 2020-04-10T18:27:18.000Z,
        group_users: [
          {
            _id: 5e90ba86b8235c6aca26f3d3,
            item_id: '9ACpxsNZ-',
            item_text: 'Srihari M N'
          },
          {
            _id: 5e90ba86b8235c6aca26f3d4,
            item_id: '8cnTvKbGY',
            item_text: 'hari M N'
          },
          {
            _id: 5e90ba86b8235c6aca26f3d5,
            item_id: '1d8I51nfF',
            item_text: 'sri '
          },
          {
            _id: 5e90ba86b8235c6aca26f3d6,
            item_id: 'EPcD4B9KF',
            item_text: 'Tarakeshava C R'
          }
      */
   
    app.get(`${baseUrl}/group/:userId/allGroup`,auth.isAuthorized,groupController.getAllGroup);
    /**
     * @apiGroup groups
     * @apiVersion  1.0.0
     * @api {post} /api/v1/group/:userId/allGroup api for gettin all groups which are created
     *

     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     * 
     * 
     * {
    "error": false,
    "message": "Groups Found and Grouped",
    "status": 200,
    "data": [
        {
            "_id": "5e908eb67c8dae486590513e",
            "group_creatorId": "9ACpxsNZ-",
            "group_creatorName": "Srihari M N",
            "group_name": "cbcvb",
            "description": "cbcvb",
            "updatedon": "2020-04-10T15:20:22.000Z",
            "group_updater_id": "9ACpxsNZ-",
            "group_updater_name": "Srihari M N",
            "expenses": [],
            "groupId": "biltYnP-q",
            "group_createdon": "2020-04-10T15:20:22.000Z",
            "group_users": [
                {
                    "_id": "5e908eb67c8dae486590513f",
                    "item_id": "9ACpxsNZ-",
                    "item_text": "Srihari M N"
                },
                {
                    "_id": "5e908eb67c8dae4865905140",
                    "item_id": "EPcD4B9KF",
                    "item_text": "Tarakeshava C R"
                }
            ],
            "__v": 0
        }
    ]
}

*/


    app.get(`${baseUrl}/group/:groupId/details`,auth.isAuthorized,groupController.getGroupDetails);
 /**
     * @apiGroup groups
     * @apiVersion  1.0.0
     * @api {post} /api/v1/group/:groupId/details api for gettin group which are created
     *

     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     * 
     * 
    {
        "error": false,
        "message": "Group Found",
        "status": 200,
        "data": {
            "_id": "5e908eb67c8dae486590513e",
            "group_creatorId": "9ACpxsNZ-",
            "group_creatorName": "Srihari M N",
            "group_name": "cbcvb",
            "description": "cbcvb",
            "updatedon": "2020-04-10T15:20:22.000Z",
            "group_updater_id": "9ACpxsNZ-",
            "group_updater_name": "Srihari M N",
            "expenses": [],
            "groupId": "biltYnP-q",
            "group_createdon": "2020-04-10T15:20:22.000Z",
            "group_users": [
                {
                    "_id": "5e908eb67c8dae486590513f",
                    "item_id": "9ACpxsNZ-",
                    "item_text": "Srihari M N"
                },
                {
                    "_id": "5e908eb67c8dae4865905140",
                    "item_id": "EPcD4B9KF",
                    "item_text": "Tarakeshava C R"
                }
            ],
            "__v": 0
        }
    }
    */

    app.post(`${baseUrl}/group/:groupId/delete`,auth.isAuthorized,groupController.deleteGroupFunction);
/**
     * @apiGroup groups
     * @apiVersion  1.0.0
     * @api {post} /api/v1/group/:groupId/delete api for delete a group

     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     * 
     * 
     *  "error": false,
        "message": "Deleted the user successfully",
        "status": 200,
        "data":null
     * 
     * */


    //expense routes
    app.get(`${baseUrl}/group/:groupId/expense`,auth.isAuthorized,expenseController.getGroupExpense);
    app.get(`${baseUrl}/group/:groupId/expense/list`,auth.isAuthorized,expenseController.getExpenseDetails);
    

    /**
     * @apiGroup expesne
     * @apiVersion  1.0.0
     * @api {post} /api/v1/group/:groupId/createExpense api for Creating expense and adding users to it
     *
     * @apiParam {string} expense name which is expense_name. (body params) (required)
     * @apiParam {string} amount of the group. (body params) (required)
     * @apiParam {string} expense paid by uers involved of the group. (body params) (required)
     * @apiParam {string} expense users involved to see who has paid and how will he re pay user paid of the group. (body params) (required)
     *
     *  @apiParam {string} group which users to add in your group. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
    {
        "error": false,
        "message": "Expense Found",
        "status": 200,
        "data": [
            {
                "_id": "5e90bec35c2bfe6f8a777380",
                "expenseName": "test espense",
                "amount": 500,
                "updatedOn": "2020-04-10T18:45:23.000Z",
                "deletedOn": null,
                "groupId": "mYl9jlAQo",
                "expenseId": "ypoA4rgxn",
                "expensePaidBy": [
                    {
                        "_id": "5e90bec35c2bfe6f8a777381",
                        "item_id": "9ACpxsNZ-",
                        "item_text": "Srihari M N"
                    }
                ],
                "category": [
                    {
                        "_id": "5e90bec35c2bfe6f8a777382",
                        "item_id": "2",
                        "item_text": "Food and Dining"
                    }
                ],
                "createdOn": "2020-04-10T18:45:23.000Z",
                "expenseUsersInvolved": [
                    {
                        "_id": "5e90bec35c2bfe6f8a777383",
                        "item_id": "1d8I51nfF",
                        "item_text": "sri "
                    },
                    {
                        "_id": "5e90bec35c2bfe6f8a777384",
                        "item_id": "EPcD4B9KF",
                        "item_text": "Tarakeshava C R"
                    },
                    {
                        "_id": "5e90bec35c2bfe6f8a777385",
                        "item_id": "9ACpxsNZ-",
                        "item_text": "Srihari M N"
                    }
                ],
                "__v": 0
            }
        ]
    }
    */

    
    app.post(`${baseUrl}/group/expense/createExpense`,auth.isAuthorized,expenseController.addExpenseFunction);

     /**
     * @apiGroup expesne
     * @apiVersion  1.0.0
     * @api {post} /api/v1/group/:groupId/createExpense api for Creating expense and adding users to it
     *
     * @apiParam {string} expense name which is expense_name. (body params) (required)
     * @apiParam {string} amount of the group. (body params) (required)
     * @apiParam {string} expense paid by uers involved of the group. (body params) (required)
     * @apiParam {string} expense users involved to see who has paid and how will he re pay user paid of the group. (body params) (required)
     *
     *  @apiParam {string} group which users to add in your group. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
    {
        expenseName: 'test espense',
        amount: 500,
        updatedOn: 2020-04-10T18:45:23.000Z,
        deletedOn: null,
        groupId: 'mYl9jlAQo',
        _id: 5e90bec35c2bfe6f8a777380,
        expenseId: 'ypoA4rgxn',
        expensePaidBy: [
          {
            _id: 5e90bec35c2bfe6f8a777381,
            item_id: '9ACpxsNZ-',
            item_text: 'Srihari M N'
          }
        ],
        category: [
          {
            _id: 5e90bec35c2bfe6f8a777382,
            item_id: '2',
            item_text: 'Food and Dining'
          }
        ],
        createdOn: 2020-04-10T18:45:23.000Z,
        expenseUsersInvolved: [
          {
            _id: 5e90bec35c2bfe6f8a777383,
            item_id: '1d8I51nfF',
            item_text: 'sri '
          },
          {
            _id: 5e90bec35c2bfe6f8a777384,
            item_id: 'EPcD4B9KF',
            item_text: 'Tarakeshava C R'
          },
          {
            _id: 5e90bec35c2bfe6f8a777385,
            item_id: '9ACpxsNZ-',
            item_text: 'Srihari M N'
          }

          */
   
    app.post(`${baseUrl}/expense/:expenseId/delete`,auth.isAuthorized,expenseController.deleteExpenseFunction);
    
    /**
     * @apiGroup expesne
     * @apiVersion  1.0.0
     * @api {post} /api/v1/expense/:expenseId/delete api for deleting expense
     *
     * @apiParam {string} expense name which is expense_name. (body params) (required)
     
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
    
    {
        "error": false,
        "message": "Deleted the user successfully",
        "status": 200,
        "data": {
*/

    //notification routes
    
    
    app.get(`${baseUrl}/:userId/notifications`,auth.isAuthorized, notificationsController.getNotificationsById);
    /**
     * @apiGroup notification
     * @apiVersion  1.0.0
     * @api {post} /api/v1/:userId/notifications api for Creating expense history or notification and adding users to it
     *
     * @apiParam {string} expense name which is expense_name. (body params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
    {
        "error": false,
        "message": "Notifications Found",
        "status": 200,
        "data": [
            {
                "_id": "5e903d31fcff891d5786d571",
                "notificationText": "dsfsdf group is created and you are added to this group",
                "isSeen": true,
                "notifyId": "xwn6OrRcci",
                "user": {
                    "id": "9ACpxsNZ-",
                    "name": "Srihari M N"
                },
                "createdon": "2020-04-10T09:32:33.000Z",
                "updatedon": "2020-04-10T09:32:33.000Z",
                "__v": 0
            },
            {
                "_id": "5e903d31fcff891d5786d573",
                "notificationText": "dsfsdf group is created and you are added to this group",
                "isSeen": true,
                "notifyId": "S8Cv9ghHV-",
                "user": {
                    "id": "9ACpxsNZ-",
                    "name": "Srihari M N"
                },
                "createdon": "2020-04-10T09:32:33.000Z",
                "updatedon": "2020-04-10T09:32:33.000Z",
                "__v": 0
            },
            {
                "_id": "5e903d99fcff891d5786d577",
                "notificationText": "dfs group is created and you are added to this group",
                "isSeen": true,
                "notifyId": "b0WWC3aeTg",
                "user": {
                    "id": "9ACpxsNZ-",
                    "name": "Srihari M N"
                },
                "createdon": "2020-04-10T09:34:17.000Z",
                "updatedon": "2020-04-10T09:34:17.000Z",
                "__v": 0
            },
            {
                "_id": "5e903f3ce07b681ea7791b0a",
                "notificationText": "dfgdf group is created and you are added to this group",
                "isSeen": true,
                "notifyId": "X-ASKWmdEc",
                "user": {
                    "id": "9ACpxsNZ-",
                    "name": "Srihari M N"
                },
                "createdon": "2020-04-10T09:41:16.000Z",
                "updatedon": "2020-04-10T09:41:16.000Z",
                "__v": 0
            },
            */

    
    app.put(`${baseUrl}/:notifId/notifications/update`,auth.isAuthorized,notificationsController.updateNotification);
}