const mongoose = require("mongoose");
const activeUser = require('../models/activeUsers.js')

const getActiveUsers = async (req, res) =>{
    const allUsers = await activeUser.find()
    console.log(allUsers)
    res.json(allUsers)
}

const createUser = async (req,res)=>{
    console.log("heyeeeeeeeee")
    try{
        const data = await req.body
        console.log("sent!")
        res.json(data)
    }catch(err){
        console.log(err)
        res.send('bad request')
    }
}

module.exports = {
    getActiveUsers,
    createUser
}