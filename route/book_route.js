let express=require("express");
const { BookModel } = require("../model/book_model");
let bookRouter=express.Router();

bookRouter.post("/add",async(req,res)=>{
    let {title,author,genre,description,price}=req.body;
    try {
        price=Number(price);
        let book=new BookModel({title,author,genre,description,price});
        await book.save();
        res.status(200).send({msg:"Book is Added"})
    } catch (error) {
        res.status(400).send({msg:error.message})
    }
})

bookRouter.get("/retrieve",async(req,res)=>{
    try {
        let book=await BookModel.find();
        res.status(200).send({msg:book});

    } catch (error) {
        res.status(400).send(error.message)
    }
})

bookRouter.delete("/delete/:ID",async(req,res)=>{
    let {ID}=req.params;
    try {
        await BookModel.findByIdAndDelete({_id:ID});
        res.status(200).send({msg:"Book is Deleted"})

    } catch (error) {
        res.status(400).send(error.message)
    }
})
bookRouter.get("/filter",async(req,res)=>{
    let {genre}=req.query;
    try {
        let book=await BookModel.aggregate([{$match:{genre:genre}}])
        res.status(200).send({msg:book});

    } catch (error) {
        res.status(400).send(error.message)
    }
})


bookRouter.get("/sort/:Order",async(req,res)=>{
    let {Order}=req.params;
    try {
        let book=await BookModel.aggregate([{$sort:{price:Number(Order)}}])
        res.status(200).send({msg:book});

    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports={bookRouter}