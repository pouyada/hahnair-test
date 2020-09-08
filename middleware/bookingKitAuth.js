const env = process.env;
const axios = require('../config/axios')

const body = {
  client_id : env.BOOKINGKIT_CLIENT,
  client_secret : env.BOOKINGKIT_SECRET,
  grant_type : "client_credentials"
};

let BookingKitAuthentication = function(req, res, next) {

  axios.post('/oauth/token', body)
    .then(res => {
      const accessToken = res.data.access_token;
      req.booking_kit_access_token = accessToken;
      axios.defaults.headers.common['Authorization'] = 'Bearer '+ accessToken;

      next()
    })
    .catch(err => {
      res.status(401).send({error: "Bookingkit login failed. " + err})
    })
}

module.exports = BookingKitAuthentication;
