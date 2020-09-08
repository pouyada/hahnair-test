const axios = require('../config/axios')
const VendorDto = require('../dto/vendorDto')
const mysqlconnection = require('../config/mysqlConnection');

let FetchVendors = function(req, res, next) {

  axios.get('/vendors')
    .then(res => {

      const vendors = res.data;
      for (let vendor of vendors) {
        const vendorDto = new VendorDto(vendor)

        mysqlconnection.query('INSERT IGNORE INTO vendors SET ?', vendorDto, (err, res) => {
          if(err) throw err;
        });
      }
      next();
    })
    .catch(err => {
      res.status(500).send({error: "Bookingkit call failed. " + err})
    })
}

module.exports = FetchVendors;
