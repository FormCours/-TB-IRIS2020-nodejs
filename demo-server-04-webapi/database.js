const mongoose = require('mongoose');
const {dbUrl} = require('./config/app.json');
const logger = require('./utils/logger');




// Initialize connection to MongoDB
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    logger.info('Connection MongoDB is successful !');

    // // Pour un test uniquement !!!
    // const Product = require('./models/product');
    
    // const prod = Product({
    //     name: "Demo2",
    //     price: 42,
    //     description: "Ceci est un produit de demo",
    //     available: true,
    //     tags: ["demo", "exemple"]
    // });
    // prod.save();

}).catch(e => {
    logger.error('Error on connection to MongoDB');

    logger.info('Server stop on Error');
    process.exit();
})

const db = mongoose.connection;
module.exports = db;