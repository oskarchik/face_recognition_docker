import passport from 'passport';
import { NextFunction, Request, Response } from 'express';
import { Error } from 'mongoose';
import { User } from '../models/User';

export const registerUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    email,
    password,
    name,
  }: { email: string; password: string; name: string } = req.body;
  if (!email || !password) {
    const err = new Error('User ans password required controller');
    return res.status(400).send({ error: err.message, status: 400 });
  }
  passport.authenticate('register', (err: Error, user) => {
    if (err) {
      return res.status(401).send({ error: err.message, status: 401 });
    }
    req.logIn(user, async err => {
      if (err) {
        return next(err);
      }
      let registeredUser = await getUser(req.user);
      return res.status(200).send(registeredUser);
    });
  })(req, res, next);
};

const getUser = async (user: any) => {
  const userData = await User.findById(user._id).select('-password');
  return userData;
};

export const loginUser = (req: Request, res: Response, next: NextFunction) => {
  const { email, password }: { email: string; password: string } = req.body;

  if (!email || !password) {
    const err = new Error('User ans password required controller');
    return res.status(400).send({ error: err.message, status: 400 });
  }
  passport.authenticate('login', (err, user) => {
    if (err) {
      return res.status(401).send({ error: err.message, status: 401 });
    }
    req.logIn(user, async err => {
      if (err) {
        return next(err);
      }
      const userData = await getUser(req.user);
      return res.status(200).send(userData);
    });
  })(req, res, next);
};

export const logOutUser = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    req.logOut();
    req.session.destroy(() => {
      res.clearCookie('connect.sid');
      return res
        .status(200)
        .send({ message: 'Thanks, you are now logged out' });
    });
  } else {
    return res.status(404).send('No user found');
  }
};

export const checkSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user) {
    const userData = await getUser(req.user);

    return res.status(200).send(userData);
  } else {
    return res.status(404).send({ message: 'No user found' });
  }
};
