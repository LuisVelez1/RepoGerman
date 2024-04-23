import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";

const auth = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        
        const result:any = await UserRepository.auth(req.body);
        
        if (result[0].length > 0) { 
            const storedPassword = result[0][0].password;
            const isPasswordValid = await bcrypt.compare(password, storedPassword); 
            if (isPasswordValid) {
                return res.status(200).json({
                    status: 'Successful authentication'
                });
            }
        }
        return res.status(401).json({
            status: 'Incorrect username or password'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'Internal server error'
        });
    }
}

export default auth;
