const express = require("express");
const app = express();
const Users = require("../models/users");
const bcrypt = require("bcryptjs");
const { verficationToken } = require("../middlewares/autenticacion");

app.get("/", verficationToken, async (req, res) => {
    await Users.find((err, users) => {
        res.json({
            users
        });
    });
});

app.post("/", async (req, res) => {
    let body = req.body;

    let newuser = new Users({
        name: body.name,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10)
    });

    await newuser.save((err, user) => {
        if (err) {
            return res.status(500).json({
                err
            });
        }
        
        res.json({
            user
        });
    });
});

module.exports = app;
