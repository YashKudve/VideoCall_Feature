import React, { useState } from 'react';
import styles from './Depress3.module.css';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';

const AddictionTest = () => {
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const history = useNavigate();

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
            depressionLevel = 'No Indication of Addiction';
        }
        else if (score <= 20) {
            depressionLevel = 'Mild or Moderate Risk of Addiction';
        }
        else if (score <= 30) {
            depressionLevel = 'High Risk of Addiction';
        } else {
            depressionLevel = 'High Risk of Addiction';
        }
        setResult(depressionLevel);
        setModalIsOpen(true);
        setAnswers({});
    };

    const closeModal = () => {
        setModalIsOpen(false);
        // Navigate to next page
        history.push('/next-page'); // Replace '/next-page' with the actual URL of the next page

    };


    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Addiction Test</h1>
            <div>Info about Addiction</div>
            <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md text-justify">

                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">In the past year, have you found that you needed to consume larger amounts of a substance to achieve the same effect (tolerance)?</label>
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
                    <label>Have you experienced withdrawal symptoms when you stopped or reduced your substance use, such as nausea, sweating, tremors, or anxiety?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q2'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q2', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q2'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q2', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q2'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q2', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q2'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q2', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label>Have you unsuccessfully attempted to cut down or control your substance use in the past year?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q3'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q3', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q3'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q3', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q3'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q3', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q3'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q3', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label>Do you spend a significant amount of time obtaining, using, or recovering from the effects of a substance?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q4'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q4', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q4'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q4', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q4'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q4', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q4'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q4', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label>Have you neglected responsibilities at work, school, or home because of your substance use?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q5'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q5', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q5'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q5', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q5'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q5', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q5'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q5', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label>Have you continued to use a substance despite knowing it has caused or worsened physical or psychological problems?</label>
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
                            Frequently
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label>Have you experienced cravings or strong urges to use a substance?</label>
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
                    <label>Have you engaged in risky behaviors while under the influence of a substance, such as driving or operating machinery?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q8'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q8', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q8'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q8', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q8'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q8', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q8'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q8', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>
                <div className="mb-4">
                    <label>Have you experienced interpersonal problems, such as arguments or conflicts, due to your substance use?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q9'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q9', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q9'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q9', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q9'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q9', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q9'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q9', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>

                <div className="mb-4">
                    <label>Have you experienced legal problems as a result of your substance use, such as arrests or legal charges?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q10'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q10', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q10'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q10', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q10'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q10', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q10'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q10', '4')}>
                            Frequently
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

export default AddictionTest;
