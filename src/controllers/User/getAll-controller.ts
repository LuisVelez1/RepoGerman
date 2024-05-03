import { Request, Response } from "express";
import UserRepository from "../../repositories/User/UserRepository";

let getAll = async (req: Request, res: Response) => {
    try{
        const users = await UserRepository.getAll();
        return res.status(201).json(users);
    }catch (error){
        return res.status(500).json({
            error: 'Internal server error :('
        });
    }
}

export default getAll;