const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1/pizza-hunt', {
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pizza-hunt', {
    // useNewUrlParser: true, 
    // useUnifiedTopology: true
});

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pizza-hunt', {
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

//use this to log mongo queries being executed 
mongoose.set('debug', true);

app.use(require('./routes'));


app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
