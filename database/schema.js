const mongoose = require("mongoose");

const Users = new mongoose.Schema({
	username:{
		type:String,
		required:true,
		unique:true
	},
	password:{
		type:String,
		required:true,
		unique:true
	}
},
	{timestamps:true})

const UserNote = new mongoose.Schema({
	userID:{
		type:String,
		required:true
	},
	title:{
		type:String,
		required:true
	},
	description:{
		type:String,
		required:true
	}
},
	{timestamps:true})


const UsersNote = new mongoose.model("Note",UserNote)
const User = new mongoose.model("User",Users)

module.exports = {
	User,
	UsersNote
}