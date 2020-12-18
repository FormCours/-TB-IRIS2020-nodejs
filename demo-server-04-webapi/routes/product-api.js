const productController = require('./../controllers/product-controller');

module.exports = (router) => {

    router.route('/product')
        .get(productController.findAll)     // Recup tout les produit
        .post(productController.insert)     // Ajouter un produit

    router.route('/product/:id')
        .get(productController.findById1)    // Recup un seul prodruit
        .put(productController.update)      // Mise a jours d'un produit
        .delete(productController.delete)   // Suppression d'un produit

    
}