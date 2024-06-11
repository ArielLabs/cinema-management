import { Router } from "express";
import {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../BLL/moviesBLL.js";

const router = Router();

router.get("/", async (req, res) => {
  const { page } = req.query;
  try {
    const result = await getMovies(page);
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getMovie(id);
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  const movie = req.body;
  try {
    const result = await createMovie(movie);
    res.status(201).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const movie = req.body;
  try {
    const result = await updateMovie(id, movie);
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteMovie(id);
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
