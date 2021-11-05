import React from 'react';
import NewsItem from './NewsItem';
import { NEXT_URL } from '../config/index';


export default function News() {
  return (
    <div className="news-container w-8/12 h-1/2 mt-16 mx-auto">
      <div className="news-header-container">
        <h1>TALES OF THE TOWNSHIP</h1>
        <p>UPDATES, NEWS AND DEV BLOGS</p>
      </div>
      {/* {props.newsItem.length > 0 && <NewsItem />} */}
    </div>
  );
}

