import express, { Express} from 'express';
import dotenv from 'dotenv';
import { stg } from './env/stg.config';

dotenv.config();

const app: Express = express();
const port = stg.app_port;


var apiRoutes = require("./api/route/routes");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var cors = require("cors");

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({limit: "1gb", extended: true, parameterLimit: 1000000}));
app.use(bodyParser.urlencoded({limit: "1gb", extended: true, parameterLimit: 10000000 }));
app.use(methodOverride("_method"));
//CORS
app.use(cors());

//EJS
app.set("view engine", "ejs");


// Allow CORS preflight requests
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Accept, Authorization"
  );
  next();
});

// Routes
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});