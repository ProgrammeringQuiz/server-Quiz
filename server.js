const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const quizRouter = require('./routes/QuizRoutes')

app.use(express.json())
app.use(cors())
app.use("/api/quiz", quizRouter)

const server = app.listen(8080, function(){
    const host = server.address().address
    const port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})

//configure mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://admin:4zYSLmNp7iMBGV1oyDfS@cluster0.fldldow.mongodb.net/quiz?retryWrites=true&w=majority",
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