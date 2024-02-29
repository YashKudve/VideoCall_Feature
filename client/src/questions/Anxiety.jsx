import React, { useState } from 'react';
import styles from './Depress3.module.css';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';


const Anxiety = () => {
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const history = useNavigate();

    const handleChange = (questionId, value) => {
        setAnswers({ ...answers, [questionId]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Calculate depression level based on answers
        let score = Object.values(answers).reduce((acc, val) => acc + parseInt(val), 0);
        let depressionLevel = '';
        if (score <= 10) {
            depressionLevel = 'No Anxiety';
        }
        else if (score <= 20) {
            depressionLevel = 'Minimal Anxiety';
        }
        else if (score <= 30) {
            depressionLevel = 'Moderate Anxiety';
        } else {
            depressionLevel = 'Severe Anxiety';
        }
        setResult(depressionLevel);
        setModalIsOpen(true);
        setAnswers({});
    };

    const closeModal = () => {
        setModalIsOpen(false);

        history.push('/next-page'); // Replace '/next-page' with the actual URL of the next page

    };


    return (
        <div>
            <h1 className="text-3xl font-extrabold text-red-700">Anxiety Test</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="">Question 1: Do you often feel nervous or on edge?</label>
                    <div>
                        <button
                            type="button"
                            className={answers['q1'] === '2' ? styles.selected : ''}
                            onClick={() => handleChange('q1', '2')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={answers['q1'] === '3' ? styles.selected : ''} onClick={() => handleChange('q1', '3')}>
                            Several Days
                        </button>
                        <button type="button" className={answers['q1'] === '4' ? styles.selected : ''} onClick={() => handleChange('q1', '4')}>
                            Frequently
                        </button>
                        <button type="button" className={answers['q1'] === '4' ? styles.selected : ''} onClick={() => handleChange('q1', '4')}>
                            Nearly Everyday
                        </button>
                    </div>
                </div>

                <div>
                    <label>Question 2: Not being able to stop or control worrying?</label>
                    <div>
                        <button
                            type="button"
                            className={answers['q2'] === '1' ? styles.selected : ''}
                            onClick={() => handleChange('q2', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={answers['q2'] === '2' ? styles.selected : ''} onClick={() => handleChange('q2', '2')}>
                            Several Days
                        </button>
                        <button type="button" className={answers['q2'] === '3' ? styles.selected : ''} onClick={() => handleChange('q2', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={answers['q2'] === '4' ? styles.selected : ''} onClick={() => handleChange('q2', '4')}>
                            Nearly Everyday
                        </button>
                    </div>
                </div>

                <div>
                    <label>Question 3: Worrying too much about different things</label>
                    <div>
                        <button
                            type="button"
                            className={answers['q3'] === '1' ? styles.selected : ''}
                            onClick={() => handleChange('q3', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={answers['q3'] === '2' ? styles.selected : ''} onClick={() => handleChange('q3', '2')}>
                            Several Days
                        </button>
                        <button type="button" className={answers['q3'] === '3' ? styles.selected : ''} onClick={() => handleChange('q3', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={answers['q3'] === '4' ? styles.selected : ''} onClick={() => handleChange('q3', '4')}>
                            Nearly Everyday
                        </button>
                    </div>
                </div>
                <div>
                    <label>Question 4: Do you have trouble concentrating or focusing on tasks?</label>
                    <div>
                        <button
                            type="button"
                            className={answers['q4'] === '1' ? styles.selected : ''}
                            onClick={() => handleChange('q4', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={answers['q4'] === '2' ? styles.selected : ''} onClick={() => handleChange('q4', '2')}>
                            Several Days
                        </button>
                        <button type="button" className={answers['q4'] === '3' ? styles.selected : ''} onClick={() => handleChange('q4', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={answers['q4'] === '4' ? styles.selected : ''} onClick={() => handleChange('q4', '4')}>
                            Nearly Everyday
                        </button>
                    </div>
                </div>
                <div>
                    <label>Question 5: Being so restless that it is hard to sit still</label>
                    <div>
                        <button
                            type="button"
                            className={answers['q5'] === '1' ? styles.selected : ''}
                            onClick={() => handleChange('q5', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={answers['q5'] === '2' ? styles.selected : ''} onClick={() => handleChange('q5', '2')}>
                            Several Days
                        </button>
                        <button type="button" className={answers['q5'] === '3' ? styles.selected : ''} onClick={() => handleChange('q5', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={answers['q5'] === '4' ? styles.selected : ''} onClick={() => handleChange('q5', '4')}>
                            Nearly Everyday
                        </button>
                    </div>
                </div>
                <div>
                    <label>Question 6: Becoming easily annoyed or irritable</label>
                    <div>
                        <button
                            type="button"
                            className={answers['q6'] === '1' ? styles.selected : ''}
                            onClick={() => handleChange('q6', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={answers['q6'] === '2' ? styles.selected : ''} onClick={() => handleChange('q6', '2')}>
                            Several Days
                        </button>
                        <button type="button" className={answers['q6'] === '3' ? styles.selected : ''} onClick={() => handleChange('q6', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={answers['q6'] === '4' ? styles.selected : ''} onClick={() => handleChange('q6', '4')}>
                            Nearly Everyday
                        </button>
                    </div>
                </div>
                <div>
                    <label>Question 7: Feeling afraid, as if something awful might happen</label>
                    <div>
                        <button
                            type="button"
                            className={answers['q7'] === '1' ? styles.selected : ''}
                            onClick={() => handleChange('q7', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={answers['q7'] === '2' ? styles.selected : ''} onClick={() => handleChange('q7', '2')}>
                            Several Days
                        </button>
                        <button type="button" className={answers['q7'] === '3' ? styles.selected : ''} onClick={() => handleChange('q7', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={answers['q7'] === '4' ? styles.selected : ''} onClick={() => handleChange('q7', '4')}>
                            Nearly Everyday
                        </button>
                    </div>
                </div>

                <div>
                    <label>Question 8: Do you experience sudden episodes of intense fear or discomfort, often accompanied by physical symptoms (panic attacks)?</label>
                    <div>
                        <button
                            type="button"
                            className={answers['q8'] === '1' ? styles.selected : ''}
                            onClick={() => handleChange('q8', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={answers['q8'] === '2' ? styles.selected : ''} onClick={() => handleChange('q8', '2')}>
                            Several Days
                        </button>
                        <button type="button" className={answers['q8'] === '3' ? styles.selected : ''} onClick={() => handleChange('q8', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={answers['q8'] === '4' ? styles.selected : ''} onClick={() => handleChange('q8', '4')}>
                            Nearly Everyday
                        </button>
                    </div>
                </div>
                <div>
                    <label>Question 9: Do you find it challenging to relax or unwind, even in non-stressful situations?</label>
                    <div>
                        <button
                            type="button"
                            className={answers['q9'] === '1' ? styles.selected : ''}
                            onClick={() => handleChange('q9', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={answers['q9'] === '2' ? styles.selected : ''} onClick={() => handleChange('q9', '2')}>
                            Several Days
                        </button>
                        <button type="button" className={answers['q9'] === '3' ? styles.selected : ''} onClick={() => handleChange('q9', '3')}>
                            Frequently
                        </button>
                        <button type="button" className={answers['q9'] === '4' ? styles.selected : ''} onClick={() => handleChange('q9', '4')}>
                            Nearly Everyday
                        </button>
                    </div>
                </div>
                {/* Add more questions like this */}
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
            {/* {result && <div>Result: {result}</div>} */}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false} // This line is added to avoid warning, but in real case please consider configuring it properly
            >
                <h2 className="text-2xl font-bold mb-4">Result</h2>
                <p className="mb-4">{result}</p>
                <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default Anxiety;
