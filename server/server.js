require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const petRouter = require('./Routes/PetRoute')
const AdoptFormRoute = require('./Routes/AdoptFormRoute')
const AdminRoute = require('./Routes/AdminRoute')
const cors = require('cors');
const path = require('path');
const Pet = require('./Model/PetModel'); // ✅ ADD THIS LINE

const app = express();

app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(petRouter);
app.use('/form', AdoptFormRoute);
app.use('/admin', AdminRoute);

// ✅ ✅ NEW ROUTE TO FETCH ALL PETS
app.get('/allPets', async (req, res) => {
  try {
    const pets = await Pet.find().sort({ updatedAt: -1 });
    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

mongoose.connect('mongodb+srv://yenurkartushar944:tushar12345@cluster0.7vuhb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to DB');
    const PORT = 4000;
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
 