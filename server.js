const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./services/passport')
const authRoutes = require('./routes/authRoutes')
const app = express()
authRoutes(app)
const port = process.env.PORT || 5000
//Check that my server is up and running 
app.listen(port, () => console.log(`Listening on port ${port}`))
mongoose.connect(keys.mongoURI);