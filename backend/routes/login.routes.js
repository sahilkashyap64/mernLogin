const express = require("express");
const app = express();
const Users = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

app.post('/', (req,res)=>{
    let body = req.body

    Users.findOne({email:body.email},(err,user)=>{

        if(!user){
            return res.status(400).send({
                ok:false,
                err:{
                    message:'User not valid'
                }
            })
        }

        if(!bcrypt.compareSync(body.password,user.password)){
            return res.status(400).send({
                ok:false,
                err:{
                    message:'Password  not valid'
                }
            })
        }

        let token = jwt.sign({
            userbd:user
        },'secret',{expiresIn:'24h'})

        res.json({
            ok:true,
            userbd:user,
            token
        })



    })
})


module.exports = app