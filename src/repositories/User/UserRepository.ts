import Auth from '../../Dto/AuthDto';
import User from '../../Dto/UserDto';
import ChangePassword from '../../Dto/changePasswordDto';
import db from '../../config/config-db';
import bcrypt, { compare } from 'bcryptjs';
import generateHash from '../../helpers/generateHash';

class UserRepository {
    
    static async add(user: User){
        const sql = 'INSERT INTO users (email, password, nombres, apellidos, rol) VALUES (?, ?, ?, ?, ?)';
        const values = [user.email, user.password, user.nombres, user.apellidos, user.rol];
        return db.execute(sql, values);
    }
    
    static async authh(auth: Auth){
        const sql = 'SELECT id, password FROM users WHERE email=?';
        const values = [auth.email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0){
          const user = result[0][0]; 
          const isPasswordValid = await bcrypt.compare(auth.password, user.password);
          if (isPasswordValid){
            return {userId: user.id, logged: true, status: "Successful authentication"}
          }
          return {logged: false, status: "Invalid username or password" };
        }
        return {logged: false, status: "Invalid username or password" };
    }

        static async changePassword(changePassword: ChangePassword) {
            console.log(changePassword);
            
            const sql = 'SELECT id, password FROM users WHERE email = ?';
            const values = [changePassword.email];
            const result: any = await db.execute(sql, values);
            if(result[0][0].length > 0){
                const user = result[0][0];
                const isPasswordValid = await bcrypt.compare(changePassword.oldPassword, user.password);
                if (isPasswordValid) {
                    
                    const hashedPassword = await generateHash(changePassword.newPassword);
                    
                    await this.updatePassword(user.id, hashedPassword);
              
                    return { message: 'Password changed successfully!' }; 
                  } else {
                    return { message: 'Incorrect old password' }; 
                  }
                } else {
                  return { message: 'Email not found' }; 
                }
              }
              


    static getAll() {
        const sql = 'SELECT id, email, nombres, apellidos, rol FROM users';
        return db.execute(sql);
    }

    static getById(id: number) {
        const sql = 'SELECT id, email, nombres, apellidos, rol FROM users WHERE id = ?';
        const values = [id];
        return db.execute(sql, values);
    }

    static updatePassword(id: number, newPassword: string) {
        console.log({
            id: id,
            newPassword: newPassword
        });
        
        const sql = 'UPDATE users SET password = ? WHERE id = ?';
        const values = [newPassword, id];

        return db.execute(sql, values);
    }

    static delete(id: string){
        const sql = 'DELETE FROM users WHERE id = ?';
        const values = [id];
        return db.execute(sql, values);
    }

    static getByEmail(email: string){
        const sql = 'SELECT id, email, password nombres, apellidos, rol FROM users WHERE email = ?';
        const values = [email];
        return db.execute(sql, values);
    }
}


export default UserRepository;
