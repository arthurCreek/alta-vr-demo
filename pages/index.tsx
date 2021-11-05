import { NEXT_URL } from '../config/index';
import Layout from '../components/Layout';
import React from 'react';
import News from '../components/News';
import NewsItem from '../components/NewsItem';

export interface Props {
  newsItems: any;
}

export default function Home(props: Props) {
  return (
    <Layout>
      <div className="news-container w-8/12 h-1/2 mt-16 mx-auto">
        <div className="news-header-container">
          <h1>TALES OF THE TOWNSHIP</h1>
          <p>UPDATES, NEWS AND DEV BLOGS</p>
        </div>
        {props.newsItems.map((newsItem: any) => (
            <NewsItem key={newsItem.title}/>
          ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${NEXT_URL}/api/news`);
  const newsItems = await res.json();

  return {
    props: { newsItems },
  };
}
