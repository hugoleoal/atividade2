const ProdutoController = require('../controllers/ProdutoController');
module.exports = (app) => {
   app.post('/produtos', ProdutoController.post);
   app.put('/produtos', ProdutoController.put);
   app.delete('/produtos/:id', ProdutoController.delete);
   app.get('/produtos', ProdutoController.get);
   app.get('/produtos/:id', ProdutoController.getById);
}