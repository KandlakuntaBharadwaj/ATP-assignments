import exp from "express";
import mongoose from "mongoose";

export const productApp = exp.Router();

// Product Schema 

const productSchema = new mongoose.Schema({

    productId:{
        type:Number,
        required:true,
        unique:true
    },

    productName:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true,
        min:10000,
        max:50000
    },

    brand:{
        type:String,
        required:true
    }

});

const ProductModel = mongoose.model("product", productSchema);


// CREATE PRODUCT 

productApp.post("/products", async(req,res)=>{

    const newProduct=req.body;

    const productDoc=new ProductModel(newProduct);

    await productDoc.save();

    res.status(201).json({
        message:"Product created"
    });

});


// READ ALL PRODUCTS 

productApp.get("/products", async(req,res)=>{

    const products=await ProductModel.find();

    res.json({
        message:"Products list",
        payload:products
    });

});


// READ PRODUCT BY ID 

productApp.get("/products/:productId", async(req,res)=>{

    const id=Number(req.params.productId);

    const product=await ProductModel.findOne({productId:id});

    res.json({
        message:"Product found",
        payload:product
    });

});


// UPDATE PRODUCT

productApp.put("/products/:productId", async(req,res)=>{

    const id=Number(req.params.productId);

    const updatedProduct=req.body;

    await ProductModel.updateOne(
        {productId:id},
        {$set:updatedProduct}
    );

    res.json({
        message:"Product updated"
    });

});


// DELETE PRODUCT 

productApp.delete("/products/:productId", async(req,res)=>{

    const id=Number(req.params.productId);

    await ProductModel.deleteOne({productId:id});

    res.json({
        message:"Product deleted"
    });

});