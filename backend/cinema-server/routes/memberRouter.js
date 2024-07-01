import { Router } from "express";
import { getMembers } from "../BLL/membersBLL.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const result = await getMembers();
    res.status(200).json({ message: result });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});


export default router;