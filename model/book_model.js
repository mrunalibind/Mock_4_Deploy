let mongoose=require("mongoose");
let bookSchema=mongoose.Schema({
    title:String,
    author:String,
    genre:String,
    description:String,
    price:Number
})

let BookModel=mongoose.model("book",bookSchema);

module.exports={BookModel};