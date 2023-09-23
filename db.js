let mongoose=require("mongoose");
// require("dotenv").config();
let connection=mongoose.connect("mongodb+srv://mrunali:mrunalibind@cluster0.tsxywrf.mongodb.net/Mock_4?retryWrites=true&w=majority");
// Cors
module.exports={connection};