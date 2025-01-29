const express = require('express')
const router = express.Router()

const { verifyToken, getIdGessFromToken } = require('../verifyToken');
const DetteBenifique = require('../model/detteBenifiqueModel');

//get all DetteBenifique
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

        const DetteBenifiques = await DetteBenifique.find(query);
        res.status(200).send(DetteBenifiques);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Server error while fetching DetteBenifiques' });
    }
});


//add DetteBenifique
router.post('/ajouter',verifyToken,async(req,res)=>{
    try{
        const idGess = getIdGessFromToken(req.headers['token']);
        const newDetteBenifique = new DetteBenifique();
        newDetteBenifique.idGess=idGess ;
        newDetteBenifique.name=req.body.name ;
        newDetteBenifique.montant=req.body.montant ;
        newDetteBenifique.numFacture=req.body.numFacture ;
        newDetteBenifique.otre_non=req.body.otre_non ;
        newDetteBenifique.activ=1;

        const saveDetteBenifique = await newDetteBenifique.save();
        res.status(200).send(saveDetteBenifique);

    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "DetteBenifique non cree !"})
    }
})

//modifier DetteBenifique
router.put('/modifier/:id',verifyToken,async(req,res)=>{
    try{
        const updatedDetteBenifique = await DetteBenifique.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).send(updatedDetteBenifique);
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "DetteBenifique non modifier !"})
    }
})

//supprimer DetteBenifique
router.put('/supprimer/:id',verifyToken,async(req,res)=>{
    try{
        await DetteBenifique.findByIdAndUpdate(
            req.params.id,
            {"active": 0},
            { new: true }
        );
        res.status(200).send({"message" : "DetteBenifique supprimer !"});
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "DetteBenifique non supprimer !"})
    }
})

//number de DetteBenifique
router.get('/count',verifyToken,async(req,res)=>{
    try{
        const idGess = getIdGessFromToken(req.headers['token']);
        const count = await DetteBenifique.countDocuments({"type" : 1 , "active" : 1 , idGess : idGess});
        res.status(200).send({"message":"ok !","cont" : count});
    }catch(err){
        console.log(err);
        res.status(400).send({"message" : "bad !"})
    }
})
module.exports = router