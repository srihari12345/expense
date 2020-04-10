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
    app.post(`${baseUrl}/login`, userController.loginFunction);
    app.post(`${baseUrl}/resetPassword`, userController.resetPasswordFunction);
    app.put(`${baseUrl}/updatePassword`,userController.updatePassword);
    app.put(`${baseUrl}/:userId/edit`, auth.isAuthorized, userController.editUser);
    app.post(`${baseUrl}/:userId/delete`, auth.isAuthorized, userController.deleteUser);
    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);
    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);
    app.post(`${baseUrl}/:userId/logout`, auth.isAuthorized, userController.logout);



    //group routes
    app.post(`${baseUrl}/group/createGroup`,auth.isAuthorized,groupController.addGroupFunction);
    app.put(`${baseUrl}/group/:groupId/updateGroup`,auth.isAuthorized,groupController.updateGroupFunction);
    app.get(`${baseUrl}/group/:userId/allGroup`,auth.isAuthorized,groupController.getAllGroup);
    app.get(`${baseUrl}/group/:groupId/details`,auth.isAuthorized,groupController.getGroupDetails);
    app.post(`${baseUrl}/group/:groupId/delete`,auth.isAuthorized,groupController.deleteGroupFunction);



    //expense routes
    app.get(`${baseUrl}/group/:groupId/expense`,auth.isAuthorized,expenseController.getGroupExpense);
    app.get(`${baseUrl}/group/:groupId/expense/list`,auth.isAuthorized,expenseController.getExpenseDetails);
    app.post(`${baseUrl}/group/expense/createExpense`,auth.isAuthorized,expenseController.addExpenseFunction);
    app.put(`${baseUrl}/group/:expenseId/expense/updateExpense`,auth.isAuthorized,expenseController.updateExpenseFunction);
    app.post(`${baseUrl}/expense/:expenseId/delete`,auth.isAuthorized,expenseController.deleteExpenseFunction);

    app.get(`${baseUrl}/:userId/notifications`,auth.isAuthorized, notificationsController.getNotificationsById);
    app.put(`${baseUrl}/:notifId/notifications/update`,auth.isAuthorized,notificationsController.updateNotification);
}