import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../environment.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  jwt.verify(token, SECRET_KEY, (err) => {
    if (err) {
      return res.status(401).json({ message: "You are not authorized!" });
    }
    next();
  });
};
