require('dotenv').config({path: 'config.env'})

const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const javaRouter = require('./routes/java/javaRoutes')

app.use(express.json())
app.use(cors())
app.use("/api/java", javaRouter)

const server = app.listen(8080, function(){
    const host = server.address().address
    const port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})

//configure mongoose
mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);


module.exports = server;