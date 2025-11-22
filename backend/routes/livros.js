import express from "express";
import DAO from "../model/LivrosDAO.js";
const router = express.Router();

router.get("/", async (req, res) => res.json(await DAO.listar()));
router.post("/", async (req, res) => res.json(await DAO.criar(req.body)));
router.delete("/:id", async (req, res) => res.json(await DAO.deletar(req.params.id)));

export default router;
