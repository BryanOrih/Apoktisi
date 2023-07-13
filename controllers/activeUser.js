const mongoose = require("mongoose");
const activeUser = require('../models/activeUsers.js')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const Mailgen = require('mailgen')

//NOTE - Bottom code is for log in
// let userFromDB = await activeUser.findOne({email: userInputs.email})

const createUser = async (req,res)=>{
    try{
        //SECTION - Email sender connection
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });
        //NOTE - Use Mailgen for mail design
        // let Mailgenator = new Mailgen({
        //     theme: "default",
        //     product:{
        //         name: "Mailgen",
        //         link: 'https://mailgen.js/'
        //     }
        // })
        const userInputs = await req.body
        //SECTION - Generate token
        jwt.sign(
            {
                userInputs,
            },
            process.env.TOKEN_SECRET,
            {
                expiresIn: '1d',
            },
            (err, emailToken) => {
                //SECTION - URL path with JWT passed as params
                const url = `http://localhost:3001/confirmation/${emailToken}`;
                //SECTION - Email being sent with provided email and content
                transporter.sendMail({
                from: process.env.GMAIL_USER,
                to: userInputs.email,
                subject: 'Confirm Email',
                html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
                })
                .catch((err) => {
                    throw err;
                });
            },
        );  
        res.json(userInputs); 
    }catch(err){
        console.log(err);
        res.status(400).send('Bad Request');
    }
}

const getActiveUsers = async (req, res) =>{
    try {
        const allUsers = await activeUser.find();
        res.json(allUsers);
    } catch (err) { 
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}

const confirmToken = async (req,res) =>{
    try{
      const { user: { id } } = jwt.verify(req.params.token, EMAIL_SECRET);
      //FIXME - Use mongoDb syntax
    //   await models.User.update({ confirmed: true }, { where: { id } });
    }catch(err){
      res.send('error');
    }

    return res.redirect('http://localhost:3001/login');
}

module.exports = {
    getActiveUsers,
    createUser,
    confirmToken
}