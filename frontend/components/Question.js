import React, { useState, useEffect } from 'react';
// import sanityClient from '../../client.js';
import client from '../client.js';
// import BlockContent from '@sanity/block-content-to-react';
// import classes from '../../styles/SamplesOfWork.module.css';

const Question = () => {
    const [allData, setAllData] = useState(null);
    const [showAnswers, setShowAnswers] = useState(false);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "question"] | order(_createdAt asc) {
            question,
            answer1,
            answer2,
            answer3,
            answer4,
            isCorrect1,
            isCorrect2,
            isCorrect3,
            isCorrect4,
        }`
            )
            .then((data) => setAllData(data))
            .catch(console.error);
    }, []);

    return (
        <>
            {allData &&
                allData.map((item, index) => (
                    <div key={index}>
                        <ol>
                            <li>{item.question}</li>
                            <input type="radio" id="option1" name="answer" value={item.answer1} />
                            <label for={item.answer1}> {item.answer1}</label>
                            <br />
                            <input type="radio" id="option2" name="answer" value={item.answer2} />
                            <label for={item.answer2}> {item.answer2}</label>
                            <br />
                            <input type="radio" id="option3" name="answer" value={item.answer3} />
                            <label for={item.answer3}> {item.answer3}</label>
                            <br />
                            <input type="radio" id="option4" name="answer" value={item.answer4} />
                            <label for={item.answer4}> {item.answer4}</label>
                            <br />
                            <div>
                                {showAnswers ? (<div>
                                    {item.isCorrect1 ? <p><strong>Answer: </strong>{item.answer1}</p> : null}
                                    {item.isCorrect2 ? <p><strong>Answer: </strong>{item.answer2}</p> : null}
                                    {item.isCorrect3 ? <p><strong>Answer: </strong>{item.answer3}</p> : null}
                                    {item.isCorrect4 ? <p><strong>Answer: </strong>{item.answer4}</p> : null}
                                </div>) : null}
                            </div>
                        </ol>
                        <br />
                    </div>
                ))}
            <div>
                <button onClick={() => setShowAnswers(true)}>Show Answers</button>
            </div>
        </>
    );
};

export default Question;