const express=require("express")

const router=express.Router()

const {login, profild}=require("./../controllers/autenticacion-controllers")

router.post("/",login)

router.get("/",profild)

module.exports= router