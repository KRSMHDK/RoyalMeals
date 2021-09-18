import Head from 'next/head';
import MainContent from '../components/main/MainContent';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Next Movie Database (NXDB)</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="search millions of movies" />
      </Head>
      <MainContent />
    </div>
  );
}
