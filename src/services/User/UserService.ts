import User from "../../Dto/UserDto";
import ChangePassword from "../../Dto/changePasswordDto";
import generateHash from "../../helpers/generateHash";
import UserRepository from "../../repositories/User/UserRepository";

//Creacion de la clase UserService
class UserService {
    static async register(user: User){ //Se encarga de hashear la contraseña y agregar el usuario a la base de datos
        user.password = await generateHash(user.password);
        return await UserRepository.add(user);
    }

    static async changePassword(user: ChangePassword){
        UserRepository.getById()
    }
}

export default UserService;