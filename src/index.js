const express=require('express');
const app=express();
const bodyParser=require('body-parser');

//const { sendBasicEmail }=require('./services/email-service');

const cron=require('node-cron');

const { PORT }=require('./config/serverConfig');

const setUpAndStartServer=()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
        // sendBasicEmail(
        //     'support@gmail.com',
        //     'srinubandlamudi55@gmail.com',
        //     'This is a testing email',
        //     'Hey,How are you ,This is my first email'
        // );
            cron.schedule('*/2 * * * *',()=>{
                    console.log("Cron job for every two minutes");
            });
    });

}

setUpAndStartServer();