import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import client from '../../client';
import styles from '../../styles/Exercise.module.css';

// Adding Image Caption and Attribution to API.js: https://www.sanity.io/answers/adding-image-caption-and-attribution-to-api-js
// Internal and external links with Portable Text: https://www.sanity.io/guides/portable-text-internal-and-external-links

function urlFor(source) {
    return imageUrlBuilder(client).image(source);
}

const ptComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null;
            }
            return (
                <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <figure>
                        <img className={styles.pImage}
                            alt={value.alt || ' '}
                            // loading='lazy'
                            src={urlFor(value).fit('max').auto('format')}
                        />
                        <figcaption className={styles.captionText}>{value.caption}</figcaption>
                    </figure>

                    <br />
                </div>
            );
        },
        code: (props) => {
            return (<Code language={props.value.language} code={props.value.code} highlightedLines={props.value.highlightedLines} />);
        },
    },
};

const Exercise = ({ exercise }) => {
    const [showAnswers, setShowAnswers] = useState(false);

    const {
        title = 'Missing title',
        name = 'Missing name',
        description,
        categories,
        authorImage,
        mainImage,
        publishedAt,
        question1,
        answerToQuestion1_1,
        answerToQuestion1_2,
        answerToQuestion1_3,
        answerToQuestion1_4,
        isCorrectToQuestion1_1,
        isCorrectToQuestion1_2,
        isCorrectToQuestion1_3,
        isCorrectToQuestion1_4,
        question2,
        answerToQuestion2_1,
        answerToQuestion2_2,
        answerToQuestion2_3,
        answerToQuestion2_4,
        isCorrectToQuestion2_1,
        isCorrectToQuestion2_2,
        isCorrectToQuestion2_3,
        isCorrectToQuestion2_4,
        question3,
        answerToQuestion3_1,
        answerToQuestion3_2,
        answerToQuestion3_3,
        answerToQuestion3_4,
        isCorrectToQuestion3_1,
        isCorrectToQuestion3_2,
        isCorrectToQuestion3_3,
        isCorrectToQuestion3_4,
        question4,
        answerToQuestion4_1,
        answerToQuestion4_2,
        answerToQuestion4_3,
        answerToQuestion4_4,
        isCorrectToQuestion4_1,
        isCorrectToQuestion4_2,
        isCorrectToQuestion4_3,
        isCorrectToQuestion4_4,
        question5,
        answerToQuestion5_1,
        answerToQuestion5_2,
        answerToQuestion5_3,
        answerToQuestion5_4,
        isCorrectToQuestion5_1,
        isCorrectToQuestion5_2,
        isCorrectToQuestion5_3,
        isCorrectToQuestion5_4,
        question6,
        answerToQuestion6_1,
        answerToQuestion6_2,
        answerToQuestion6_3,
        answerToQuestion6_4,
        isCorrectToQuestion6_1,
        isCorrectToQuestion6_2,
        isCorrectToQuestion6_3,
        isCorrectToQuestion6_4,
        question7,
        answerToQuestion7_1,
        answerToQuestion7_2,
        answerToQuestion7_3,
        answerToQuestion7_4,
        isCorrectToQuestion7_1,
        isCorrectToQuestion7_2,
        isCorrectToQuestion7_3,
        isCorrectToQuestion7_4,
        question8,
        answerToQuestion8_1,
        answerToQuestion8_2,
        answerToQuestion8_3,
        answerToQuestion8_4,
        isCorrectToQuestion8_1,
        isCorrectToQuestion8_2,
        isCorrectToQuestion8_3,
        isCorrectToQuestion8_4,
        question9,
        answerToQuestion9_1,
        answerToQuestion9_2,
        answerToQuestion9_3,
        answerToQuestion9_4,
        isCorrectToQuestion9_1,
        isCorrectToQuestion9_2,
        isCorrectToQuestion9_3,
        isCorrectToQuestion9_4,
        question10,
        answerToQuestion10_1,
        answerToQuestion10_2,
        answerToQuestion10_3,
        answerToQuestion10_4,
        isCorrectToQuestion10_1,
        isCorrectToQuestion10_2,
        isCorrectToQuestion10_3,
        isCorrectToQuestion10_4,
        body = [],
    } = exercise;

    const titleTag = `ESL Site | ${title}`;

    const questions = [
        [question1,
            [answerToQuestion1_1, answerToQuestion1_2, answerToQuestion1_3, answerToQuestion1_4],
            [isCorrectToQuestion1_1, isCorrectToQuestion1_2, isCorrectToQuestion1_3, isCorrectToQuestion1_4]
        ],
        [question2,
            [answerToQuestion2_1, answerToQuestion2_2, answerToQuestion2_3, answerToQuestion2_4],
            [isCorrectToQuestion2_1, isCorrectToQuestion2_2, isCorrectToQuestion2_3, isCorrectToQuestion2_4]
        ],
        [question3,
            [answerToQuestion3_1, answerToQuestion3_2, answerToQuestion3_3, answerToQuestion3_4],
            [isCorrectToQuestion3_1, isCorrectToQuestion3_2, isCorrectToQuestion3_3, isCorrectToQuestion3_4]
        ],
        [question4,
            [answerToQuestion4_1, answerToQuestion4_2, answerToQuestion4_3, answerToQuestion4_4],
            [isCorrectToQuestion4_1, isCorrectToQuestion4_2, isCorrectToQuestion4_3, isCorrectToQuestion4_4]
        ],
        [question5,
            [answerToQuestion5_1, answerToQuestion5_2, answerToQuestion5_3, answerToQuestion5_4],
            [isCorrectToQuestion5_1, isCorrectToQuestion5_2, isCorrectToQuestion5_3, isCorrectToQuestion5_4]
        ],
        [question6,
            [answerToQuestion6_1, answerToQuestion6_2, answerToQuestion6_3, answerToQuestion6_4],
            [isCorrectToQuestion6_1, isCorrectToQuestion6_2, isCorrectToQuestion6_3, isCorrectToQuestion6_4]
        ],
        [question7,
            [answerToQuestion7_1, answerToQuestion7_2, answerToQuestion7_3, answerToQuestion7_4],
            [isCorrectToQuestion7_1, isCorrectToQuestion7_2, isCorrectToQuestion7_3, isCorrectToQuestion7_4]
        ],
        [question8,
            [answerToQuestion8_1, answerToQuestion8_2, answerToQuestion8_3, answerToQuestion8_4],
            [isCorrectToQuestion8_1, isCorrectToQuestion8_2, isCorrectToQuestion8_3, isCorrectToQuestion8_4]
        ],
        [question9,
            [answerToQuestion9_1, answerToQuestion9_2, answerToQuestion9_3, answerToQuestion9_4],
            [isCorrectToQuestion9_1, isCorrectToQuestion9_2, isCorrectToQuestion9_3, isCorrectToQuestion9_4]
        ],
        [question10,
            [answerToQuestion10_1, answerToQuestion10_2, answerToQuestion10_3, answerToQuestion10_4],
            [isCorrectToQuestion10_1, isCorrectToQuestion10_2, isCorrectToQuestion10_3, isCorrectToQuestion10_4]
        ]
    ];

    return (
        <>
            <Head>
                <title>{titleTag}</title>
                <meta name="description" content="A blog of random content" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div
                className={styles.heroImage}
                style={{
                    backgroundImage: `linear-gradient( 0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${urlFor(
                        mainImage
                    ).url()})`,
                }}
            >
                <div className={styles.heroContainer}>
                    <h1 className={styles.heroHeader}>
                        <span className={styles.heroHeaderSpan}>{title}</span>
                    </h1>
                </div>
            </div>

            <article>
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '2em', textAlign: 'center' }}>
                    <div className={styles.postTitleBox}>
                        <h1 className={styles.postTitle}>{title}</h1>
                        {categories && (
                            <div>
                                {categories.map(
                                    (category, index) => (
                                        <span key={index} className={styles.tagBadge}>{category}</span>
                                    )
                                )}
                            </div>
                        )}

                        <p className={styles.postAuthor}>By {name}</p>
                        {authorImage && (
                            <div>
                                <img
                                    className={styles.avatar}
                                    src={urlFor(authorImage).width(300).url()}
                                    alt={`${name}`}
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.pText}>
                    <p><em>{description}</em></p>
                    <PortableText value={body} components={ptComponents} />

                    {questions.map((question) => {
                        return (
                            <div>
                                <PortableText value={question[0]} components={ptComponents} />
                                <div>
                                    <input type="radio" id="option1" name="answer" value={question[1][0]} />
                                    <label for={question[1][0]}> {question[1][0]}</label>
                                    <br />
                                    <input type="radio" id="option1" name="answer" value={question[1][1]} />
                                    <label for={question[1][1]}> {question[1][1]}</label>
                                    <br />
                                    <input type="radio" id="option1" name="answer" value={question[1][2]} />
                                    <label for={question[1][2]}> {question[1][2]}</label>
                                    <br />
                                    <input type="radio" id="option1" name="answer" value={question[1][3]} />
                                    <label for={question[1][3]}> {question[1][3]}</label>
                                    <br />
                                </div>
                                <div>
                                    {showAnswers ? (
                                        <div>
                                            {question[2][0] ? <p><strong>Answer: </strong>{question[1][0]}</p> : null}
                                            {question[2][1] ? <p><strong>Answer: </strong>{question[1][1]}</p> : null}
                                            {question[2][2] ? <p><strong>Answer: </strong>{question[1][2]}</p> : null}
                                            {question[2][3] ? <p><strong>Answer: </strong>{question[1][3]}</p> : null}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        );
                    })}

                    {/* <ol>
                    
                        <li>
                            <PortableText value={question1} components={ptComponents} />
                            <input type="radio" id="option1" name="answer" value={answerToQuestion1_1} />
                            <label for={answerToQuestion1_1}> {answerToQuestion1_1}</label>
                            <br />
                            <input type="radio" id="option2" name="answer" value={answerToQuestion1_2} />
                            <label for={answerToQuestion1_2}> {answerToQuestion1_2}</label>
                            <br />
                            <input type="radio" id="option3" name="answer" value={answerToQuestion1_3} />
                            <label for={answerToQuestion1_3}> {answerToQuestion1_3}</label>
                            <br />
                            <input type="radio" id="option4" name="answer" value={answerToQuestion1_4} />
                            <label for={answerToQuestion1_4}> {answerToQuestion1_4}</label>
                        </li>

                        <br />

                        <div>
                            {showAnswers ? (<div>
                                {isCorrectToQuestion1_1 ? <p><strong>Answer: </strong>{answerToQuestion1_1}</p> : null}
                                {isCorrectToQuestion1_2 ? <p><strong>Answer: </strong>{answerToQuestion1_2}</p> : null}
                                {isCorrectToQuestion1_3 ? <p><strong>Answer: </strong>{answerToQuestion1_3}</p> : null}
                                {isCorrectToQuestion1_4 ? <p><strong>Answer: </strong>{answerToQuestion1_4}</p> : null}
                            </div>) : null}
                        </div>

                        <br />

                        <li>
                            <PortableText value={question2} components={ptComponents} />
                            <input type="radio" id="option1" name="answer" value={answerToQuestion2_1} />
                            <label for={answerToQuestion2_1}> {answerToQuestion2_1}</label>
                            <br />
                            <input type="radio" id="option2" name="answer" value={answerToQuestion2_2} />
                            <label for={answerToQuestion2_2}> {answerToQuestion2_2}</label>
                            <br />
                            <input type="radio" id="option3" name="answer" value={answerToQuestion2_3} />
                            <label for={answerToQuestion2_3}> {answerToQuestion2_3}</label>
                            <br />
                            <input type="radio" id="option4" name="answer" value={answerToQuestion2_4} />
                            <label for={answerToQuestion2_4}> {answerToQuestion2_4}</label>
                        </li>
                        <br />

                        <div>
                            {showAnswers ? (<div>
                                {isCorrectToQuestion2_1 ? <p><strong>Answer: </strong>{answerToQuestion2_1}</p> : null}
                                {isCorrectToQuestion2_2 ? <p><strong>Answer: </strong>{answerToQuestion2_2}</p> : null}
                                {isCorrectToQuestion2_3 ? <p><strong>Answer: </strong>{answerToQuestion2_3}</p> : null}
                                {isCorrectToQuestion2_4 ? <p><strong>Answer: </strong>{answerToQuestion2_4}</p> : null}
                            </div>) : null}
                        </div>

                    </ol> */}

                    <br />

                    <div>
                        <button onClick={() => setShowAnswers(true)}>Show Answers</button>
                    </div>

                    <br />

                    <Link style={{ color: 'tomato' }} href='/'>Home</Link>
                </div>
            </article>
        </>
    );
};

const query = groq`*[_type == "exercise" && slug.current == $slug][0]{
  title,
  description,
  question1,
  answerToQuestion1_1,
  answerToQuestion1_2,
  answerToQuestion1_3,
  answerToQuestion1_4,
  isCorrectToQuestion1_1,
  isCorrectToQuestion1_2,
  isCorrectToQuestion1_3,
  isCorrectToQuestion1_4,
  question2,
  answerToQuestion2_1,
  answerToQuestion2_2,
  answerToQuestion2_3,
  answerToQuestion2_4,
  isCorrectToQuestion2_1,
  isCorrectToQuestion2_2,
  isCorrectToQuestion2_3,
  isCorrectToQuestion2_4,
  question3,
  answerToQuestion3_1,
  answerToQuestion3_2,
  answerToQuestion3_3,
  answerToQuestion3_4,
  isCorrectToQuestion3_1,
  isCorrectToQuestion3_2,
  isCorrectToQuestion3_3,
  isCorrectToQuestion3_4,
  question4,
  answerToQuestion4_1,
  answerToQuestion4_2,
  answerToQuestion4_3,
  answerToQuestion4_4,
  isCorrectToQuestion4_1,
  isCorrectToQuestion4_2,
  isCorrectToQuestion4_3,
  isCorrectToQuestion4_4,
  question5,
  answerToQuestion5_1,
  answerToQuestion5_2,
  answerToQuestion5_3,
  answerToQuestion5_4,
  isCorrectToQuestion5_1,
  isCorrectToQuestion5_2,
  isCorrectToQuestion5_3,
  isCorrectToQuestion5_4,
  question6,
  answerToQuestion6_1,
  answerToQuestion6_2,
  answerToQuestion6_3,
  answerToQuestion6_4,
  isCorrectToQuestion6_1,
  isCorrectToQuestion6_2,
  isCorrectToQuestion6_3,
  isCorrectToQuestion6_4,
  question7,
  answerToQuestion7_1,
  answerToQuestion7_2,
  answerToQuestion7_3,
  answerToQuestion7_4,
  isCorrectToQuestion7_1,
  isCorrectToQuestion7_2,
  isCorrectToQuestion7_3,
  isCorrectToQuestion7_4,
  question8,
  answerToQuestion8_1,
  answerToQuestion8_2,
  answerToQuestion8_3,
  answerToQuestion8_4,
  isCorrectToQuestion8_1,
  isCorrectToQuestion8_2,
  isCorrectToQuestion8_3,
  isCorrectToQuestion8_4,
  question9,
  answerToQuestion9_1,
  answerToQuestion9_2,
  answerToQuestion9_3,
  answerToQuestion9_4,
  isCorrectToQuestion9_1,
  isCorrectToQuestion9_2,
  isCorrectToQuestion9_3,
  isCorrectToQuestion9_4,
  question10,
  answerToQuestion10_1,
  answerToQuestion10_2,
  answerToQuestion10_3,
  answerToQuestion10_4,
  isCorrectToQuestion10_1,
  isCorrectToQuestion10_2,
  isCorrectToQuestion10_3,
  isCorrectToQuestion10_4,
  publishedAt,
  mainImage,
  caption,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;

export async function getStaticPaths() {
    const paths = await client.fetch(
        groq`*[_type == "exercise" && defined(slug.current)][].slug.current`
    );

    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: 'blocking'
    };
}

export async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug = '' } = context.params;
    const exercise = await client.fetch(query, { slug });
    return {
        props: {
            exercise,
        },
        revalidate: 20,
    };
}

export default Exercise;