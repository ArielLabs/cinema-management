import { authentication, registeration } from "../BLL/authBLL.js";
import { Router } from "express";

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token, role, fullName, permissions } = await authentication(
      email,
      password
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.status(201).json({
      message: {
        role,
        fullName,
        permissions,
      },
    });
  } catch (err) {
    if (
      err.message === "User does not exist" ||
      err.message === "Wrong password"
    ) {
      res.status(401).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
});

router.post("/logout", async (req, res) => {
  res.clearCookie("token");
  res.status(201).json({ message: "Logged out succesfully" });
});

router.put("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    await registeration(email, password);
    res.status(200).json({ message: "The registration was successful" });
  } catch (err) {
    if (err.message === "User does not exist") {
      res.status(401).json({ message: err.message });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
});

export default router;
