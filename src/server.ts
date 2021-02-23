import express from "express";
import "reflect-metadata";
import "./database";

const app = express();

/**
 * GET => BUSCA
 * POST => SALVAR
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 */

app.get("/", (request, response) => {
    return response.json({ messsage: "Hello NLW04"});
});

app.post("/", (request, response) => {
    return response.json({ message: "Os dados foram salvos com sucesso! "});
});


app.listen(3333, () => console.log("Server is running"));

