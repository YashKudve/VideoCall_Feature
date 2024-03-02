import React, { useState } from 'react';

function PTSDTest() {
    const [responses, setResponses] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const questions = [
        "Have you experienced or witnessed a life-threatening event?",
        "Do you often have vivid memories or flashbacks of the traumatic event?",
        "Do you avoid situations, places, or people that remind you of the traumatic event?",
        "Have you noticed an increase in irritability or anger since the traumatic event?",
        "Do you have difficulty sleeping or suffer from frequent nightmares?",
        "Have you lost interest in activities or hobbies that you once enjoyed?",
        "Do you often feel detached or estranged from others?",
        "Have you experienced intense feelings of guilt or shame related to the traumatic event?",
        "Do you frequently experience heightened anxiety or panic attacks?",
        "Have you noticed changes in your mood, such as feeling numb or emotionally numb?"
    ];

    const handleResponse = (index, response) => {
        setResponses({
            ...responses,
            [index]: response
        });
    };

    const calculateScore = () => {
        let score = 0;
        for (const response of Object.values(responses)) {
            if (response === "yes") {
                score++;
            }
        }
        return score;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const score = calculateScore();
    const threshold = 4;
    const hasPTSD = score > threshold;

    return (
        <div>
            <h1>PTSD Screening Test</h1>
            <form onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                    <div key={index}>
                        <p>{question}</p>
                        <button
                            type="button"
                            onClick={() => handleResponse(index, "yes")}
                            style={{ marginRight: '20px', padding: '10px', border: '3', background: responses[index] === 'yes' ? 'green' : 'white' }}
                        >
                            Yes
                        </button>
                        <button
                            type="button"
                            onClick={() => handleResponse(index, "no")}
                            style={{ background: responses[index] === 'no' ? 'red' : 'white' }}
                        >
                            No
                        </button>
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
            {submitted && (
                <div>
                    <h2>Score: {score}</h2>
                    {hasPTSD && <p>You may have PTSD. Please seek professional help for further evaluation.</p>}
                    {!hasPTSD && <p>You may not have PTSD based on your responses.</p>}
                    <br />
                    <h2>Responses:</h2>
                    <ul>
                        {Object.entries(responses).map(([index, response]) => (
                            <li key={index}>{questions[index]}: {response}</li>
                        ))}
                    </ul>

                </div>
            )}
        </div>
    );
}

export default PTSDTest;
