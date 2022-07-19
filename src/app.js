// ativando o express
const express = require("express");

// importando de routes
const routes = require("./routes")

// middlewares global
// const requestLog = require("./middlewares/requestLog");
const handleError = require("./middlewares/handleError");

// importanto database
const db = require("./database");

const app = express();

db.hasConection(); 

// utiliziar uma estrutura de json pelo post
app.use(express.json());

// aplicando o middlewares global
// app.use(requestLog);

// colocando as rotas em utilizacao
app.use(routes);

// Validacao de dados - depois das rotas, ja que as rotas irao gerar error
app.use(handleError);

// colocado em routes // metodo para receber informacoes (req = requisicao do cliente; res = resposta para o cliente)
// app.get("/", (req, res) => {
//     res.send("Hello Word!");
// })

// ativar um servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));