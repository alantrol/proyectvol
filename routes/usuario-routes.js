const express =require("express")

const router=express. router()
const {listarUsuario,crearUsuario,actualizarUsuario,eliminarUsuario}= require("./../controllers/usuario-controllers")

router.Post("/crear",crearUsuario)

router.put("/actualizar",actualizarUsuario)

router.delete("/eliminar",eliminarUsuario)

router.get("/listar",listarUsuario)

module.exports = router
