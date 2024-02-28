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
            <h1>Depression Test 2</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="q1">Question 1: Do you often feel sad or empty?</label>
                    <select id="q1" onChange={(e) => handleChange('q1', e.target.value)}>
                        <option value="0">Not at all</option>
                        <option value="1">Sometimes</option>
                        <option value="2">Frequently</option>
                        <option value="3">Always</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="q2">Question 2: Feeling down, depressed, or hopeless?</label>
                    <select id="q2" onChange={(e) => handleChange('q2', e.target.value)}>
                        <option value="0">Not at all</option>
                        <option value="1">Sometimes</option>
                        <option value="2">Frequently</option>
                        <option value="3">Always</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="q3">Question 3: Trouble falling or staying asleep, or sleeping too much</label>
                    <select id="q3" onChange={(e) => handleChange('q3', e.target.value)}>
                        <option value="0">Not at all</option>
                        <option value="1">Sometimes</option>
                        <option value="2">Frequently</option>
                        <option value="3">Always</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="q4">Question 4: Feeling tired or having little energy</label>
                    <select id="q4" onChange={(e) => handleChange('q4', e.target.value)}>
                        <option value="0">Not at all</option>
                        <option value="1">Sometimes</option>
                        <option value="2">Frequently</option>
                        <option value="3">Always</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="q5">Question 5:  Trouble concentrating on things, such as reading the newspaper or watching television?</label>
                    <select id="q5" onChange={(e) => handleChange('q5', e.target.value)}>
                        <option value="0">Not at all</option>
                        <option value="1">Sometimes</option>
                        <option value="2">Frequently</option>
                        <option value="3">Always</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="q6">Question 1: Moving or speaking so slowly that other people could have noticed Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual</label>
                    <select id="q6" onChange={(e) => handleChange('q6', e.target.value)}>
                        <option value="0">Not at all</option>
                        <option value="1">Sometimes</option>
                        <option value="2">Frequently</option>
                        <option value="3">Always</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="q7">Question 1: Moving or speaking so slowly that other people could have noticed Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual</label>
                    <select id="q7" onChange={(e) => handleChange('q7', e.target.value)}>
                        <option value="0">Not at all</option>
                        <option value="1">Sometimes</option>
                        <option value="2">Frequently</option>
                        <option value="3">Always</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="q8">Question 1: Moving or speaking so slowly that other people could have noticed Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual</label>
                    <select id="q8" onChange={(e) => handleChange('q8', e.target.value)}>
                        <option value="0">Not at all</option>
                        <option value="1">Sometimes</option>
                        <option value="2">Frequently</option>
                        <option value="3">Always</option>
                    </select>
                </div>
                {/* Add more questions like this */}
                <button type="submit">Submit</button>
            </form>
            {result && <div>Result: {result}</div>}
        </div>
    );
};

export default Depress2;
