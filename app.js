const express = require("express");
const path=require("path");
const app = express();
const publicPath=path.resolve(__dirname,"./public");
app.use(express.static(publicPath));
/* deja público solo esto */

const port = process.env.PORT || 3000;

app.listen(port,()=>{console.log("Servidor corriendo")});
// Si quiero probar la variable de entorno. PORT 400 npm run dev

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/home.html"));
})

app.get('/registro',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/registro.html"));
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/login.html"));
})

