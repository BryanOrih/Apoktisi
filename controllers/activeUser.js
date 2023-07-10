const mongoose = require("mongoose");
const activeUser = require('../models/activeUsers.js')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const Mailgen = require('mailgen')

const createUser = async (req,res)=>{
    try{
        // host: 'smtp.gmail.com',
        // port: 587,
        // secure: false,
        // logger: true,
        // debug: true,
        // secureConnection: false, 
        console.log("hitting route")
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });
        // let Mailgenator = new Mailgen({
        //     theme: "default",
        //     product:{
        //         name: "Mailgen",
        //         link: 'https://mailgen.js/'
        //     }
        // })
        // console.log(transporter)\

        // const info = await transporter.sendMail({
        //     from: {
        //         name: "Bryan",
        //         address: process.env.GMAIL_USER
        //     },
        //     to: ["bryanorihuela2459@gmail.com"],
        //     subject: 'Confirm Email',
        //     text: "hello world",
        //     html: `<h1>Please click this email to confirm your email:</h1>`,
        // })

        const userInputs = await req.body
        // console.log(userInputs.email)
        //NOTE - Bottom code is for log in
        // let userFromDB = await activeUser.findOne({email: userInputs.email})
        delete userInputs.password
        const token = await jwt.sign(
            {
                userInputs,
            },
            process.env.TOKEN_SECRET,
            {
                expiresIn: '1d',
            },
            (err, emailToken) => {
                const url = `http://localhost:3001/confirmation/${emailToken}`;

                const info = transporter.sendMail({
                from: process.env.GMAIL_USER,
                to: userInputs.email,
                subject: 'Confirm Email',
                html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
                })
                .then(() => {
                    // res.json(userInputs);
                    console.log('Email sent:', info.messageId);
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