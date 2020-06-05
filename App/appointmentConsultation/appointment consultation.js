const express = require("express");
const router = express.Router();


router.get("/appointmentConsultation",(req,res)=>{
    res.render("appointmentConsultation");
});


module.exports = router;