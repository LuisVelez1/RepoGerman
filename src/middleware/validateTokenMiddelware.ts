import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
    // Extrae el token de la cookie o de donde lo estés enviando
    const token = req.cookies.token; // Crea la constante que obtiene
    if (!token) {
        return res.status(401).json('Access denied');
    }
    const payload = jwt.verify(token, "secret");
    console.log(payload);

    next();
    
}

export default tokenValidation;
