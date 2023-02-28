const PROD =require('../model/prod')
module.exports = {
    getprod : async (req, res) => {
        const prod = await PROD.find();
        res.json(prod)
    },
    insertprod :async (req,res)=>{
        const prod =await new PROD({
            name: req.body.name,
            country: req.body.country,
            typeLost: req.body.typeLost,
            lssuer: req.body.lssuer,
            YersLost: req.body.YersLost,
            historyLost: req.body.historyLost,
            PhoneNumber: req.body.PhoneNumber,
            note: req.body.note
        }).save()
        if (prod){
         res.status(200).json({"product" : prod});
        }else{
            res.status(404).json({message : "post is erorr"});
        } 
        
    },
    deleteone : async (req,res) => {
        const Id = req.params.id;
        const del = await PROD.findByIdAndDelete(Id);
        res.json({"delete" : del})
    },
    getOne : async (req,res) => {
        const Id = req.params.id;
        const Get = await PROD.findById(Id);
        res.json({"Get" : Get})
    },
  
}