const {Usuario}= require("../models/model")

async function login(req,res){

    const usuario =await Usuario.findOne ({
        where:{
        email:"wilsondevilla@gmail.com",
        password:"12345"
    }
    })
    if(usuario){

        console.log(usuario)
        res.send({
            "mensaje":" te logueaste exitosamente"
        })
    }else{
        res.send({
          mensaje:"error las credenciales no son correctas" 
        })
    }
}
function profild (req,res){

}
module.exports ={login,profild}
