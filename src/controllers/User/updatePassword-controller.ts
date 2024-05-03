import { Request, Response } from 'express';
import UserRepository from '../../repositories/User/UserRepository';
import UserService from '../../services/User/UserService';
import ChangePassword from '../../Dto/changePasswordDto';

let changePassword = async (req: Request, res: Response) => {
    try {
        const {
            oldPassword, 
            newPassword
        } = req.body;

        const userData: new ChangePassword(req.body.oldPassword, req.body.newPassword);

        const tok = req.cookies.token;
        const result = await UserService.changePassword({
            tok,
            oldPassword,
            newPassword,
          });


        return res.status(200).json({
            status: 'Password updated successfully'
        });
       
    } catch(error){
        console.error('Error occurred while changing password:', error);
        return res.status(500).json({
            status: 'Internal Server Error'
        });
    }
}

export default changePassword;
