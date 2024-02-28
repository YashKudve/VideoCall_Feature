// pages/DepressionTest.js

import { useState } from 'react';
import { firestore } from './firebaseConfig.js';

export default function DepressionTest() {
    const questions = [
        "Little interest or pleasure in doing things?",
        "Feeling down, depressed, or hopeless?",
        "Trouble falling or staying asleep, or sleeping too much?",
        "Feeling tired or having little energy?",
        "Poor appetite or overeating?",
        "Feeling bad about yourself or that you are a failure or have let yourself or your family down?",
        "Trouble concentrating on things, such as reading the newspaper or watching television?",
        "Moving or speaking so slowly that other people could have noticed? Or the opposite—being so fidgety or restless that you have been moving around a lot more than usual?",
        "Thoughts that you would be better off dead or of hurting yourself in some way?"
    ];

    const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
    const [selectedOption, setSelectedOption] = useState(null);

    const handleAnswerChange = (index, answer) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
        setSelectedOption(index);
    };

    const submitTest = async () => {
        // Analysis
        const score = answers.filter(answer => answer === 'Yes').length;
        console.log("Total Yes Answers:", score);

        if (score >= 5) {
            console.log("You may be experiencing symptoms of depression. Please consult a healthcare professional.");
        } else {
            console.log("You may not be experiencing significant symptoms of depression, but if you are concerned, please consult a healthcare professional.");
        }

        // Save answers to Firebase Firestore
        try {
            await firestore.collection('depressionTestResponses').add({
                answers: answers,
                score: score,
                timestamp: new Date()
            });
            console.log("Answers saved to Firebase Firestore successfully.");
        } catch (error) {
            console.error("Error saving answers to Firebase Firestore:", error);
        }
    };

    return (
        <div>
            <h1>Depression Test</h1>
            <p>Answer the following questions with Yes or No:</p>
            <ol>
                {questions.map((question, index) => (
                    <li key={index}>
                        <p>{question}</p>
                        <div>
                            <button
                                onClick={() => handleAnswerChange(index, 'Yes')}
                                style={{ backgroundColor: selectedOption === index && answers[index] === 'Yes' ? 'green' : 'initial' }}
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => handleAnswerChange(index, 'No')}
                                style={{ backgroundColor: selectedOption === index && answers[index] === 'No' ? 'red' : 'initial' }}
                            >
                                No
                            </button>
                        </div>
                    </li>
                ))}
            </ol>
            <button onClick={submitTest}>Submit</button>
        </div>
    );
}
