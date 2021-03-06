import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';
import News from './News';
import Report from './Report';
// import Footer from './Footer';
// import Showcase from './Showcase';
// import styles from '@/styles/Layout.module.css';

export interface Props {
  title: string;
  keywords: string;
  description: string;
  children: any;
}

export default function Layout(props: Props) {
  const router = useRouter();

  return (
    <div className="main-container">
      <Head>
        <title>{props.title}</title>
        <meta name="decription" content={props.description} />
        <meta name="keywords" content={props.keywords} />
      </Head>

      <Header />

      {/* {router.pathname === '/' && <Showcase />} */}

      <div className="-mt-1 pt-10 lg:pt-24">{props.children}</div>

      <Report />
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'Tales of The Township | Latest News',
  description: 'Latest News',
  keywords: 'vr, tales of the township, altavr',
};
