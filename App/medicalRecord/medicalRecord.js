const express = require("express");
const router = express.Router();


router.get("/formMedicRegistration",(req,res)=>{
    res.render("formMedicRegistration");
});


module.exports = router;