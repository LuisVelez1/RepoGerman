import { Response } from "express";

export const setTokenCookie = (res: Response, token: string ) => {
    res.cookie('token', token, {
        httpOnly: true,
        maxAge: 10 * 60 * 1000 //10 minutos de vida tiene la cookie
    });
};

//Funcion que elimina la cookie
export const clearTokenCookie = (res: Response) => {
    res.clearCookie('token') //
}