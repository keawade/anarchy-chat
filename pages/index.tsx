import Head from 'next/head';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anarchy Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Anarchy Chat!</h1>
      </main>
    </div>
  );
};

export default Home;
