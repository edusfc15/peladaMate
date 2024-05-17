import express from "express";
import JogadorController from "../controller/jogadorController.js";

const router = express.Router();

router
    .get("/jogadores/:id", JogadorController.listarJogadoresPorId)
    .get("/jogadores/", JogadorController.listarJogadores)
    .post("/jogadores/", JogadorController.cadastrarJogador);

export default router;