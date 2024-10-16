const Usuario = require("../models/model")


async function listarUsuario(req,res){
    const usuario =await Usuario.findall()
    const Usuario =sequelize.define("Usuario",{
    })
    res.send(usuario)
}

async function crearUsuario(req,res){
    
        const body =req.body;
        const usuario=await Usuario.create({
    
            firstName: body.firstName,
            lastName: body.lastName,
             email: body.email,
            password: body.password,
            ci: body.ci,
            numero: body.numero,
            fecha: body.fecha
      })
    
    res.send("crear")
}

function actualizarUsuario(req,res){
    console.log("actualizar Usuario")
    res.send("actualuizar")
}

function eliminarUsuario(req,res){
    console.log("eliminar Usuario")
    res.send("eliminar")
}

module.exports={ listarUsuario,crearUsuario, actualizarUsuario,eliminarUsuario}