import React, { useState } from 'react';
import styles from './Depress3.module.css';
import Modal from 'react-modal';

function PTSDTest() {
    const [responses, setResponses] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);


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

    const closeModal = () => {
        setModalIsOpen(false);
        // Navigate to next page
        // history.push('/next-page'); // Replace '/next-page' with the actual URL of the next page

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setModalIsOpen(true);
        setResponses({});

    };

    const score = calculateScore();
    const threshold = 4;
    const hasPTSD = score > threshold;

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">PTSD Screening Test</h1>
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
            <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md text-justify">
                {questions.map((question, index) => (
                    <div key={index} className="mb-4">
                        <p className="text-lg font-semibold mb-2">{question}</p>
                        <button
                            type="button"
                            onClick={() => handleResponse(index, "yes")}
                            style={{ marginRight: '20px', padding: '10px', border: '3px solid green', width: '80px', borderRadius: '8px', background: responses[index] === 'yes' ? 'green' : 'white' }}
                        >
                            Yes
                        </button>
                        <button
                            type="button"
                            onClick={() => handleResponse(index, "no")}
                            style={{ marginRight: '20px', padding: '10px', border: '3px solid red', width: '80px', borderRadius: '8px', background: responses[index] === 'no' ? 'red' : 'white' }}
                        >
                            No
                        </button>
                    </div>
                ))}
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-10">Submit</button>
            </form>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
            >


                {submitted && (
                    <div>
                        <h2 className="font-semibold">Score: {score}</h2>
                        {hasPTSD && <p>You may have PTSD. Please seek professional help for further evaluation.</p>}
                        {!hasPTSD && <p>You may <span className="font-bold">not</span> have PTSD based on your responses. Still you can seek professional help for further evaluation!</p>}
                        <br />
                        <h2>Responses:</h2>
                        <ul>
                            {Object.entries(responses).map(([index, response]) => (
                                <li key={index}>{questions[index]}: {response}</li>
                            ))}
                        </ul>

                    </div>
                )}
                <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-10" onClick={closeModal}>Close</button>
            </Modal>


        </div>
    );
}

export default PTSDTest;
