import React from 'react';
import Image from 'next/image';

export default function NewsItem() {
  return (
    <div className="news-item-container p-4 md:p-6 lg:p-8 flex flex-col-reverse items-center lg:flex-row justify-between hover:transform hover:translate-x-px cursor-pointer">
      <div className="w-32 h-32 news-item-profile-image hidden lg:block">
        <img src="/images/news/victor.png" className="w-32 h-32" />
      </div>
      <div  className="w-full pt-2 md:pt-4 lg:pt-0 lg:w-2/5">
        <h2 className="news-item-title font-bold text-xl md:text-4xl lg:text-2xl">ATT Released on the Quest!</h2>
        <p className="news-item-date font-normal text-sm md:text-lg text-gray-500 mb-1">July 16, 2021</p>
        <p className="news-item-author text-sm text-gray-500 mb-2 hidden lg:block">by Victor</p>
        <h3 className="news-item-text text-sm md:text-xl lg:text-sm text-gray-300 line-clamp-2">
          Hello peeps, Victor here bearing good news! After a long year of
          silence, suspense and mystery, we’ve announced that we were officially
          working on porting A Township Tale to the Oculus Quest back in March.
        </h3>
      </div>
      <div className="w-full lg:w-64">
        <img
          src="/images/news/quest_ship_tale_thumbnail_1280_720.jpg"
          className="w-full h-auto lg:w-64 lg:h-32"
        />
      </div>
    </div>
  );
}
