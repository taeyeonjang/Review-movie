const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const port = 5200;

//application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
//application/json
app.use(express.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log('mongoDB connected'))
  .catch((err) => console.log(err))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
