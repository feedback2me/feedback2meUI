const crypto = require('crypto');
const UserModel = require('../../users/models/users.model');

exports.hasAuthValidFields = (req, res, next) => {
    const errors = [];

    if (req.body) {
        if (!req.body.email) {
            errors.push('Missing email field');
        }
        if (!req.body.password) {
            errors.push('Missing password field');
        }

        if (errors.length) {
            return res.status(400).send({ errors: errors.join(',') });
        }
        return next();
    }
    return res
        .status(400)
        .send({ errors: 'Missing email and password fields' });
};

exports.isPasswordAndUserMatch = (req, res, next) => UserModel.findByEmail(req.body.email).then((user) => {
    if (!user[0]) {
        return res.status(404).send({});
    }
    const passwordFields = user[0].password.split('$');
    const salt = passwordFields[0];
    const hash = crypto
        .createHmac('sha512', salt)
        .update(req.body.password)
        .digest('base64');
    if (hash === passwordFields[1]) {
        req.body = {
            // eslint-disable-next-line no-underscore-dangle
            userId: user[0]._id,
            email: user[0].email,
            permissionLevel: user[0].permissionLevel,
            provider: 'email',
            name: `${user[0].firstName} ${user[0].lastName}`,
        };
        return next();
    }
    return res.status(400).send({ errors: ['Invalid e-mail or password'] });
});
