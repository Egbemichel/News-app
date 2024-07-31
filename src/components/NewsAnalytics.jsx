/* eslint-disable no-unused-vars */
// src/components/NewsAnalytics.jsx
import React, { useEffect, useState } from 'react';
import { fetchNewsData } from '../services/newsService';
import ChartComponent from './ChartComponent';

const NewsAnalytics = () => {
  const [newsData, setNewsData] = useState({ labels: [], values: [] });

  useEffect(() => {
    const getData = async () => {
      const data = await fetchNewsData('social media');
      const labels = data.articles.map(article => new Date(article.publishedAt).toLocaleDateString());
      const values = data.articles.map(article => article.source.name.length); // Example: using source name length as a value
      setNewsData({ labels, values });
    };

    getData();
  }, []);

  return (
    <div>
      <h2>News Analytics</h2>
      <ChartComponent data={newsData} />
    </div>
  );
};

export default NewsAnalytics;
