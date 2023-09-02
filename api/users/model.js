const {Schema, model} = require('mongoose')


const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String,
            required: true
        },
        profile_Pic: {
            type: String,
            default: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png"
        },
        joining: {
            type: Date,
            default: Date.now
        },
        role: {
            type: String,
            required: true,
            default: "user"
        }
    }
)


const User = model('user', userSchema)
module.exports  = {User}