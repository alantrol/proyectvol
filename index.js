const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const routerAutenticacion=require("./routes/autenticacion-routes")
const routerUsuario=require("./routes/usuario-routes")

const {db} =require("./models/model")


app.use("/auth",routerAutenticacion)
app.use("/Usuario",routerUsuario)

db()

app.get('/', (req, res) => {
  res.send('Hola express')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})