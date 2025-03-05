// Import required modules
const express = require('express');
const path = require('path');
const dotenv = require('dotenv')

// load environment variables
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// set view engine to EJS
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// import routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// start server
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
})
