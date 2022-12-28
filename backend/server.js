import dotenv from 'dotenv';
import mangoose from 'mangoose';
import express from 'express';
dotenv.config();

const server= express();

server.use(express.json());

require('dotenv').config();
const mongoose= require('mongoose')
console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL,
    {
        useNewUrlParser: true,
    },
     (err)=>{
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Connection Successful");
    }
})