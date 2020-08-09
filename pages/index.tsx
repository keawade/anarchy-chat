import Head from 'next/head';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anarchy Chat</title>
      </Head>

      <main>
        <h1>Welcome to Anarchy Chat!</h1>
      </main>
    </div>
  );
};

export default Home;
