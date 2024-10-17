import axios from 'axios';

// Base URL da API
const api = axios.create({
  baseURL: 'https://stephen-king-api.onrender.com/api',
});

// Função para pegar todos os livros
export const getBooks = async () => {
  const response = await api.get('/books');
  return response.data;
};

// Função que busca os detalhes de um livro específico pelo ID
export const getBookDetails = async (id: string) => {
  const response = await api.get(`/book/${id}`); // Chamada específica pelo ID
  return response.data;
};


// Caso você precise lidar com outros endpoints, pode adicionar funções semelhantes:
export const getShorts = async () => {
  const response = await api.get('/shorts');
  return response.data;
};

export const getVillains = async () => {
  const response = await api.get('/villains');
  return response.data;
};

// E assim por diante...
