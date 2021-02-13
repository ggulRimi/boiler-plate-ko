const express = require('express')
const app = express()
const port = 4000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://haerimlee486:qkqlddl0@boilerplate.l6lvu.mongodb.net/<dbname>?retryWrites=true&w=majority', {   
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!~~안녕하세용~')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})