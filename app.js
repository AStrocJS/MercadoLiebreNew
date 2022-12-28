const express = require("express")
const path = require("path")
const app = express()

const port = 3030


app.use (express.static(path.resolve(__dirname, "public")))
app.listen(port, () => `Servidor levantado en puerto ${port}`)

app.get("/", (req,res) =>res.sendFile(path.resolve(__dirname,"views","home.html")))