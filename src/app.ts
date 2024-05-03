import express from "express";
import bodyParser from 'body-parser';
import register from './routes/User/register';
import auth from './routes/auth';
import deleteU from './routes/User/deleteU';
import getAll from './routes/User/getAll';
import getOne from './routes/User/getOne';
import changePassword from './routes/User/changePassword';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import validateTokenMiddelware from "./middleware/validateTokenMiddelware";
dotenv.config();


const app = express().use(bodyParser.json());

app.use(cookieParser());


app.use('/register', register);
app.use('/auth', auth);
app.use('/delete', deleteU);
app.use('/users', getAll);
app.use('/user', getOne);
app.use('/profile/changePassword', validateTokenMiddelware, changePassword);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});

