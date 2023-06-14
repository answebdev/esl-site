import { useState, useEffect } from "react";
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

const Index = () => {
    const [exercises, setExercises] = useState([]);
    const [sentences, setSentences] = useState([]);

    useEffect(() => {
        client.fetch(
            `*[_type == "exercise"] | order(publishedAt desc){
              title,
              slug,
              body,
              description,
              author,
              mainImage {
                  asset -> {
                      _id,
                      url
                  },
                  alt
              },
              publishedAt,
              "categories": categories[]->title
          }`
        ).then((data) => setExercises(data))
            .catch(console.error);
    }, []);

    useEffect(() => {
        client.fetch(
            `*[_type == "sentence"] | order(publishedAt desc){
              title,
              slug,
              body,
              description,
              author,
              mainImage {
                  asset -> {
                      _id,
                      url
                  },
                  alt
              },
              publishedAt,
              "categories": categories[]->title
          }`
        ).then((data) => setSentences(data))
            .catch(console.error);
    }, []);

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <Head>
                    <title>ESL Site</title>
                    <meta name="description" content="An ESL Resource Site." />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <h1 style={{ textAlign: 'center' }}>Grammar Exercises</h1>

                <br />

                {exercises.map((p, i) => (
                    <div key={i} className={styles.postContainer}>
                        <div className={styles.box}>
                            <br />
                            <img className={styles.mainImage}
                                src={urlFor(p.mainImage).url()}
                                alt={`${p.title}`}
                            />
                            <p className={styles.text}><span className={styles.postTitle}>{p.title}</span></p>
                            <p className={styles.text}><span className={styles.postDescription}>{p.description}</span></p><br />
                            <div className={styles.badgeContainer}>
                                {p.categories.map((category, i) => (
                                    <p className={styles.tagBadge} key={i}>{category}&nbsp;</p>
                                ))}
                            </div>
                            <Link className={styles.postLink} href={`/exercise/${encodeURIComponent(p.slug.current)}`}>
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}

                {sentences.map((x, i) => (
                    <div key={i} className={styles.postContainer}>
                        <div className={styles.box}>
                            <br />
                            <img className={styles.mainImage}
                                src={urlFor(x.mainImage).url()}
                                alt={`${x.title}`}
                            />
                            <p className={styles.text}><span className={styles.postTitle}>{x.title}</span></p>
                            <p className={styles.text}><span className={styles.postDescription}>{x.description}</span></p><br />
                            {/* <div className={styles.badgeContainer}>
                                {p.categories.map((category, i) => (
                                    <p className={styles.tagBadge} key={i}>{category}&nbsp;</p>
                                ))}
                            </div> */}
                            <Link className={styles.postLink} href={`/sentence/${encodeURIComponent(x.slug.current)}`}>
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div >
        </div>
    );
};

// export async function getStaticProps() {
//     const exercises = await client.fetch(groq`
//       *[_type == "exercise" && publishedAt < now()] | order(publishedAt desc)
//     `);
//     return {
//         props: {
//             exercises,
//         },
//         revalidate: 20,
//     };
// }

export default Index;