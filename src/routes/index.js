// importar o express
const express = require("express");

// importando controller
const produtoController = require("../controllers/produtoController")
const fabricanteController = require("../controllers/fabricanteController")
const categoriaController = require("../controllers/categoriaController")
const usuariosController = require("../controllers/usuariosController")

// middlewares em uma unica rota
const requestLog = require("../middlewares/requestLog");
const bloqueio = require("../middlewares/bloqueio");

// importando validations
const usuarioCreateValidation = require("../validations/usuarios/create")

// ativar o recurso de rotas
const routes = express.Router()

// metodo para receber informacoes (req = requisicao do cliente; res = resposta para o cliente)
routes.get("/", (req, res) => {
    console.log(req.query);
    res.send("Hello Word!");
})

routes.get("/produtos", requestLog, bloqueio, produtoController.listarProduto);

routes.post("/produtos", produtoController.cadastrarProduto);

routes.delete("/produto/:id", produtoController.deletarProduto);

routes.put("/produto/:id", produtoController.atualizarProduto);

// adicionando a rota usuario
routes.post("/usuarios", usuarioCreateValidation, usuariosController.registro);

routes.post("/fabricantes", fabricanteController.criarFabricante);

routes.post("/categorias", categoriaController.criarCategoria);
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