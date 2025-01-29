const express = require('express')
const router = express.Router()

const jwt = require('jsonwebtoken')
require('dotenv').config()

const Pompiste = require('../model/pompisteModel');

router.post('/' , async (req,res)=>{
    try{
        const email = req.body.email;
        const motpass = req.body.motpass;
        const existePompiste = await Pompiste.findOne({ email , motpass , "active" : 1});
        if(existePompiste){
            if(existePompiste.type == 2){
                const token = jwt.sign( { existePompiste } , process.env.JWT_SECRET_KEY , { expiresIn: '1d' } );
                res.status(200).send({"token" : token , message : "ok !" , type : "pi"});
            }else{
                res.status(400).send({"message" : "directeur non existe !"});
            }
        }else{
            res.status(404).send({"message" : "mot de pass ou email non correcte !"});
        }
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "directeur non existe !"});
    }
})

module.exports = router