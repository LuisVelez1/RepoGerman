import { Request, Response } from "express";
import UserRepository from "../../repositories/User/UserRepository";
import generateToken  from "../../helpers/generateToken";
import dotenv from "dotenv";
import Auth from "../../Dto/AuthDto";
import { setTokenCookie } from "../../middleware/cookieMiddelware";

dotenv.config(); //Configuracion de las variables de entorno, en este caso la del token

let auth = async (req: Request, res: Response) =>{
    try {
        const{
            email, 
            password
        } = req.body; //Campos que se envian junto al formato, en el cuerpo.
        const login = await UserRepository.authh(new Auth(email, password)); // constante del login donde se intancia la clase login que esta dentro de user repositorio para la validacion de email y password
        if(login.logged) { //Validacion de que los campos son correctos
            const userId = login.userId; 
            const token = generateToken({ id: userId } , "secret", 10); //Se genera el token y se firma con la variable de entorno
            setTokenCookie(res, token); //Se guarda el token en una cookie

            //VALIDACIONES
            return res.status(200).json({
                status: login.status,
                token: token //Se muestra el token 
            });
        }
        return res.status(401).json({
            status: login.status
        });
    } catch (error){
        console.log(error);
        return res.status(500).json({
            status: "Internal Server Error"
        });
    }
}

export default auth;