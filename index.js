const express = require('express');
const cors = require('cors')


const router = require ('./src/routes/routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)


app.listen(3001,()=>{
    console.log("Aplicação rodando na porta 3001")
});

app.get('/',(request,response)=>{
    response.send("Oi Meu love")
});
