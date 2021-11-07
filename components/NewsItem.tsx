import React from 'react';
import Image from 'next/image';

export default function NewsItem() {
  return (
    <div className="news-item-container p-4 md:p-6 lg:p-9 flex flex-col-reverse items-center lg:flex-row justify-between lg:hover:transform lg:hover:translate-x-px cursor-pointer">
      {/* Author Picture */}
      <div className="w-32 h-32 news-item-profile-image hidden lg:block">
        <img src="/images/news/victor.png" className="w-32 h-32" />
      </div>
      {/* News Item Text */}
      <div  className="w-full pt-2 md:pt-4 lg:pt-0 lg:w-1/2">
        <h2 className="news-item-title font-bold text-xl md:text-4xl lg:text-2xl josefine-font">ATT Released on the Quest!</h2>
        <p className="news-item-date font-normal text-sm md:text-lg gray-medium mb-1 josefine-font">July 16, 2021</p>
        <p className="news-item-author text-sm gray-medium mb-2 hidden lg:block josefine-font">by Victor</p>
        <h3 className="news-item-text text-sm md:text-xl lg:text-sm gray-light line-clamp-2 josefine-font">
          Hello peeps, Victor here bearing good news! After a long year of
          silence, suspense and mystery, we’ve announced that we were officially
          working on porting A Township Tale to the Oculus Quest back in March.
        </h3>
      </div>
      {/* News Item Image */}
      <div className="w-full lg:w-56">
        <img
          src="/images/news/quest_ship_tale_thumbnail_1280_720.jpg"
          className="w-full h-auto lg:w-64 lg:h-32"
        />
      </div>
    </div>
  );
}
