const mongoose = require("mongoose");

mongoose.connect('mongodb://ASK110:1234@cluster0-shard-00-00.a2adr.mongodb.net:27017,cluster0-shard-00-01.a2adr.mongodb.net:27017,cluster0-shard-00-02.a2adr.mongodb.net:27017/test?replicaSet=atlas-c5cfkx-shard-0&ssl=true&authSource=admin',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: true
	}).then(()=> console.log("Database Connected successfully..."))
	.catch((e)=>console.log(e))