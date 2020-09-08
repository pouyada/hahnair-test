var express = require("express");
require('dotenv').config({path: __dirname + '/.env'});
const env = process.env;
const bodyParser = require("body-parser");
const vendorRoutes = require("./routes/vendor")
const BookingKitAuthentication = require('./middleware/bookingKitAuth');
const FetchVendors = require('./middleware/fetchVendors');

const app = express();
app.use(bodyParser.json({limit: '1mb'}));
const PORT = env.PORT;
const API_V1_PREFIX = "/api/v1";

app.use(API_V1_PREFIX, BookingKitAuthentication, FetchVendors, vendorRoutes)

app.listen(PORT, () => {
  console.log(`App running at ${env.HOST}:${PORT}`)
})


