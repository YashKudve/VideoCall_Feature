import React, { useState } from 'react';
import styles from './Depress3.module.css';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';

const ADHD = () => {
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
            depressionLevel = 'Negative ADHD Diagnosis: The test results indicate that the individual does not exhibit enough symptoms or impairment to meet the criteria for an ADHD diagnosis.';
        }
        else if (score <= 20) {
            depressionLevel = 'Based on the specific symptoms reported, you have symptoms that are suggestive of ADHD but do not fully meet the diagnostic criteria.';
        }
        else if (score <= 30) {
            depressionLevel = 'Based on the specific symptoms reported, it indicates the subtype of ADHD. This could be predominantly inattentive type, predominantly hyperactive-impulsive type, or combined type.';
        } else {
            depressionLevel = 'Positive ADHD diagnosis. Test results indicate that you have significant number of symptoms associated with ADHD, particularly those related to inattention, hyperactivity, and impulsivity, a positive diagnosis may be made.';
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
            <h1 className="text-3xl font-bold mb-4">ADHD Test</h1>
            <div>Attention deficit hyperactivity disorder (ADHD) is a neurodevelopmental disorder characterised by executive dysfunction occasioning symptoms of inattention, hyperactivity, impulsivity and emotional dysregulation that are excessive and pervasive, impairing in multiple contexts, and otherwise age-inappropriate.</div>
            <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md text-justify">

                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?</label>
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
                    <label className="text-lg font-semibold mb-2">How often do you have difficulty getting things in order when you have to do a task that requires organization?</label>
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
                    <label className="text-lg font-semibold mb-2">How often do you have problems remembering appointments or obligations?</label>
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
                    <label className="text-lg font-semibold mb-2"> When you have a task that requires a lot of thought, how often do you avoid or delay getting started?</label>
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
                    <label className="text-lg font-semibold mb-2">How often do you feel overly active and compelled to do things, like you were driven by a motor?</label>
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
                    <label className="text-lg font-semibold mb-2"> How often do you make careless mistakes when you have to work on a boring or difficult project?</label>
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
                    <label className="text-lg font-semibold mb-2">How often do you have difficulty keeping your attention when you are doing boring or repetitive work?</label>
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
                    <label className="text-lg font-semibold mb-2">How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?</label>
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
                    <label className="text-lg font-semibold mb-2">When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?</label>
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
                    <label className="text-lg font-semibold mb-2">Have you experienced legal problems as a result of your substance use, such as arrests or legal charges?</label>
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

                <div className="mb-4">
                    <label className="text-lg font-semibold mb-2">How often do you have difficulty unwinding and relaxing when you have time to yourself?</label>
                    <div>
                        <button
                            type="button"
                            className={`${styles['option-button']} ${answers['q11'] === '1' ? styles['selected'] : ''}`}
                            onClick={() => handleChange('q11', '1')}
                        >
                            Not at all
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q11'] === '2' ? styles['selected'] : ''}`} onClick={() => handleChange('q11', '2')}>
                            Rarely
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q11'] === '3' ? styles['selected'] : ''}`} onClick={() => handleChange('q11', '3')}>
                            Ocassionally
                        </button>
                        <button type="button" className={`${styles['option-button']} ${answers['q11'] === '4' ? styles['selected'] : ''}`} onClick={() => handleChange('q11', '4')}>
                            Frequently
                        </button>
                    </div>
                </div>
                
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

export default ADHD;
