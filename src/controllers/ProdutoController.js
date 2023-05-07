const produtos = require('../data/produtos.json');
const Produto = require('../models/produto-model')
exports.post =  async (request, response, next) => {

   let produto = await Produto.create(request.body)
   response.status(201).json(produto)
   
 }
exports.put = async (request, response, next) => {

   let id = request.body['id']
   let produto = await Produto.findByPk(id)
   produto.marca = request.body['marca']
   produto.valor = request.body['valor']
   produto.descricao = request.body['descricao']
   let produtoUpedated = await produto.save()
   response.status(200).json(produtoUpedated);

 };
  
 exports.delete = async (request, response, next) => {
    let id = request.params.id;
    let produto = await Produto.findByPk(id);
    await produto.destroy();
    response.status(200).send();
 };
  
 exports.get = async (request, response, next) => {
    const produtos  = await Produto.findAll()
    response.status(200).json(produtos);
 };
  
 exports.getById = async (request, response, next) => {
    let id = request.params.id;
    let produto = await Produto.findByPk(id)
    response.status(200).json(produto);
 };