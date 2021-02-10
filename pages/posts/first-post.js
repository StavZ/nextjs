import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/layout';

export default function firstPost () {
  return (
    <Layout>
    <Head>
      <title>First post</title>
      <link rel='icon' href='/favicon.ico'></link>
    </Head>
    <h1>First post</h1>
    <h2>
      <Link href='/'>
        <a>Back to home</a>
      </Link>
    </h2>
    </Layout>
  );
}