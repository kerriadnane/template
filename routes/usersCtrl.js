
const models = require('../models');
//const { verifyregisterUser, verifyloginUser } = require('../validation');

module.exports = {
    testFunction:async(req, res)=>{
        const groupe = await models.groupe.findByPk(1,{include:['etudiant']});
        if (groupe){
            res.status(200).send(groupe)
        }else{
            res.status(400).send("groupe non trouvé")
        }
    }
}