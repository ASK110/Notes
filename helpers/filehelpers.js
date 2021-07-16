
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
	destination:(req,file,cb)=>{
		cb(null,'static/profile')
	},filename: (req,file,cb)=>{
		console.log(file.originalname)
		cb(null,new Date().toISOString().replace(/:/g,'-')+'-'+file.originalname)
	}
});

const fileFilter = (req,file,cb)=>{
	if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === "image/jpeg"){
		cb(null,true);
	}else{
		cb(null,false);
	}
}

const upload = multer({storage,fileFilter});

module.exports = {upload}
