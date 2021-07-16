const {User,UsersNote} = require('../database/schema')

const homepage = async (req,res,next)=>{
	try{
		res.render("index")
	}catch(error){
		res.send(error)
	}
}

const loginpage = async (req,res,next)=>{
	try{
		res.render("login")
	}catch(error){
		res.send(error)
	}
}

const registerpage = async (req,res,next)=>{
	try{
		res.render("register")
	}catch(error){
		res.send(error)
	}
}

const gettingnotes = async (req,res,next)=>{
	res.send(await UsersNote.find())
}

module.exports = {
	loginpage,
	homepage,
	registerpage,
	gettingnotes
}