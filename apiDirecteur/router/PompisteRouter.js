const express = require('express')
const router = express.Router()

const {verifyToken , getIdGessFromToken} = require('../verifyToken');
const Pompiste = require('../model/pompisteModel');

//get all pompiste
router.get('/' ,verifyToken, async(req,res)=>{
    try{
        const idGess = getIdGessFromToken(req.headers['token']);
        const pompistes = await Pompiste.find({ type: 1, active: 1 , idGess : idGess});
        res.status(200).send(pompistes); 
    }catch(err){
        console.log(err);
        res.status(500).send({ message: 'Server error while fetching pompistes' });
    }
})
// get one pompiste
router.get('/:id' ,verifyToken, async(req,res)=>{
    try{
        const idpompiste = req.params.id
        const pompistes = await Pompiste.find({ _id: idpompiste});
        res.status(200).send(pompistes); 
    }catch(err){
        console.log(err);
        res.status(500).send({ message: 'Server error while fetching pompistes' });
    }
})

//add pompiste
router.post('/ajouter',verifyToken,async(req,res)=>{
    try{
        
        const idGess = getIdGessFromToken(req.headers['token']);
        const newPompiste = new Pompiste();
        newPompiste.idGess=idGess ;
        newPompiste.name=req.body.name ;
        newPompiste.dateNaissance=req.body.dateNaissance ;
        newPompiste.CIN=req.body.CIN ;
        newPompiste.dateCIN=req.body.dateCIN ;
        newPompiste.payement=req.body.payement ;
        newPompiste.famille=req.body.famille ;
        newPompiste.travail=req.body.travail ;
        newPompiste.address=req.body.address ;
        newPompiste.tel=req.body.tel ;
        newPompiste.email=req.body.email ;
        newPompiste.motpass=req.body.motpass ;
        newPompiste.contrat= req.body.contrat;
        newPompiste.type=1 ;
        newPompiste.active=1 ;

        const savePompiste = await newPompiste.save();
        res.status(200).send(savePompiste);
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "pompiste non cree !"})
    }
})

//modifier pompiste
router.put('/modifier/:id',verifyToken,async(req,res)=>{
    try{
        const updatedPompiste = await Pompiste.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).send(updatedPompiste);
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "pompiste non modifier !"})
    }
})

//supprimer pompiste
router.put('/supprimer/:id',verifyToken,async(req,res)=>{
    try{
        await Pompiste.findByIdAndUpdate(
            req.params.id,
            {"active": 0},
            { new: true }
        );
        res.status(200).send({"message" : "pompiste supprimer !"});
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "pompiste non supprimer !"})
    }
})

//number de pompiste
router.get('/count',verifyToken,async(req,res)=>{
    try{
        const idGess = getIdGessFromToken(req.headers['token']);
        const count = await Pompiste.countDocuments({"type" : 1 , "active" : 1 , idGess : idGess});
        res.status(200).send({"message":"ok !","cont" : count});
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "bad !"})
    }
})
module.exports = router