import { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

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
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [result, setResult] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);

    const history = useNavigate();

    const handleAnswerChange = (index, answer) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
        setSelectedOption(index);
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
        history.push('/next-page'); // Replace '/next-page' with the actual URL of the next page
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Depression Test 1</h1>
            <p className="mb-4">Answer the following questions with Yes or No:</p>
            <ol>
                {questions.map((question, index) => (
                    <li key={index}>
                        <p>{question}</p>
                        <div>
                            <button onClick={() => handleAnswerChange(index, 'Yes')} style={{ backgroundColor: selectedOption === index && answers[index] === 'Yes' ? 'green' : 'initial' }}>Yes</button>
                            <button onClick={() => handleAnswerChange(index, 'No')} style={{ backgroundColor: selectedOption === index && answers[index] === 'No' ? 'red' : 'initial' }}>No</button>
                        </div>
                    </li>
                ))}
            </ol>
            <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={submitTest}>Submit</button>
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
}
