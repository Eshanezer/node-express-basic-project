const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv= require('dotenv').config();
const connectDB = require('./config/db.connection');


connectDB();
const port =process.env.PORT || 8000;

const app =express();

app.use(express.json());
app.use('/api/contacts',require('./routes/contact.routes'));
app.use('/api/users',require('./routes/user.routes'));
app.use(errorHandler);


app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})