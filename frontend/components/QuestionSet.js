import React, { useState, useEffect } from 'react';
// import sanityClient from '../../client.js';
import client from '../client.js';
// import BlockContent from '@sanity/block-content-to-react';
// import classes from '../../styles/SamplesOfWork.module.css';
import Question from './Question.js';

const QuestionSet = () => {
    const [allData, setAllData] = useState(null);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "questionSet"] | order(_createdAt asc) {
            title,
            question,
        }`
            )
            .then((data) => setAllData(data))
            .catch(console.error);
    }, []);

    return (
        <>
            <Question />
        </>
    );
};

export default QuestionSet;