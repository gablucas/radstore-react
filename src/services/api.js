import axios from "axios";

export const api = axios.create({
  baseURL: 'https://gablucas.github.io/jsonapi/radstore/'
})

export const addressApi = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})