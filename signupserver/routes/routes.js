const { response } = require("express")
const express = require("express")
const signUpTemplate = require("../models/signupmodel")
const bcrypt = require("bcrypt")


//initialising express router
const router = express.Router()

router.post("/signup",async (req,res)=>{
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password,saltPassword)

    const signedUpUser = new signUpTemplate({
        fullName:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:securePassword
    })
    signedUpUser.save()
    .then(data=>{
        res.json(data)
    })
    .catch(err=>res.json(err))
})


module.exports = router