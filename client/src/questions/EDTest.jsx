import React, { useState } from 'react';
import styles from './Depress3.module.css';
import Modal from 'react-modal';
// import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';

const EDTest = () => {
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // const history = useNavigate();

    const handleChange = (questionId, value) => {
        setAnswers({ ...answers, [questionId]: value });

        db.collection('answers').doc(questionId).set({ value })
            .then(() => console.log('Answer saved to Firestore'))
            .catch((error) => console.error('Error saving answer:', error));

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Calculate depression level based on answers
        let score = Object.values(answers).reduce((acc, val) => acc + parseInt(val), 0);
        let depressionLevel = '';
        if (score <= 10) {
            depressionLevel = 'Based on your Responses, it indicates you are at a lower risk. In this case, you must continue practicing healthy coping mechanisms and seek professional support if needed.';
        }
        else if (score <= 20) {
            depressionLevel = 'Based on your Responses, it indicates you are at moderate risk. In this case, you must seek additional support or counseling to address any emerging concerns and learn additional coping strategies.';
        }
        else if (score <= 30) {
            depressionLevel = 'High Risk';
        } else {
            depressionLevel = 'Extremely High Risk';
        }
        setResult(depressionLevel);
        setModalIsOpen(true);
        setAnswers({});
    };

    const closeModal = () => {
        setModalIsOpen(false);
        // Navigate to next page
        // history.push('/next-page'); // Replace '/next-page' with the actual URL of the next page

    };


    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Eating Disorder Test</h1>
            <div> Eating Disorder Test is designed to help individuals assess their relationship with food, body image, and eating behaviors. This self-assessment tool consists of a series of questions that explore various aspects of your eating habits, thoughts, and emotions related to food and weight. By answering honestly, you can gain insights into whether your behaviors and attitudes toward eating may indicate the presence of an eating disorder.</div>
            <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md text-justify">

                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">How often do you eat until you feel uncomfortably full?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q1'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q1', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q1'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q1', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q1'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q1', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q1'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q1', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label>Have you experienced a loss of interest or pleasure in activities you once enjoyed due to concerns about your eating habits or body image?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q2'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q2', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q2'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q2', '2')}>
                            Sometimes
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q2'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q2', '3')}>
                            Often
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q2'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q2', '4')}>
                            Always
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label>How much more or less do you feel you worry about your weight and body shape than other people your age?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q3'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q3', '1')}
                        >
                            Less than other people
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q3'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q3', '2')}>
                            About the same as other people
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q3'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q3', '3')}>
                            More than other people
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q3'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q3', '4')}>
                            Lot more than other people
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label>Do you find yourself preoccupied with thoughts of food, even when you're not hungry?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q4'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q4', '1')}
                        >
                            Never
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q4'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q4', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q4'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q4', '3')}>
                            Sometimes
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q4'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q4', '4')}>
                            Often
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label>Have you experienced a significant increase or decrease in appetite recently?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q5'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q5', '1')}
                        >
                            No Changes
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q5'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q5', '2')}>
                            Slight Changes
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q5'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q5', '3')}>
                            Moderate Changes
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q5'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q5', '4')}>
                            Significant Changes
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label>Do you feel a sense of loss of control over your eating behaviors, particularly during binge eating episodes?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q6'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q6', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q6'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q6', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q6'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q6', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q6'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q6', '4')}>
                            Often
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label>Have you experienced a significant decrease in appetite or weight loss recently?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q7'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q7', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q7'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q7', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q7'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q7', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q7'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q7', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label>Do you feel preoccupied with food, weight, or calories to the extent that it interferes with your daily activities or relationships?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q8'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q8', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q8'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q8', '2')}>
                            Slightly
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q8'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q8', '3')}>
                            Moderately
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q8'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q8', '4')}>
                            Extremely
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label>How would you rate your perception of your body size and shape?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q9'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q9', '1')}
                        >
                            Accurate perception
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q9'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q9', '2')}>
                            Slightly distorted perception
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q9'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q9', '3')}>
                            Moderately distorted perception
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q9'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q9', '4')}>
                            Severely distorted perception
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label>Do you experience physical symptoms such as dizziness, fatigue, or irregular heartbeat due to food restriction or purging behaviors?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q10'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q10', '1')}
                        >
                            Never
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q10'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q10', '2')}>
                            Occasionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q10'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q10', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q10'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q10', '4')}>
                            Always
                        </button>
                    </div>
                </div>
                {/* Add more questions like this */}
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-10">Submit</button>
            </form>
            {/* {result && <div>Result: {result}</div>} */}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false} // This line is added to avoid warning, but in real case please consider configuring it properly
            //     contentLabel="Depression Test Result"
            //     className="modal"
            // overlayClassName="overlay"
            >
                <h2 className="text-2xl font-bold mb-4">Result</h2>
                <p className="mb-4">{result}</p>
                <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-10" onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default EDTest;
