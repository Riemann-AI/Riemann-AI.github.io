const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

/**Setting up the model for middleware scopes */
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        password:{
            type: String,
            required: true,
            minlength: 7,
            trim: true,
            validate(value){
                if (value.toLowerCase().includes('password')){
                    throw new Error('Word password is not allowed!')
                }
            }
        },
        email: {
            type:String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true
        },
        age:{
            type: Number,
            default: 0,
            validate(value){
                if (value <0) {
                    throw new Error('Age must be a positive number!')
                }
            }
        },
        tokens: [{
            token: {
                type: String,
                required: true
            }
        }]
    })
    
    userSchema.methods.generateAuthToken = async function (){
        const user = this
        const token = jwt.sign({ _id: user._id.toString() }, 'thisismynescourse')
        user.tokens = user.tokens.concat({ token })
        await user.save()
        
        return token
    }

    userSchema.statics.findByCredentials = async (email, password) =>{
        const user = await User.findOne({ email })

        if (!user){
            throw new Error('unable to login!')
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch){
            throw new Error('Unable to login!')
        }

        return user
    }


// hash the plain pw before saving
userSchema.pre('save', async function (next){
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    console.log('just before saving')

    next()

})
const User = mongoose.model('User', userSchema )

module.exports = User