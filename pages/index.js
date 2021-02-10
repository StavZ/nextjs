import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>накалякала я вот тут шо то. Вот ссылкО4ки на мои соц сети как бы да. Вот <a href="https://vk.com/stavzdev">вконтактик</a>, вот <a href="https://twitter.com/StavZDev">твитик</a>, онлифанса нету ;(</p>
        <p>тут мои <Link href="/projects">проектики</Link>, девачки</p>
      </section>
    </Layout>
  )
}