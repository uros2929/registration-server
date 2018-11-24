const express = require('express');
const router = express.Router();
const User = require('../modules/user')

const mongoose = require('mongoose');
const db = "mongodb://Uros2929:29.,MarinkO.,29@ds119548.mlab.com:19548/registrationdb"

mongoose.connect(db, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected to mongodb')
    }
})

router.get('/', (req, res) => {
    res.send('From API router')
})

router.post('/singUp', (req, res) => {
    let userData = req.body;
    let user = new User(userData)
    user.save((err, registerUser) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).send(registerUser)
        }
    })
})

router.post('/logIn', (req, res) => {
    let userData = req.body;

    User.findOne({ userName: userData.userName }, (err, user) => {
        if (err) {
            console.log(err)
        } else if (!user) {
            res.status(401).send('Invalid User Name')
        } else if (user.password !== userData.password) {
            res.status(401).send('Invalid password')
        } else {
            res.status(200).send(user)
        }
    })
})

module.exports = router