require('dotenv').config();
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import config from './config/config';
import cors from 'cors';
import { userValidatorRules, validate } from './middlewares/validator';
import connect from './db';
import './passport/passport';
import {
  registerUser,
  loginUser,
  logOutUser,
  checkSession,
} from './controllers/authController';
import { updateEntries } from './controllers/userController';

const { SECRET_SESSION, DB } = config;

connect();
const app = express();

//----Middlewares

app.use(
  session({
    secret: `${SECRET_SESSION}`,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
    store: MongoStore.create({
      mongoUrl: `${process.env.DB_URL}`,
    }),
  })
);
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
};
app.use(cors(options));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//---Routes
app.get(
  '/check-session',

  checkSession
);
app.post('/register', userValidatorRules(), validate, registerUser);
app.post('/signin', userValidatorRules(), validate, loginUser);
app.post('/logout', logOutUser);
app.put('/update-entries', updateEntries);

export default app;
