var router = require("express").Router();
var validateToken = require("../../config/auth.config").validateToken;
import {loginHandler} from '../controller/auth.controller';
import {createFridgeHandler,deleteFridgeHandler,getFridgeAllHandler,updateFridgeHandler} from '../controller/fridge.controller';

router
.route('/login')
.post(loginHandler);

router
.route('/fridge')
.post(validateToken, createFridgeHandler)
.get(validateToken, getFridgeAllHandler)
.delete(validateToken, deleteFridgeHandler)
.put(validateToken, updateFridgeHandler);

module.exports = router;
