const express = require("express");
const {FormModel} = require("../Models/form.model");

const formRouter = express.Router();

formRouter.post("/create", async(req, res) =>{
    // console.log(req.body);
    try {
        const form = new FormModel(req.body);
        // console.log(form);
        await form.save();
        res.status(200).json({msg: "New form is Created"});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

formRouter.get("/", async(req, res) =>{
    try {
        const forms = await FormModel.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
})

module.exports = {
    formRouter
}