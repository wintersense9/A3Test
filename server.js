// Replace "..." to load "the required" modules




const express = require('express');
const mongoose = require('mongoose');

// Replace "..." to fill in uri connected to your MongoDB
// No need to specify the use of a database
const uri = 'mongodb+srv://lihangqianhit_db_user:sCx6pmFClq9SSwuo@cluster0.hizdow4.mongodb.net/'
// const uri = 'mongodb+srv://lihangqianhit_db_user:sCx6pmFClq9SSwuo@cluster0.hizdow4.mongodb.net/'
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected via Mongoose'))
  .catch((err) => console.error('MongoDB connection error:', err))
  .finally()

const kittySchema = require('./models/kitty');
const Kitten = mongoose.model('Kitten', kittySchema);

const app = express();

// Replace "..." to make the server handle the get request from '/insert' path
app.get('/insert', async (req, res) => {
  try {
    const { name, age } = req.query;
    if (name === undefined || age === undefined) {
      return res.status(400).json({
        error: 'Missing kitty parameters: name, age'
      });
    }
    const kitty = new Kitten({name, age});
    // Task 3a(2): validate kitty data BEFORE inserting into MongoDB
    const validationError = kitty.validateSync();
    if (validationError) {
      return res.status(400).json({
        error: validationError.message
      });
    }
    console.log(kitty);
    await kitty.save();
	const findresults = await Kitten.find();
	results = JSON.stringify(findresults)
	res.send('You have insert one kitty file successfully! Here are all current Kittens in MongoDB:' + results)
  }catch (err) {
    console.error('Insert error:', err);
    return res.status(500).json({
      error: 'Failed to insert kitty!'
    });
  }
});

// Replace "..." to make the app listen on port `3000`.
const PORT = process.env.PORT ||3000;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});