const express      = require('express');
const usersCtrl    = require('./routes/usersCtrl');
// Router
exports.router = (() =>{
  var apiRouter = express.Router();
  apiRouter.get('/v1/testroute',usersCtrl.testFunction)
  return apiRouter;
})();