let router = require("express").Router();
var validateToken = require("../../config/auth.config").validateToken;
import {loginHandler} from '../controller/auth.controller';


router.route('/').get( (req: any, res: any) => {
    res.send('Express + TypeScript Server');
    console.log("Express");
  });

router
.route('/login')
.post(loginHandler);

module.exports = router;
