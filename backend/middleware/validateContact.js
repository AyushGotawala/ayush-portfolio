const { body, validationResult } = require('express-validator');

const validateContact = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Name is required')
        .isLength({ min: 2 })
        .withMessage('Name should be at least 2 characters long'),

    body('email')
        .trim()
        .notEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Please provide a valid email address')
        .normalizeEmail(),

    body('message')
        .trim()
        .notEmpty()
        .withMessage('Message is required')
        .isLength({ min: 5 })
        .withMessage('Message should be at least 5 characters long'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
            });
        }
        next();
    }
];

module.exports = validateContact;