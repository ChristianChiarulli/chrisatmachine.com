import Head from 'next/head'
import Header from './Header'
import styles from '@/styles/components/Layout.module.css'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <meta property='og:image' content={'/icons/chrisatmachine.png'} />
        <link rel='icon' href='/favicon.ico' />
        {/* <meta name='viewport' content='width=device-width, initial-scale=1.0' /> */}
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

Layout.defaultProps = {
  title: 'chris@machine',
  keywords:
    'development, coding, programming, bitcoin, neovim, linux, ethereum',
  description: "Christian Chiarulli's website",
}
