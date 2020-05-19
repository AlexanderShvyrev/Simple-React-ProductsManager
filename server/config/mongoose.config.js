const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/productsDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Database connected =================="))
    .catch(err => console.log("Error", err))