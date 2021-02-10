import Head from 'next/head';
import Layout from '../../components/layout';
import styles from '../../styles/Home.module.css';

export default function Projects () {
  return (
    <div className={styles.container}>
      <Layout>
        <Head>
          <title>StavZDev | Projects</title>
          <link rel="icon" href="/favicon.ico"></link>
        </Head>
        <div className={styles.grid}>
          <a className={styles.card} href="https://github.com/Hypixel-API-Reborn/hypixel-api-reborn">
            <h3>Project 1</h3>
            <p>Description 1</p>
          </a>
          <a className={styles.card} href="https://github.com/Hypixel-API-Reborn/hypixel-api-reborn">
            <h3>Project 2</h3>
            <p>Description 2</p>
          </a>
        </div>
      </Layout>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}