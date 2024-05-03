import { Request, Response } from "express"
import UserRepository  from '../../repositories/User/UserRepository';

let deleteU = async (req: Request, res: Response) => {
    try{
        const id = req.params.userId;
        
        const result = await UserRepository.delete(id);
        return res.status(201).send(
            {
                status: 'Eliminación exitosa'
            }
        );
    } catch (error){
        return res.status(500).json({
            error: 'Internal server error'
        })
    }
}

export default deleteU;