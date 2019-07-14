const express = require('express')
const Advertisement = require('./model')
var router = express.Router();
//const auth = require('../tokens/middleware')

router.post('/advertisement' , function (req, res) {
    const adv = {
        title: req.body.title,
        description: req.body.description,
        pic_url: req.body.pic_url,
        price: req.body.price,
        email: req.body.email,
        phone: req.body.phone,
    }
    console.log("lala",req.body)
    if(req.body === null) return
    Advertisement
        .create(adv)
        .then(list => res.status(201).json({ list }))
        .catch(err => console.log("got an error", err))
        .catch(err => res.status(500).json({
            message: 'Something went wrong',
            error: err
        }))
})

//add a title, description, picture (url), price, email address and phone number
router.get('/advertisement',  function (req, res, next) {
    Advertisement.findAll()
        .then(adv => {
            res.json({ Advertisement: adv })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong',
                error: err
            })
        })
})

router.get('/advertisementlist',  function (req, res, next) {
    Advertisement.findAll({attributes: ['id','title', 'price']})
        .then(adv => {
            res.json({ Advertisement: adv })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Something went wrong',
                error: err
            })
        })
})


router.delete('/advertisement/:id', function (req, res, next) {
    Advertisement.findByPk(req.params.id)
        .then(list => {
            list.destroy()
        })
        .then(list => res.status(200).json({ list }))
        .catch(err => {
            res.status(500).json({
                message: 'Id not found',
                error: err
            })
        })
})

router.get('/advertisement/:id', function (req, res, next) {
    Advertisement.findByPk(req.params.id)
        .then(list => {
            res.json({ adv: list })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Id not found',
                error: err
            })
        })
})

module.exports = router;