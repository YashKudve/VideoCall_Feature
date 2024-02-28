import React, { useState } from 'react';

const Depress2 = () => {
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState('');

    const handleChange = (questionId, value) => {
        setAnswers({ ...answers, [questionId]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Calculate depression level based on answers
        let score = Object.values(answers).reduce((acc, val) => acc + parseInt(val), 0);
        let depressionLevel = '';
        if (score <= 10) {
            depressionLevel = 'No depression';
        } else if (score <= 20) {
            depressionLevel = 'Mild depression';
        } else if (score <= 30) {
            depressionLevel = 'Moderate depression';
        } else {
            depressionLevel = 'Severe depression';
        }
        setResult(depressionLevel);
    };

    return (
        <div>
            <h1>Depression Test 3</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Question 1: Do you often feel sad or empty?</label>
                    <div>
                        <button
                            type="button"
                            className={answers['q1'] === '0' ? styles.selected : ''}
                            onClick={() => handleChange('q1', '0')}
                        >
                            Not at all
                        </button>
                        <button
                            type="button"
                            className={answers['q1'] === '1' ? styles.selected : ''}
                            onClick={() => handleChange('q1', '1')}
                        >
                            Sometimes
                        </button>
                        <button
                            type="button"
                            className={answers['q1'] === '2' ? styles.selected : ''}
                            onClick={() => handleChange('q1', '2')}
                        >
                            Frequently
                        </button>
                        <button
                            type="button"
                            className={answers['q1'] === '3' ? styles.selected : ''}
                            onClick={() => handleChange('q1', '3')}
                        >
                            Almost always
                        </button>
                    </div>
                </div>
                {/* Add more questions like this */}
                <button type="submit">Submit</button>
            </form>
            {result && <div>Result: {result}</div>}
        </div>
    );
};

export default Depress2;
