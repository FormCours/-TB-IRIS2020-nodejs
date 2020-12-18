const mongoose = require('mongoose');


// Création d'un schema qui représente le modele de donnée d'un "Produit"
// - Les champs de l'element: 
//      - Nom
//      - Type
//      - Contrainte
//      - Validation
// - Les options de la collection

// Demo 1 - Avec de simple type 
const prodcutSchema1 = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    available: Boolean,
    tags: [String]
}, {
    collection: 'products',
    timestamps: true
})

// Demo 1 - Avec des champs complexe
const prodcutSchema2 = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        validate(value) {
            if(value <= 0) {
                throw new Error('Pas de prix negatif chez nous')
            }
        }
    },
    description: String,
    available: {
        type: Boolean,
        default: true
    },
    tags: [String]
}, {
    collection: 'products',
    timestamps: true
})



// Création du modele de donnée "Produit" sur base du schema
const Product = mongoose.model('product', prodcutSchema2);
module.exports = Product;