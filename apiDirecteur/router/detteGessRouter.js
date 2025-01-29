const express = require('express')
const router = express.Router()

const { verifyToken, getIdGessFromToken } = require('../verifyToken');
const DetteGess = require('../model/detteGessModel');

//get all DetteGess
router.get('/', verifyToken, async (req, res) => {
    const idGess = getIdGessFromToken(req.headers['token']);
    const { dateD, dateF } = req.body;

    try {
        const query = { active: 1, idGess: idGess };

        if (dateD && dateF) {
            query.date = { $gte: new Date(dateD), $lte: new Date(dateF) };
        } else if (dateD) {
            query.date = { $gte: new Date(dateD) };
        } else if (dateF) {
            query.date = { $lte: new Date(dateF) };
        }

        const DetteGesss = await DetteGess.find(query);
        res.status(200).send(DetteGesss);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Server error while fetching DetteGesss' });
    }
});


//add DetteGess
router.post('/ajouter',verifyToken,async(req,res)=>{
    try{
        const idGess = getIdGessFromToken(req.headers['token']);
        const newDetteGess = new DetteGess();
        newDetteGess.idGess=idGess ;
        newDetteGess.name=req.body.name ;
        newDetteGess.montant=req.body.montant ;
        newDetteGess.numFacture=req.body.numFacture ;
        newDetteGess.otre_non=req.body.otre_non ;
        newDetteGess.activ=1;

        const saveDetteGess = await newDetteGess.save();
        res.status(200).send(saveDetteGess);

    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "DetteGess non cree !"})
    }
})

//modifier DetteGess
router.put('/modifier/:id',verifyToken,async(req,res)=>{
    try{
        const updatedDetteGess = await DetteGess.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).send(updatedDetteGess);
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "DetteGess non modifier !"})
    }
})

//supprimer DetteGess
router.put('/supprimer/:id',verifyToken,async(req,res)=>{
    try{
        await DetteGess.findByIdAndUpdate(
            req.params.id,
            {"active": 0},
            { new: true }
        );
        res.status(200).send({"message" : "DetteGess supprimer !"});
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "DetteGess non supprimer !"})
    }
})

//number de DetteGess
router.get('/count',verifyToken,async(req,res)=>{
    try{
        const idGess = getIdGessFromToken(req.headers['token']);
        const count = await DetteGess.countDocuments({"type" : 1 , "active" : 1 , idGess : idGess});
        res.status(200).send({"message":"ok !","cont" : count});
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "bad !"})
    }
})
module.exports = router