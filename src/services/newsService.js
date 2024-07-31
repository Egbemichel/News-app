// src/services/newsService.js
import axios from 'axios';

const apiKey = '3f507c3b42394c4fa4e28ba6c37bebf2';

export const fetchNewsData = async (query, page = 1) => {
  const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&page=${page}&apiKey=${apiKey}`);
  return response.data;
};
