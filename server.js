const express = require('express');

//require para trabalhar com cookies no servidor
const cookieParser = require('cookie-parser');

//(Cross-Origin Resource Sharing) é uma especificação do W3C que, quando implementado pelo navegador, permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.
const cors = require('cors');

//path módulo fornece utilitários para trabalhar com caminhos de arquivo e diretório. 
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors()); //informar quais dominios estão consumindo os dados da api

app.use(cookieParser());

app.use(express.json());//receber e enviar json do front end ao backend

app.get('/', function(req,res){
    res.json({message:'Mern'});
});

app.listen(port,function(){
    console.log(`Server running on port ${port}`);
});