import React from 'react';
import Image from 'next/image';

export default function NewsItem() {
  return (
    <div className="news-item-container flex justify-between">
      <div className="w-32 news-item-profile-image">
        <img src="/images/news/victor.png" className="w-32 h-32" />
      </div>
      <div  className="w-2/5">
        <h2 className="news-item-title font-bold text-lg">ATT Released on the Quest!</h2>
        <p  className="news-item-date font-light text-gray-500">July 16, 2021</p>
        <p className="news-item-author text-sm text-gray-500">by Victor</p>
        <h3 className="news-item-text text-sm text-gray-300 line-clamp-2">
          Hello peeps, Victor here bearing good news! After a long year of
          silence, suspense and mystery, we’ve announced that we were officially
          working on porting A Township Tale to the Oculus Quest back in March.
        </h3>
      </div>
      <div className="w-64">
        <img
          src="/images/news/quest_ship_tale_thumbnail_1280_720.jpg"
          className="w-64 h-32"
        />
      </div>
    </div>
  );
}
