// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Fetch news article data for News feed
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  profile_image: string
  title: string,
  published_date: string,
  author: string,
  description: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json(newsData);
}

//TODO - remove placeholder data, connect to real api
const newsData = [
  {
    profile_image: '/images/news/victor.png',
    title: 'ATT Released on the Quest!',
    published_date: 'July 16, 2021',
    author: 'Victor',
    description: 'Hello peeps, Victor here bearing good news! After a long year of silence, suspense and mystery, we’ve announced that we were officially working on porting A Township Tale to the Oculus Quest back in March.'
  },
  {
    profile_image: '/images/news/victor.png',
    title: 'ATT Released on the Quest!',
    published_date: 'July 16, 2021',
    author: 'Victor',
    description: 'Hello peeps, Victor here bearing good news! After a long year of silence, suspense and mystery, we’ve announced that we were officially working on porting A Township Tale to the Oculus Quest back in March.'
  },
  {
    profile_image: '/images/news/victor.png',
    title: 'ATT Released on the Quest!',
    published_date: 'July 16, 2021',
    author: 'Victor',
    description: 'Hello peeps, Victor here bearing good news! After a long year of silence, suspense and mystery, we’ve announced that we were officially working on porting A Township Tale to the Oculus Quest back in March.'
  },
  {
    profile_image: '/images/news/victor.png',
    title: 'ATT Released on the Quest!',
    published_date: 'July 16, 2021',
    author: 'Victor',
    description: 'Hello peeps, Victor here bearing good news! After a long year of silence, suspense and mystery, we’ve announced that we were officially working on porting A Township Tale to the Oculus Quest back in March.'
  },
  {
    profile_image: '/images/news/victor.png',
    title: 'ATT Released on the Quest!',
    published_date: 'July 16, 2021',
    author: 'Victor',
    description: 'Hello peeps, Victor here bearing good news! After a long year of silence, suspense and mystery, we’ve announced that we were officially working on porting A Township Tale to the Oculus Quest back in March.'
  },
  {
    profile_image: '/images/news/victor.png',
    title: 'ATT Released on the Quest!',
    published_date: 'July 16, 2021',
    author: 'Victor',
    description: 'Hello peeps, Victor here bearing good news! After a long year of silence, suspense and mystery, we’ve announced that we were officially working on porting A Township Tale to the Oculus Quest back in March.'
  },
  {
    profile_image: '/images/news/victor.png',
    title: 'ATT Released on the Quest!',
    published_date: 'July 16, 2021',
    author: 'Victor',
    description: 'Hello peeps, Victor here bearing good news! After a long year of silence, suspense and mystery, we’ve announced that we were officially working on porting A Township Tale to the Oculus Quest back in March.'
  },
  {
    profile_image: '/images/news/victor.png',
    title: 'ATT Released on the Quest!',
    published_date: 'July 16, 2021',
    author: 'Victor',
    description: 'Hello peeps, Victor here bearing good news! After a long year of silence, suspense and mystery, we’ve announced that we were officially working on porting A Township Tale to the Oculus Quest back in March.'
  },
  {
    profile_image: '/images/news/victor.png',
    title: 'ATT Released on the Quest!',
    published_date: 'July 16, 2021',
    author: 'Victor',
    description: 'Hello peeps, Victor here bearing good news! After a long year of silence, suspense and mystery, we’ve announced that we were officially working on porting A Township Tale to the Oculus Quest back in March.'
  },
]
