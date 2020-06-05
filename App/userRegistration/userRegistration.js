const express = require("express");
const router = express.Router();

router.get("/userRegistration",(req,res)=>{
    res.render("formUserRegistration")
})




module.exports = router;