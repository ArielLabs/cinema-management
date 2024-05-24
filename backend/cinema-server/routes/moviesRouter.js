import { Router } from "express";
import { getMovies, createMovie } from "../BLL/moviesBLL.js";

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

router.post("/", async (req, res) => {
  const movie = req.body;
  try {
    const result = await createMovie(movie);
    res.status(201).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
