const express = require("express");
const router = express.Router();
const mysqlconnection = require('../config/mysqlConnection')

router.get("/vendors", (req, res, next) => {

  mysqlconnection.query("SELECT * FROM vendors", (err, rows)=>{
    if(err) {
      console.log(err)
      res.status(500).send({error: err})
    }
    res.status(200).send({
      data:rows,
      success: true
    })
  })

})

module.exports = router;
