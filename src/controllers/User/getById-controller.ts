import UserRepository from '../../repositories/User/UserRepository';
import User from '../../Dto/UserDto';
import { Request, Response } from "express";


let getOne = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.userId, 10);
    const result = await UserRepository.getById(id);
     if(result) {
        return res.status(200).json(result[0]);
    } else {
        return res.status(404).json({
            error: 'Usuario no encontrado'
        });
    }
    } catch (error) {
        console.log('error al encontrar el usuario', error);
    }
}


export default getOne;