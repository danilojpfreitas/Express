// importanto sequelize
const Sequelize = require("sequelize");

// dados para comunicacao com o banco de dados
const DB_NAME = "loja";
const DB_USER = "root";
const DB_PASS = "32310971";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: "3306"
};

// objeto para guardar a conexao do banco de dados
let db = {};

// tratamento de erro
try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Error ao tentar uma conexao com banco de dados")
}

// testar a conexao com o banco de dados
async function hasConection(){
    try {
        await db.authenticate();
        console.log("Banco de dados conectado!")
    } catch (erro) {
        console.error("Erro ao tentar se conectar com o banco de dados")
    }
}

// adicionar um metodo ao objeto db
Object.assign(db, {
    hasConection,
});

// exportar db
module.exports = db;