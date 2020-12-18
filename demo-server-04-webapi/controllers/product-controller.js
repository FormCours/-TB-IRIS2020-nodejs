const logger = require('./../utils/logger');
const Product = require('./../models/product');

// Réalise les méthodes du CRUD
module.exports = {

    findById1: async (req, res) => {
        try {
            const {id} = req.params;

            const product = await Product.findById(id);
            if(product) {
                res.json(product);
            }
            else {
                res.sendStatus(404);
            }
        }
        catch(error) {
            logger.error('Erreur on find product', error);
            res.sendStatus(400);
        }
    },

    findById2: async (req, res) => {
        try {
            const {id} = req.params;

            // Prise de tête pour rien (Dédicace à Jesse ;) )
            const ObjectId = require('mongoose').Types.ObjectId;
            const product = await Product.findOne({_id: ObjectId(id).toString()});
            if(product) {
                res.json(product);
            }
            else {
                res.sendStatus(404);
            }
        }
        catch(error) {
            logger.error('Erreur on find product', error);
            res.sendStatus(400);
        }
    },

    findAll: async (req, res) => {
        logger.debug('Test', req.query)

        try {
            const {min, max} = req.query;

            let products;  
            if(min !== undefined && max !== undefined) {
                products = await Product.find().where('price').gte(min).lte(max);
            } 
            else if (min !== undefined) {
                products = await Product.find().where('price').gte(min);
            }
            else if (max !== undefined) {
                products = await Product.find().where('price').lte(max);
            }
            else {
                products = await Product.find();
            }

            // res.status(200).send(JSON.stringify(products))
            res.status(200).json(products);
        }
        catch(error) {
            logger.error('Erreur on find product', error);
            res.sendStatus(400);
        }
            
    },

    insert: async (req, res) => {
        try {
            const newProduct = Product(req.body);

            await newProduct.save()
            res.json(newProduct);
        }
        catch(error) {
            logger.error('Erreur on insert product', error);
            res.status(400).json(error);
        }
    },

    update: async (req, res) => {
        try {
            const {id} = req.params;
            const data= req.body;

            const product = await Product.findByIdAndUpdate(id, data, {
                useFindAndModify: false
            });

            if(product) {
                const productUpdate = await Product.findById(id);
                res.json(productUpdate);
            }
            else {
                res.sendStatus(404);
            }

        }
        catch(error) {
            logger.error('Erreur on update product', error);
            res.status(400).json(error);
        }
    },

    delete : async (req, res) => {
        try {
            const {id} = req.params;

            const product = await Product.findByIdAndDelete(id);

            if(product) {
                res.json(product);
                // res.sendStatus(204);
            }
            else {
                res.sendStatus(404);   
            }
        }
        catch(error) {
            logger.error('Erreur on delete product', error);
            res.status(400).json(error);
        }
    }
}