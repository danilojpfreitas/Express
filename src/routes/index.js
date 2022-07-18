// importar o express
const express = require("express");

// importando controller
const produtoController = require("../controllers/produtoController")
const fabricanteController = require("../controllers/fabricanteController")
const categoriaController = require("../controllers/categoriaController")

// ativar o recurso de rotas
const routes = express.Router()

// metodo para receber informacoes (req = requisicao do cliente; res = resposta para o cliente)
routes.get("/", (req, res) => {
    console.log(req.query);
    res.send("Hello Word!");
})

routes.get("/produto/lista", produtoController.listarProduto);

routes.post("/produto/criar", produtoController.cadastrarProduto);

routes.delete("/produto/:id/deletar", produtoController.deletarProduto);

routes.put("/produto/:id/atualizar", produtoController.atualizarProduto);

routes.post("/fabricante/criar", fabricanteController.criarFabricante);

routes.post("/categoria/criar", categoriaController.criarCategoria);
// metodo para identificacao pela URL
routes.get("/produto/:id?/:teste", (req, res) => {
    console.log(req.params);
    res.send("Hello Word!");
})

// adicionando o metodo post
routes.post("/cadastrar", (req, res) => {
    console.log(req.body);
    res.json(req.body);
})


// exportacao 
module.exports = routes;