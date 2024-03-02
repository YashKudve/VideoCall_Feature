import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import styles from './Depress3.module.css';


export default function PTSD() {
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
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [result, setResult] = useState('');

    // const history = useHistory();

    const handleAnswerChange = (index, answer) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
    };

    const submitTest = () => {
        // Analysis
        const score = answers.filter(answer => answer === 'Yes').length;
        console.log("Total Yes Answers:", score);

        let resultMessage = '';

        if (score >= 5) {
            resultMessage = "You may be experiencing symptoms of depression. Please consult a healthcare professional.";
        } else {
            resultMessage = "You may not be experiencing significant symptoms of depression, but if you are concerned, please consult a healthcare professional.";
        }

        setResult(resultMessage);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        // Navigate to next page
        // history.push('/next-page'); // Replace '/next-page' with the actual URL of the next page
    };

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">PTSD Test</h1>
            <h4 className="text-2xl font-semibold mb-2">Post-Traumatic Stress Disorder Test</h4>
            <br />
            <div className="text-left">
                <span>Sometimes things happen to people that are unusually or especially frightening, - horrible, or traumatic. For example:</span><br />
                <span>- a serious accident or fire </span> <br />
                <span> - a physical or sexual assault or abuse </span><br />
                <span> - an earthquake or flood</span> <br />
                <span>- a war </span><br />
                <span>- seeing someone be killed or seriously injured </span><br />
                <span> - having a loved one die through homicide or suicide.</span> <br />
            </div>
            <span className="font-bold">Have you ever experienced this kind of event?</span>
            <p>Answer the following questions with <span className="font-bold">Yes</span> or <span className="font-bold">No:</span></p>
            <ol className="bg-gray-100 p-6 rounded-lg shadow-md text-justify">
                {questions.map((question, index) => (
                    <li key={index}>
                        <p className="text-lg font-semibold mb-2">{question}</p>
                        <div>
                            {/* <button type="button" onClick={() => handleAnswerChange(index, 'Yes')}>Yes</button> */}
                            <button className={`${styles['option-button']} ${answers['Yes'] === 'Yes' ? styles['selected'] : ''}`} onClick={() => handleAnswerChange(index, 'Yes')}>Yes</button>
                            <button className={`${styles['option-button']} ${answers['No'] === 'No' ? styles['selected'] : ''}`} onClick={() => handleAnswerChange(index, 'No')}>No</button>
                            {/* <button onClick={() => handleAnswerChange(index, 'No')}>No</button> */}
                        </div>
                    </li>
                ))}
            </ol>
            <button onClick={submitTest}>Submit</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false} // This line is added to avoid warning, but in real case please consider configuring it properly
            >
                <h2>Result</h2>
                <p>{result}</p>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
}
