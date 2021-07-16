const path = require("path")

const templatePath = path.join(__dirname,'../templates');
const partialsPath = path.join(templatePath,"/partials");
const staticPath = path.join(__dirname,'../static')

module.exports = {templatePath,partialsPath,staticPath}