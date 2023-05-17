const express = require('express');
const erorHandler = require('./middleware/errorhandler');
const dotenv= require('dotenv').config();

const port =process.env.PORT || 8000;

const app =express();

app.use(express.json());
app.use('/api/contacts',require('./routes/contact.routes'));
app.use(erorHandler);


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})