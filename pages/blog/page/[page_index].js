import fs from 'fs'
import path from 'path'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import Pagination from '@/components/Pagination'
import CategoryList from '@/components/CategoryList'
import { POSTS_PER_PAGE } from '@/config/index'
import { getPosts } from '@/lib/posts'
import styles from '@/styles/blog/page/page_index.module.css'
import Search from '@/components/Search'
import { FaDiscord, FaGithub, FaHeart, FaPatreon, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function BlogPage({ posts, numPages, currentPage, categories }) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.pageindex__container}>
          <h1 className={styles.pageindex__title}>ARTICLES</h1>

          <div className={styles.pageindex__posts}>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>

          <Pagination currentPage={currentPage} numPages={numPages} />
        </div>

        <div className={styles.sidebar__container}>
          <CategoryList title='ALL TOPICS' categories={categories} />
        </div>
      </div>

      <div className={styles.footer}>
        <ul className={styles.socials}>
          <li>
            <a
              className={styles.social__item}
              target='_blank'
              rel='nofollow noopener noreferrer'
              href={'https://github.com/ChristianChiarulli'}
            >
              <FaGithub
                color='#FFFFFF'
                // color='#f34f29'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
            </a>
          </li>
          <li>
            <a
              className={styles.social__item}
              target='_blank'
              rel='nofollow noopener noreferrer'
              href={'https://www.youtube.com/chrisatmachine'}
            >
              <FaYoutube
                color='#FE0000'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
            </a>
          </li>
          <li>
            <a
              className={styles.social__item}
              target='_blank'
              rel='nofollow noopener noreferrer'
              href={'https://twitter.com/chrisatmachine'}
            >
              <FaTwitter
                color='#1c9bf0'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
            </a>
          </li>
          <li>
            <a
              className={styles.social__item}
              target='_blank'
              rel='nofollow noopener noreferrer'
              href={'https://discord.gg/Xb9B4Ny'}
            >
              <FaDiscord
                color='#7289dc'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
            </a>
          </li>
          <li>
            <a
              className={styles.social__item}
              target='_blank'
              rel='nofollow noopener noreferrer'
              href={'https://www.patreon.com/chrisatmachine'}
            >
              <FaPatreon
                color='#E8715C'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
            </a>
          </li>
          <li>
            <a
              className={styles.social__item}
              target='_blank'
              rel='nofollow noopener noreferrer'
              href={'https://github.com/sponsors/ChristianChiarulli'}
            >
              <FaHeart
                color='#EB48AB'
                size='30'
                style={{ marginRight: '.4rem' }}
              />
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)

  let paths = []

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    })
  }

  console.log('paths:', paths)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const page = parseInt((params && params.page_index) || 1)

  const files = fs.readdirSync(path.join('posts'))

  const posts = getPosts()

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.topic)
  const uniqueCategories = [...new Set(categories)]

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)
  const pageIndex = page - 1
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  )

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories: uniqueCategories,
    },
  }
}
