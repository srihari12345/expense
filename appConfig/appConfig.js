let appConfig = {};

appConfig.port = 'https://fierce-stream-20585.herokuapp.com/';
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: 'mongodb+srv://srihari:srihari12345@cluster0-rghsj.mongodb.net/expense-split'
  }
appConfig.apiVersion = '/api/v1';


module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db :appConfig.db,
    apiVersion : appConfig.apiVersion
};