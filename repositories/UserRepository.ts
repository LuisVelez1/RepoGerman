import User from '../Dto/UserDto';
import db from '../config/config-db';

class UserRepository {
    static async add(user: User){
        const sql = 'INSERT INTO users (email, password, nombres, apellidos, telefono, TipoVehiculo) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [user.email, user.password, user.nombres, user.apellidos, user.telefono, user.TipoVehiculo];
        return db.execute(sql, values);
    }
    static async auth(user:User){
        const sql = 'SELECT password FROM users WHERE email=?';
        const values = [user.email];
        return db.execute(sql, values);
    }
    
}


export default UserRepository;
