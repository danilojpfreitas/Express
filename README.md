# Express
Aprendendo a utilizar o Express

# Banco de Dados

```
CREATE TABLE produtos (
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(200) NOT NULL,
preco FLOAT NOT NULL,
quantidade INT(10) NOT NULL,
fabricante_id INTEGER NOT NULL,
CONSTRAINT fabricante_produto FOREIGN KEY (fabricante_id) REFERENCES fabricantes(id),
createdAt DATE NOT NULL,
updatedAt DATE NOT NULL
);

CREATE TABLE fabricantes (
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(200) NOT NULL,
createdAt DATE NOT NULL,
updatedAt DATE NOT NULL
);

CREATE TABLE categorias (
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(200) NOT NULL,
createdAt DATE NOT NULL,
updatedAt DATE NOT NULL
);

CREATE TABLE categoria_produto (
categoria_id INTEGER NOT NULL,
produto_id INTEGER NOT NULL,
CONSTRAINT item_categoria FOREIGN KEY (categoria_id) REFERENCES categorias(id),
CONSTRAINT item_produto FOREIGN KEY (produto_id) REFERENCES produtos(id),
createdAt DATE NOT NULL,
updatedAt DATE NOT NULL
);
```
