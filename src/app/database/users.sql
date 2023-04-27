
-- CRIANDO O BANCO

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, -- números únicos pela constraints
    nome VARCHAR(100),
    email VARCHAR(100),
)

INSERT INTO users (nome, email)
VALUES ("Lucas", "amaralrdev@gmail.com")

-- Dados numéricos não são inseridos entre 'aspas';


-- CRUD

-- C = Create = INSERT
-- R = Read = SELECT (WHERE)
-- U = Update = UPDATE - sempre utilize where
-- D = Delete = DELETE - sempre utilize where


-- CONSTRAINTS - relação - FOREIGN KEY
-- Só pode referenciar a chave primária de outra tabela

-- JOIN 

-- SELECT users.nome
-- FROM users


