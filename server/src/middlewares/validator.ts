import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const userValidatorRules = () => {
  return [
    body('email').isEmail().normalizeEmail().withMessage('Invalid email input'),
    body('password')
      .isLength({ min: 4 })
      .withMessage('Wrong credentials')
      .trim()
      .escape(),
    body('name')
      .isLength({ min: 2 })
      .withMessage('Wrong credentials')
      .not()
      .isEmpty()
      .trim()
      .escape()
      .optional(),
  ];
};

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors: Array<{}> = [];
  errors.array().map(err => extractedErrors.push({ error: err.msg }));

  return res.status(400).json({
    errors: extractedErrors,
  });
};
