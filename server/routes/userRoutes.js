const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {protect} = require("../middleware/authMiddleware")


const userRoutes = (app) => {

  //@desc   Register new user
  //@route  POST/api/register
  //@access Private
  app.post(`/api/register`, async (req,res)=>{
    //destruct
    const {firstName, lastName, email, password} = req.body
    //
    if (!firstName || !lastName || !email || !password){
      res.status(400)
      throw new Error('Please add all fields')
    }
    
    //check if user exists
    const userExists = await User.findOne({email})
    if(userExists){
      res.status(400)
      throw new Error('user already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hashSync(password,salt)

    //create user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    })

    if(user){
      res.status(201).json({
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: generateToken(user._id)
      })
    }else{
      res.status(400)
      throw new Error('invalid data')
    }
  })

  //@desc   Authenicate a user
  //@route  POST/api/login
  //@access public
  app.post(`/api/login`, async (req,res)=>{

    const {email, password} = req.body
    //find user using email
    const user = await User.findOne({email})
    //check user password is correct
    if (user && (await bcrypt.compare(password, user.password))){
      res.json({
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        token: generateToken(user._id)
      })
    }else{
      res.status(400)
      throw new Error('invalid credentials')
    }

  })

  //@desc   Get user data
  //@route  GET//api/user/me
  //@access Private
  app.get(`/api/user/me`, protect, async (req,res)=>{
         res.status(200).json(req.user)
  })


//gnerate JWT
const generateToken =(id) => {  
  return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn:'30d'})
}

};

module.exports = userRoutes;
