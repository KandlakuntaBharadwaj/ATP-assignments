import exp from "express";
import mongoose from "mongoose";
import { productApp } from "./productAPI.js";

const app = exp();

// middleware
app.use(exp.json());

// forward requests
app.use("/product-api", productApp);

// DB connection
mongoose.connect("mongodb://127.0.0.1:27017/productdb")
.then(()=>{

    console.log("DB connected");

    app.listen(6000,()=>{
        console.log("Server running on port 6000");
    });

})
.catch(err=>console.log("DB error:",err));