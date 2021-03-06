import { body } from 'express-validator';

export const UserRegisterValidator = [
  body('login')
    .not().isEmpty().withMessage('Login cannot be empty')
    .isString().withMessage('Login should be a string')
    .matches(/^[0-9a-zA-Z]+$/).withMessage('Login should contain only letters and numbers'),

  body('password')
    .not().isEmpty().withMessage('Password cannot be empty')
    .isString().withMessage('Password should be a string')
    .custom((value, { req }) => {
      if (value !== req.body.passwordConfirmation) {
        throw new Error('Passwords do not match');
      }

      return value;
    }),
];

export const UserLoginValidator = [
  body('login')
    .not().isEmpty().withMessage('Login cannot be empty')
    .isString().withMessage('Login should be a string')
    .matches(/^[0-9a-zA-Z]+$/).withMessage('Login should contain only letters and numbers'),

  body('password')
    .not().isEmpty().withMessage('Password cannot be empty')
    .isString().withMessage('Password should be a string')
];
