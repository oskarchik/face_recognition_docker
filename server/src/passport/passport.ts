import passport from 'passport';
import passportLocal from 'passport-local';
import bcrypt from 'bcrypt';
import { IUser, User } from '../models/User';
import config from '../config/config';
import { Request } from 'express';
import { Error } from 'mongoose';

const SALT_ROUNDS: number = parseInt(<string>config.SALT_ROUNDS);
const LocalStrategy = passportLocal.Strategy;

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser(async (userId: string, done) => {
  try {
    const existingUser = await User.findById(userId);
    return done(null, existingUser);
  } catch (err) {
    return done(err);
  }
});

export const registerStrategy: passportLocal.Strategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  async (
    req: Request,
    email: string,
    password: string,
    done: (err: any, user?: any) => void
  ) => {
    try {
      if (!email || !password) {
        const error: Error = new Error('All fields are required');
        return done(error);
      }
      const previousUser = await User.findOne({ email });

      if (previousUser) {
        const error: Error = new Error(
          'Sorry, some error ocurred, please try again'
        );
        return done(error);
      }

      const { name } = req.body;
      const salt: string = await bcrypt.genSalt(SALT_ROUNDS);
      const hash: string = await bcrypt.hash(password, salt);

      const newUser: IUser = new User({
        email,
        password: hash,
        name,
      });

      const savedUser: IUser = await User.create(newUser);
      return done(null, savedUser);
    } catch (err) {
      return done(err);
    }
  }
);

export const loginStrategy: passportLocal.Strategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },
  async (req: Request, email: string, password: string, done: any) => {
    try {
      if (!email || !password) {
        const err: Error = new Error('All fields are required');
        return done(err);
      }
      const currentUser = await User.findOne({ email });
      if (!currentUser) {
        const err: Error = new Error('Invalid email or password');
        return done(err);
      }
      const isValidPassword: boolean = await bcrypt.compare(
        password,
        currentUser.password
      );
      if (!isValidPassword) {
        const err: Error = new Error('Wrong credentials');
        return done(err);
      }
      return done(null, currentUser);
    } catch (err) {
      return done(err);
    }
  }
);

passport.use('register', registerStrategy);
passport.use('login', loginStrategy);
