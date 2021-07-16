require('./database/conn')
const {templatePath,partialsPath,staticPath} = require('./contents/path')
const express = require("express");
const hbs = require("hbs");
const cors = require("cors");
const bodyParser = require("body-parser");
const {router} = require('./routes/routes')
const port = process.env.PORT || 8080
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(express.static(staticPath))

app.set('view engine',"hbs")
app.set('views',templatePath)

hbs.registerPartials(partialsPath)

// All Post Methods
app.use('',router)

app.listen(port,()=>console.log(`listening on port ${port} ...`))