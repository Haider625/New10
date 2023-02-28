const mongoos= require('mongoose');

const prod = mongoos.Schema({
    name : String  ,
    country : String ,
    typeLost : String ,
    lssuer : String ,
    YersLost : Date ,
    historyLost : Date,
    PhoneNumber : Number,
    note : String,
    })
 
    module.exports=mongoos.model('PROD',prod);
    