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
  try {
    const result = await getMovies();
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Error occured!" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getMovie(id);
    if (!result) {
      return res.status(404).json({ message: "The movie was not found" });
    }
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Error occued!" });
  }
});

router.post("/", async (req, res) => {
  const movie = req.body;
  try {
    await createMovie(movie);
    res.status(201).json({ message: "Created!" });
  } catch (err) {
    res.status(500).json({ message: "Error occured!" });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const movie = req.body;
  try {
    const result = await updateMovie(id, movie);
    if (!result) {
      return res.status(404).json({ message: "The movie was not found" });
    }
    res.status(200).json({ message: "Updated!" });
  } catch (err) {
    res.status(500).json({ message: "Error occured!" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteMovie(id);
    if (!result) {
      return res.status(404).json({ message: "The movie was not found" });
    }
    res.status(200).json({ message: "Deleted!" });
  } catch (err) {
    res.status(500).json({ message: "Error occured!" });
  }
});

export default router;
