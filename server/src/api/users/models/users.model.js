/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
const { mongoose } = require('../../../services/mongoose.service');

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    permissionLevel: Number,
});

userSchema.virtual('id').get(() => this._id.toHexString());

// Ensure virtual fields are serialised.
userSchema.set('toJSON', {
    virtuals: true,
});

userSchema.findById = (cb) => this.model('Users').find({ id: this.id }, cb);

const User = mongoose.model('Users', userSchema);

exports.findByEmail = (email) => User.find({ email });
exports.findById = (id) => User.findById(id).then((result) => {
    const resultJson = result.toJSON();
    delete resultJson._id;
    delete resultJson.__v;
    return resultJson;
});

exports.createUser = (userData) => {
    const user = new User(userData);
    return user.save();
};

exports.list = (perPage, page) => new Promise((resolve, reject) => {
    User.find()
        .limit(perPage)
        .skip(perPage * page)
        .exec((err, users) => {
            if (err) {
                reject(err);
            } else {
                resolve(users);
            }
        });
});

exports.patchUser = (id, userData) => new Promise((resolve, reject) => {
    User.findById(id, (err, user) => {
        if (err) reject(err);

        const patchedUser = { ...user };
        // eslint-disable-next-line guard-for-in
        for (const i in userData) {
            patchedUser[i] = userData[i];
        }
        patchedUser.save((error, updatedUser) => {
            if (error) return reject(error);
            return resolve(updatedUser);
        });
    });
});

exports.removeById = (userId) => new Promise((resolve, reject) => {
    User.remove({ _id: userId }, (err) => {
        if (err) {
            reject(err);
        } else {
            resolve(err);
        }
    });
});
