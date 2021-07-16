const {User,UsersNote} = require('../database/schema')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const JWT_Secret = "sahfyuasgascgsdg526512@###())}{}iushdchuds932784";

const userNotes = async (req,res,next)=>{
    const {id,title,description} = await req.body;
    const note = await UsersNote({userID:id,title,description})
    const createNote = await UsersNote.collection.insertMany([note])
    console.log(createNote)

}

const userData = async (req,res,next)=>{
    const {token} = req.body;
    const decode = jwt.verify(token,JWT_Secret)
    console.log(decode)
    res.json({status:'ok',decode})
}

const loginUser = async (req,res,next) => {
	const {username,password:simpleText} = req.body;

    const user = await User.findOne({username}).lean()
    if (!user){
        return res.json({status:"error",error:"Invalid Username/Password"})
    }

    if (await bcrypt.compare(simpleText,user.password)){
        const token = jwt.sign({id:user._id, username: user.username},JWT_Secret)
        return res.json({status:"ok",data:token})
    }
    res.json({status:"error",error:"Invalid Username/Password"})
}

const registerUser = async (req,res,next) => {
	const {username,password:simpleText} = req.body;
    if(!username || typeof username!=='string'){
        return res.json({status:"error",error:"Invalid Username"});
    }
    if(!simpleText || typeof simpleText!=='string'){
        return res.json({status:"error",error:"Invalid Password"});
    }
    if (simpleText.length < 8){
        return res.json({status:"error",error:"Password too small, should be atleast 8 characters"});
    }
    const password = await bcrypt.hash(simpleText,10);
	try{
        const dataL = new User({username,password});
        const createuser = await User.collection.insertMany([dataL]);
        res.status(201).json({status: 'ok'})
    }catch(e){
        if (e.code === 11000){
            return res.json({status: 'error',error: "Username already in use"})
        }
        throw e
        res.status(400)
    }
}

module.exports = {
	registerUser,
	loginUser,
    userData,
    userNotes
}