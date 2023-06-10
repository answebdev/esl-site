import Head from 'next/head';
import Link from 'next/link';
import groq from 'groq';
import client from '../client';
import imageUrlBuilder from '@sanity/image-url';
import styles from '../styles/Index.module.css';
import Header from '../components/Header';

function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

const Index = ({ posts }) => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <Head>
                    <title>ESL Site</title>
                    <meta name="description" content="An ESL Resource Site" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h1 style={{ textAlign: 'center' }}>ESL Site</h1>

                <br />

                {posts.length > 0 &&
                    posts.map(
                        ({ _id, title = '', description = '', slug = '', publishedAt = '', mainImage = '' }) =>
                            slug && (
                                <div key={_id} className={styles.postContainer}>
                                    <div className={styles.box}>
                                        <p className={styles.text}></p>
                                        <br />
                                        <img className={styles.mainImage}
                                            src={urlFor(mainImage).url()}
                                            alt={`${title}`}
                                        />
                                        <p className={styles.text}><span className={styles.postTitle}>{title}</span></p>
                                        <Link className={styles.postLink} href={`/post/${encodeURIComponent(slug.current)}`}>
                                            View Post
                                        </Link>
                                    </div>
                                </div>
                            )
                    )}
            </div >
        </div>
    );
};

export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `);
    return {
        props: {
            posts,
        },
        revalidate: 20,
    };
}

export default Index;