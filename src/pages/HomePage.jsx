/* eslint-disable no-unused-vars */
// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import { fetchNewsData } from '../services/newsService'; // Import the news service
import ChartComponent from '../components/ChartComponent';
import '../style/HomePage.css'; // Import CSS file for styling

const HomePage = () => {
  const [newsData, setNewsData] = useState([]);
  const [chartData, setChartData] = useState({ labels: [], values: [] });

  useEffect(() => {
    const getNewsData = async () => {
      try {
        // Fetch news data
        const data = await fetchNewsData('technology'); // Example query
        setNewsData(data.articles);
        
        // Example chart data processing (adjust according to your needs)
        const labels = data.articles.map(article => article.publishedAt.slice(0, 10));
        const values = data.articles.map(article => 1); // Dummy values; adjust as needed

        setChartData({ labels, values });
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    getNewsData();
  }, []);

  return (
    <div className="homepage">
      <h1 className="homepage-title">News Dashboard</h1>
      <div className="chart-container">
        <ChartComponent data={chartData} />
      </div>
      <div className="news-cards-container">
        {newsData.length > 0 ? (
          newsData.map((article, index) => (
            <div key={index} className="news-card">
              <img src={article.urlToImage} alt={article.title} className="news-card-image" />
              <div className="news-card-content">
                <h2 className="news-card-title">{article.title}</h2>
                <p className="news-card-description">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-card-link">Read more</a>
              </div>
            </div>
          ))
        ) : (
          <p>No news available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
