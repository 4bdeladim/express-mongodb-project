if( process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require("express");
const app = express();
const expresslayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');
const mongoose = require("mongoose");
const db = mongoose.connection ;
//

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expresslayouts);
app.use(express.static('public'));
app.use('/', indexRouter);
mongoose.connect(process.env.DATABASE_URL, {  useUnifiedTopology: true,  useNewUrlParser : true});

db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to db'))


app.listen(process.env.PORT || 3000);