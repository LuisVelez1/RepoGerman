import jwt from "jsonwebtoken";

export const generateToken = (email: string, secret: jwt.Secret) => {
  return jwt.sign({ email }, secret, { expiresIn: "1h" });
};