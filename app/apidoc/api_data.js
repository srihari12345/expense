define({ "api": [
  {
    "group": "expesne",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/expense/:expenseId/delete",
    "title": "api for deleting expense",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expense",
            "description": "<p>name which is expense_name. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"Deleted the user successfully\",\n    \"status\": 200,\n    \"data\": {",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "expesne",
    "name": "PostApiV1ExpenseExpenseidDelete"
  },
  {
    "group": "expesne",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/group/:groupId/createExpense",
    "title": "api for Creating expense and adding users to it",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expense",
            "description": "<p>name which is expense_name. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "amount",
            "description": "<p>of the group. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "group",
            "description": "<p>which users to add in your group. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Expense Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5e90bec35c2bfe6f8a777380\",\n            \"expenseName\": \"test espense\",\n            \"amount\": 500,\n            \"updatedOn\": \"2020-04-10T18:45:23.000Z\",\n            \"deletedOn\": null,\n            \"groupId\": \"mYl9jlAQo\",\n            \"expenseId\": \"ypoA4rgxn\",\n            \"expensePaidBy\": [\n                {\n                    \"_id\": \"5e90bec35c2bfe6f8a777381\",\n                    \"item_id\": \"9ACpxsNZ-\",\n                    \"item_text\": \"Srihari M N\"\n                }\n            ],\n            \"category\": [\n                {\n                    \"_id\": \"5e90bec35c2bfe6f8a777382\",\n                    \"item_id\": \"2\",\n                    \"item_text\": \"Food and Dining\"\n                }\n            ],\n            \"createdOn\": \"2020-04-10T18:45:23.000Z\",\n            \"expenseUsersInvolved\": [\n                {\n                    \"_id\": \"5e90bec35c2bfe6f8a777383\",\n                    \"item_id\": \"1d8I51nfF\",\n                    \"item_text\": \"sri \"\n                },\n                {\n                    \"_id\": \"5e90bec35c2bfe6f8a777384\",\n                    \"item_id\": \"EPcD4B9KF\",\n                    \"item_text\": \"Tarakeshava C R\"\n                },\n                {\n                    \"_id\": \"5e90bec35c2bfe6f8a777385\",\n                    \"item_id\": \"9ACpxsNZ-\",\n                    \"item_text\": \"Srihari M N\"\n                }\n            ],\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "expesne",
    "name": "PostApiV1GroupGroupidCreateexpense"
  },
  {
    "group": "expesne",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/group/:groupId/createExpense",
    "title": "api for Creating expense and adding users to it",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expense",
            "description": "<p>name which is expense_name. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "amount",
            "description": "<p>of the group. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "group",
            "description": "<p>which users to add in your group. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    expenseName: 'test espense',\n    amount: 500,\n    updatedOn: 2020-04-10T18:45:23.000Z,\n    deletedOn: null,\n    groupId: 'mYl9jlAQo',\n    _id: 5e90bec35c2bfe6f8a777380,\n    expenseId: 'ypoA4rgxn',\n    expensePaidBy: [\n      {\n        _id: 5e90bec35c2bfe6f8a777381,\n        item_id: '9ACpxsNZ-',\n        item_text: 'Srihari M N'\n      }\n    ],\n    category: [\n      {\n        _id: 5e90bec35c2bfe6f8a777382,\n        item_id: '2',\n        item_text: 'Food and Dining'\n      }\n    ],\n    createdOn: 2020-04-10T18:45:23.000Z,\n    expenseUsersInvolved: [\n      {\n        _id: 5e90bec35c2bfe6f8a777383,\n        item_id: '1d8I51nfF',\n        item_text: 'sri '\n      },\n      {\n        _id: 5e90bec35c2bfe6f8a777384,\n        item_id: 'EPcD4B9KF',\n        item_text: 'Tarakeshava C R'\n      },\n      {\n        _id: 5e90bec35c2bfe6f8a777385,\n        item_id: '9ACpxsNZ-',\n        item_text: 'Srihari M N'\n      }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "expesne",
    "name": "PostApiV1GroupGroupidCreateexpense"
  },
  {
    "group": "groups",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/group/createGroup",
    "title": "api for Creatingb group and adding users to it",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "group",
            "description": "<p>name which is group_name. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>of the group. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    group_creatorId: '8cnTvKbGY',\n    group_creatorName: 'hari M N',\n    group_name: 'test 123',\n    description: 'test 123',\n    updatedon: 2020-04-10T18:27:18.000Z,\n    group_updater_id: '8cnTvKbGY',\n    group_updater_name: 'hari M N',\n    expenses: [],\n    _id: 5e90ba86b8235c6aca26f3d2,\n    groupId: 'mYl9jlAQo',\n    group_createdon: 2020-04-10T18:27:18.000Z,\n    group_users: [\n      {\n        _id: 5e90ba86b8235c6aca26f3d3,\n        item_id: '9ACpxsNZ-',\n        item_text: 'Srihari M N'\n      },\n      {\n        _id: 5e90ba86b8235c6aca26f3d4,\n        item_id: '8cnTvKbGY',\n        item_text: 'hari M N'\n      },\n      {\n        _id: 5e90ba86b8235c6aca26f3d5,\n        item_id: '1d8I51nfF',\n        item_text: 'sri '\n      },\n      {\n        _id: 5e90ba86b8235c6aca26f3d6,\n        item_id: 'EPcD4B9KF',\n        item_text: 'Tarakeshava C R'\n      }",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "groups",
    "name": "PostApiV1GroupCreategroup"
  },
  {
    "group": "groups",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/group/:groupId/delete",
    "title": "api for delete a group",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n\n\"error\": false,\n       \"message\": \"Deleted the user successfully\",\n       \"status\": 200,\n       \"data\":null",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "groups",
    "name": "PostApiV1GroupGroupidDelete"
  },
  {
    "group": "groups",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/group/:groupId/details",
    "title": "api for gettin group which are created",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n\n{\n    \"error\": false,\n    \"message\": \"Group Found\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5e908eb67c8dae486590513e\",\n        \"group_creatorId\": \"9ACpxsNZ-\",\n        \"group_creatorName\": \"Srihari M N\",\n        \"group_name\": \"cbcvb\",\n        \"description\": \"cbcvb\",\n        \"updatedon\": \"2020-04-10T15:20:22.000Z\",\n        \"group_updater_id\": \"9ACpxsNZ-\",\n        \"group_updater_name\": \"Srihari M N\",\n        \"expenses\": [],\n        \"groupId\": \"biltYnP-q\",\n        \"group_createdon\": \"2020-04-10T15:20:22.000Z\",\n        \"group_users\": [\n            {\n                \"_id\": \"5e908eb67c8dae486590513f\",\n                \"item_id\": \"9ACpxsNZ-\",\n                \"item_text\": \"Srihari M N\"\n            },\n            {\n                \"_id\": \"5e908eb67c8dae4865905140\",\n                \"item_id\": \"EPcD4B9KF\",\n                \"item_text\": \"Tarakeshava C R\"\n            }\n        ],\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "groups",
    "name": "PostApiV1GroupGroupidDetails"
  },
  {
    "group": "groups",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/group/:userId/allGroup",
    "title": "api for gettin all groups which are created",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n\n{\n    \"error\": false,\n    \"message\": \"Groups Found and Grouped\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5e908eb67c8dae486590513e\",\n            \"group_creatorId\": \"9ACpxsNZ-\",\n            \"group_creatorName\": \"Srihari M N\",\n            \"group_name\": \"cbcvb\",\n            \"description\": \"cbcvb\",\n            \"updatedon\": \"2020-04-10T15:20:22.000Z\",\n            \"group_updater_id\": \"9ACpxsNZ-\",\n            \"group_updater_name\": \"Srihari M N\",\n            \"expenses\": [],\n            \"groupId\": \"biltYnP-q\",\n            \"group_createdon\": \"2020-04-10T15:20:22.000Z\",\n            \"group_users\": [\n                {\n                    \"_id\": \"5e908eb67c8dae486590513f\",\n                    \"item_id\": \"9ACpxsNZ-\",\n                    \"item_text\": \"Srihari M N\"\n                },\n                {\n                    \"_id\": \"5e908eb67c8dae4865905140\",\n                    \"item_id\": \"EPcD4B9KF\",\n                    \"item_text\": \"Tarakeshava C R\"\n                }\n            ],\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "groups",
    "name": "PostApiV1GroupUseridAllgroup"
  },
  {
    "group": "notification",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/:userId/notifications",
    "title": "api for Creating expense history or notification and adding users to it",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "expense",
            "description": "<p>name which is expense_name. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Notifications Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5e903d31fcff891d5786d571\",\n            \"notificationText\": \"dsfsdf group is created and you are added to this group\",\n            \"isSeen\": true,\n            \"notifyId\": \"xwn6OrRcci\",\n            \"user\": {\n                \"id\": \"9ACpxsNZ-\",\n                \"name\": \"Srihari M N\"\n            },\n            \"createdon\": \"2020-04-10T09:32:33.000Z\",\n            \"updatedon\": \"2020-04-10T09:32:33.000Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5e903d31fcff891d5786d573\",\n            \"notificationText\": \"dsfsdf group is created and you are added to this group\",\n            \"isSeen\": true,\n            \"notifyId\": \"S8Cv9ghHV-\",\n            \"user\": {\n                \"id\": \"9ACpxsNZ-\",\n                \"name\": \"Srihari M N\"\n            },\n            \"createdon\": \"2020-04-10T09:32:33.000Z\",\n            \"updatedon\": \"2020-04-10T09:32:33.000Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5e903d99fcff891d5786d577\",\n            \"notificationText\": \"dfs group is created and you are added to this group\",\n            \"isSeen\": true,\n            \"notifyId\": \"b0WWC3aeTg\",\n            \"user\": {\n                \"id\": \"9ACpxsNZ-\",\n                \"name\": \"Srihari M N\"\n            },\n            \"createdon\": \"2020-04-10T09:34:17.000Z\",\n            \"updatedon\": \"2020-04-10T09:34:17.000Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5e903f3ce07b681ea7791b0a\",\n            \"notificationText\": \"dfgdf group is created and you are added to this group\",\n            \"isSeen\": true,\n            \"notifyId\": \"X-ASKWmdEc\",\n            \"user\": {\n                \"id\": \"9ACpxsNZ-\",\n                \"name\": \"Srihari M N\"\n            },\n            \"createdon\": \"2020-04-10T09:41:16.000Z\",\n            \"updatedon\": \"2020-04-10T09:41:16.000Z\",\n            \"__v\": 0\n        },",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "notification",
    "name": "PostApiV1UseridNotifications"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/:userId/details",
    "title": "api for getting user details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"firstName\": \"Srihari\",\n        \"lastName\": \"M N\",\n        \"email\": \"srih854@gmail.com\",\n        \"phoneNumber\": \"+91-1234567890\",\n        \"userId\": \"9ACpxsNZ-\",\n        \"createdOn\": \"2020-04-08T03:53:14.000Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1UseridDetails"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/view/all",
    "title": "api for Getting all users.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"All User Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"firstName\": \"Srihari\",\n            \"lastName\": \"M N\",\n            \"password\": \"$2b$10$jfKN4vA2B0mlgr8M31uaFuZUafwspG1zsM2wCKD0VyCcjMZ55vno.\",\n            \"email\": \"srih854@gmail.com\",\n            \"phoneNumber\": \"+91-1234567890\",\n            \"userId\": \"9ACpxsNZ-\",\n            \"createdOn\": \"2020-04-08T03:53:14.000Z\"\n        },\n        {\n            \"firstName\": \"hari\",\n            \"lastName\": \"M N\",\n            \"password\": \"$2b$10$oTotEfGz8P6QCnoKsb8.rOpMx5M3DHXp8upf4jF.4rbLt8q/aisMe\",\n            \"email\": \"sriharimn28@gmail.com\",\n            \"phoneNumber\": \"+91-7894561230\",\n            \"userId\": \"8cnTvKbGY\",\n            \"createdOn\": \"2020-04-08T03:54:07.000Z\"\n        },\n        {\n            \"firstName\": \"Tarakeshava\",\n            \"lastName\": \"C R\",\n            \"password\": \"$2a$10$R9AYwawz5HrqAOiXu.NzZepe9aUPlIfP9E6nh1IfB23xl.zAIUs7.\",\n            \"email\": \"tarakeshavacr@gmail.com\",\n            \"phoneNumber\": \"+353-9880393073\",\n            \"userId\": \"EPcD4B9KF\",\n            \"createdOn\": \"2020-04-09T15:02:56.000Z\"\n        },\n        {\n            \"firstName\": \"sri\",\n            \"lastName\": \"\",\n            \"password\": \"$2a$10$jPJa5amaH4Dnua55GP25K.ZV6tt8YtnLMk4E2NBXv/4Lch1sRuI0i\",\n            \"email\": \"funnybobrock@gmail.com\",\n            \"phoneNumber\": \"+91-1234567895\",\n            \"userId\": \"1d8I51nfF\",\n            \"createdOn\": \"2020-04-10T18:04:21.000Z\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "GetApiV1ViewAll"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/login",
    "title": "api for Login.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n\n{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IkY5c08tNjYtUSIsImlhdCI6MTU4NjU0MjEyMzk1MCwiZXhwIjoxNTg2NjI4NTIzLCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImZpcnN0TmFtZSI6InNyaSIsImxhc3ROYW1lIjoiaGFyaSIsImVtYWlsIjoiZnVuYm9icm9ja0BnbWFpbC5jb20iLCJwaG9uZU51bWJlciI6Iis5MS0xMjM0NTY3ODk1IiwidXNlcklkIjoib0VfUC1Db1AwIn19.Wr6dCy6yy9fZZCfIJKAKP5gUksenGZoFyXouxK5_kZw\",\n        \"userDetails\": {\n            \"firstName\": \"sri\",\n            \"lastName\": \"hari\",\n            \"email\": \"funbobrock@gmail.com\",\n            \"phoneNumber\": \"+91-1234567895\",\n            \"userId\": \"oE_P-CoP0\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1Login"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/signup",
    "title": "api for signup user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryName",
            "description": "<p>country Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"firstName\": \"sri\",\n        \"lastName\": \"hari\",\n        \"email\": \"funbobrock@gmail.com\",\n        \"phoneNumber\": \"+91-1234567895\",\n        \"_id\": \"5e90b58db8235c6aca26f3d0\",\n        \"userId\": \"oE_P-CoP0\",\n        \"createdOn\": \"2020-04-10T18:06:05.000Z\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1Signup"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/:userId/delete",
    "title": "api to Delete User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the user successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"firstName\": \"srihari hari\",\n        \"lastName\": \"hari hari\",\n        \"password\": \"$2a$10$vESfXUSBd0bwA1YxHTvkfeYST0g4VQA37X.Nnwv/FqNzfIKRygu2O\",\n        \"email\": \"funbobrock@gmail.com\",\n        \"phoneNumber\": \"+91-1234567895\",\n        \"_id\": \"5e90b58db8235c6aca26f3d0\",\n        \"userId\": \"oE_P-CoP0\",\n        \"createdOn\": \"2020-04-10T18:06:05.000Z\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UseridDelete"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/:userId/logout",
    "title": "api to logout from application.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UseridLogout"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1resetPassword",
    "title": "api for Password Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password reset instructions sent successfully\",\n    \"status\": 200,\n    \"data\": None\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1resetpassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/updatePassword",
    "title": "api for Updating Password after Reset.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "validationToken",
            "description": "<p>validationToken of the user recieved on Email. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>new password of the user . (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password Update Successfully\",\n    \"status\": 200,\n    \"data\": \"None\"\n    \n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PutApiV1Updatepassword"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/:userId/edit",
    "title": "api for Updating User Details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last Name of the user. (body params) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of the user. (body params) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User details Updated\",\n    \"status\": 200,\n    \"data\": \"None\"\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PutApiV1UseridEdit"
  }
] });
