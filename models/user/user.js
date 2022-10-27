const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt")
const SALT_WORK_FACTOR = 10;


const userSchema = new Schema({
    fName: String,
    lName: String,
    username: {type: String, required: true, index: { unique: true}},
    password: {type: String, required: true},
    email: String,
    img: {
        data: Buffer,
        contentType: String
    },
    quizHistory: [String]
}, {collection: 'user'});


userSchema.pre('save', function(next) {
    let user = this;

// only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

// generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });


});

userSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
module.exports = mongoose.model("user", userSchema);