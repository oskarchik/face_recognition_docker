import { NextFunction, Request, Response } from 'express';
import { Error } from 'mongoose';

import { User } from '../models/User';

export const updateEntries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.body._id;
  if (id) {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $inc: { entries: 1 },
      },
      { new: true }
    );

    return res.status(200).send(updatedUser);
  } else {
    const err = new Error('no hay usuariooooo');
    next(err);
  }
};
