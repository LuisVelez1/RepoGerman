import { Request, Response } from "express";
import UserService from '../../services/User/UserService';
import User from "../../Dto/UserDto";


let register = async (req: Request, res: Response) => {
  try {
    const {
      email,
      password,
      nombres,
      apellidos,
      rol
    } = req.body;
    const registerUser = await UserService.register(new User(email, password, nombres, apellidos, rol ));
    return res.status(201).send(
      { status: 'Registro exitoso :)' }
    );
  } catch (error: any) {
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).send({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default register;