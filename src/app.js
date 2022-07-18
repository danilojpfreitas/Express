// ativando o express
const express = require("express");

// importando de routes
const routes = require("./routes")

// importanto database
const db = require("./database");

const app = express();

db.hasConection(); 

// utiliziar uma estrutura de json pelo post
app.use(express.json());

// colocando as rotas em utilizacao
app.use(routes);

// colocado em routes // metodo para receber informacoes (req = requisicao do cliente; res = resposta para o cliente)
// app.get("/", (req, res) => {
//     res.send("Hello Word!");
// })

// ativar um servidor
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));