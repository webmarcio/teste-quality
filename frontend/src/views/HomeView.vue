<template>
  <div style="display: flex;">
    <div class="container-1">
      <h3 class="title">Formulário de Cadastro</h3>
      <hr>
      <form @submit.prevent="signUp">
        <label for="idUsuario">Id do Usuário:</label><br>
        <input type="text" id="idUsuario" v-model="idUsuario" required>
        <br>
        <label for="codigo">Código:</label><br>
        <input type="text" id="codigo" v-model="codigo" required>
        <br>
        <label for="nome">Nome:</label><br>
        <input type="text" id="nome" v-model="nome" required>
        <br>
        <label for="cpfCnpj">CPF/CNPJ:</label><br>
        <input type="text" id="cpfCnpj" v-model="cpfCnpj" required>
        <br>
        <label for="cep">CEP:</label><br>
        <input class="field-cep" type="text" id="cep" v-model="cep" required>
        <button @click="viaCEP()">Pesquisar CEP</button>
        <br>
        <label for="logradouro">Logradouro:</label><br>
        <select id="logradouro" v-model="logradouro">
          <option value="Rua">Rua</option>
          <option value="Avenida">Avenida</option>
          <option value="Travessa">Travessa</option>
          <option value="Alameda">Alameda</option>
          <option value="Praça">Praça</option>
          <option value="Estrada">Estrada</option>
        </select>
        <br>
        <label for="endereco">Endereço:</label><br>
        <input type="text" id="endereco" v-model="endereco" required disabled>
        <br>
        <label for="numero">Número:</label><br>
        <input type="text" id="numero" v-model="numero" required>
        <br>
        <label for="bairro">Bairro:</label><br>
        <input type="text" id="bairro" v-model="bairro" required disabled>
        <br>
        <label for="cidade">Cidade:</label><br>
        <input type="text" id="cidade" v-model="cidade" required disabled>
        <br>
        <label for="uf">UF:</label>
        <input type="text" id="uf" v-model="uf" required disabled>
        <br>
        <label for="complemento">Complemento:</label><br>
        <input type="text" id="complemento" v-model="complemento">
        <br>
        <label for="fone">Fone:</label><br>
        <input type="text" id="fone" v-model="fone" required>
        <br>
        <label for="limiteDeCredito">Limite De Crédito:</label><br>
        <input type="text" id="limiteDeCredito" v-model="limiteDeCredito" required>
        <br>
        <label for="validade">Validade:</label><br>
        <input type="date" id="validade" v-model="validade" required>
        <br>
        <button style="width: 100%;" type="submit">Cadastrar</button>
      </form>
      <p style="text-align: center;width: 100%" v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <p style="text-align: center;width: 100%" v-if="successMessage" class="success-message">{{ successMessage }}</p>
    </div>
    <div class="container-2">
      <h3 class="title">Pesquisa de usuários cadastrados</h3>
      <hr>
      
      <form @submit.prevent="handleSearchInput">
        <label for="search">Pesquisar por...</label><br>
        <input type="text" id="search" v-model="search">

        <button style="width: 100%;" type="submit">Buscar</button>
      </form>
      <hr>
      <table>
        <tr v-for="customer in searchResults">
          <td>{{ customer.idUsuario }}</td>
          <td>{{ customer.codigo }}</td>
          <td>{{ customer.nome }}</td>
          <td>{{ customer.cpfCnpj }}</td>
          <td>{{ customer.cep }}</td>
          <td>{{ customer.logradouro }}</td>
          <td>{{ customer.endereco }}</td>
          <td>{{ customer.numero }}</td>
          <td>{{ customer.bairro }}</td>
          <td>{{ customer.cidade }}</td>
          <td>{{ customer.uf }}</td>
          <td>{{ customer.complemento }}</td>
          <td>{{ customer.fone }}</td>
          <td>{{ customer.limiteDeCredito }}</td>
          <td>{{ handleFormatDate(customer.validade) }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { format } from 'date-fns';

export default {
  data() {
    return {
      idUsuario: '',
      codigo: '',
      nome: '',
      cpfCnpj: '',
      cep: '',
      logradouro: '',
      endereco: '',
      numero: '',
      bairro: '',
      cidade: '',
      uf: '',
      complemento: '',
      fone: '',
      limiteDeCredito: '',
      validade: '',
      errorMessage: '',
      successMessage: null,
      search: '',
      searchResults: [],
    };
  },
  methods: {
    async signUp() {
      try {
        const { data } = await axios.post('http://localhost:3000/api/v1/customer/', { 
          idUsuario: this.idUsuario,
          codigo: this.codigo,
          nome: this.nome,
          cpfCnpj: this.cpfCnpj,
          cep: this.cep,
          logradouro: this.logradouro,
          endereco: this.endereco,
          numero: this.numero,
          bairro: this.bairro,
          cidade: this.cidade,
          uf: this.uf,
          complemento: this.complemento,
          fone: this.fone,
          limiteDeCredito: this.limiteDeCredito,
          validade: this.validade,
        });
        this.successMessage = data.message;
      } catch (error) {
        this.errorMessage = 'Houve um erro ao tentar incluir este cliente';
      }
    },
    async handleSearchInput() {
      const { data } = await axios.get(`http://localhost:3000/api/v1/search?filter=${this.search}`);
      this.searchResults = data;
    },
    handleFormatDate(date) {
      return format(new Date(), 'dd/MM/yyyy');
    }
  },
  async viaCEP() {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${this.cep}/json/`);
      
      this.endereco = data.logradouro;
      this.bairro = data.bairro;
      this.cidade = data.localidade;
      this.uf = data.uf;
    
    } catch (error) {
      console.log(error);
    }
  }, 
  
}
</script>

<style>
.title {
  color: #464E47
}
hr {
  margin-bottom: 16px;
}

.error-message {
  color: red;
}

.success-message {
  color: green;
}

label {
  color: #464E47;
  font-weight: 500;
  
}

input, select {
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 16px;
  height: 32px;
  width: 100%;
  text-indent: 8px;
  outline-color: #96E6B3;
}
.container-1 {
  flex: 1;
  margin-right: 8px;
}
.container-2 {
  flex: 1;
  margin-left: 8px;
}
.field-cep {
  width: 200px;
  margin-right: 10px;
}
.half-width {
  width: 50%;
}
button {
  height: 36px;
  border: none;
  background-color: #464E47;
  color: #fff;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 500;
}
table {
  /* border: 1px solid #ccc; */
  font-size: 12px;
}
td {
  border-bottom: 1px solid #ccc;
}
</style>
