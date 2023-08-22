
const Model = require('../models/customers');
const { Op } = require('sequelize');

const Customers = {
  create: async (req, res) => {
    const {
      idUsuario,
      codigo,
      nome,
      cpfCnpj,
      cep,
      logradouro,
      endereco,
      numero,
      bairro,
      cidade,
      uf,
      complemento,
      fone,
      limiteDeCredito,
      validade,
    } = req.body;
    const dataHoraCadastro = Date.now();

    try {
      const customer = await Model.create({
        idUsuario: parseInt(idUsuario),
        dataHoraCadastro,
        codigo,
        nome,
        cpfCnpj,
        cep,
        logradouro,
        endereco,
        numero,
        bairro,
        cidade,
        uf,
        complemento,
        fone,
        limiteDeCredito,
        validade,
      });

      res.status(201).json({ message: 'Cliente cadastrado com sucesso!', customer});
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Não foi possivel criar este usuário', error });
    }
  },
  read: async (req, res) => {
    const { id } = req.params;

    try {
      const customer = await Model.findByPk(id);
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ message: 'Houve um erro de comunicação', error })
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const {
      idUsuario,
      codigo,
      nome,
      cpfCnpj,
      cep,
      logradouro,
      endereco,
      numero,
      bairro,
      cidade,
      uf,
      complemento,
      fone,
      limiteDeCredito,
      validade,
    } = req.body;

    try {
      const customer = await Model.findByPk(id);

      if (customer) {
  
        customer.idUsuario = idUsuario || customer.idUsuario;  
        customer.codigo = codigo || customer.codigo;  
        customer.nome = nome || customer.nome;  
        customer.cpfCnpj = cpfCnpj || customer.cpfCnpj;  
        customer.cep = cep || customer.cep;  
        customer.logradouro = logradouro || customer.logradouro;  
        customer.endereco = endereco || customer.endereco;  
        customer.numero = numero || customer.numero;  
        customer.bairro = bairro || customer.bairro;  
        customer.cidade = cidade || customer.cidade;  
        customer.uf = uf || customer.uf;  
        customer.complemento = complemento || customer.complemento;  
        customer.fone = fone || customer.fone;  
        customer.limiteDeCredito = limiteDeCredito || customer.limiteDeCredito;  
        customer.validade = validade || customer.validade;  

        await customer.save();
  
        res.status(200).json(customer);
      } else {
        res.status(404).send('Usuário não encontrado.');
      }
    } catch (error) {
      
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;

  try {
    const customer = await Model.findByPk(id);

    if (customer) {
      
      await customer.destroy();
      res.status(204).send();

    } else {
      res.status(404).send('Usuário não encontrado');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Ocorreu um erro ao excluir o usuário.');
  }
  },
  readAll: async (req, res) => {
    const customers = await Model.findAll();
    
    res.json({ customers });
  },
  search: async (req, res) => {
    const { filter } = req.query;
    
    try {
      const customers = await Model.findAll({
        where: {
          [Op.or]: [
            { codigo: { [Op.like]: `%${filter}%` } },
            { nome: { [Op.like]: `%${filter}%` } },
            { cep: { [Op.like]: `%${filter}%` } },
            { cidade: { [Op.like]: `%${filter}%` } },
          ]
        }
      });
  
      res.status(200).json(customers);
    } catch (error) {
      console.error('Houve um erro em sua busca:', error);
      res.status(500).send('Erro na busca de usuários.');
    }
  }
}

module.exports = Customers;