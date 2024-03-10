import React, { Fragment } from 'react';
// import EventCard from './EventCard';

const TimeLine = () => {
    const events = [
        {
            heading: "How do you treat mental illness?",
            subHeading: "For most people, some combination of lifestyle changes, therapy, medication, and support is helpful for treating mental illness. Some of these are more effective than others for certain conditions and certain people. It may take some time to discover what works for you, but it is worth it.",
            direction: "right",
        },
        {
            heading: "Therapy 101",
            subHeading: "Therapy is a great way to improve your mental health. Understanding how it works can help you feel more comfortable when you go.There are many different types of therapy, and every therapist is different. That said, there are a few things you can generally expect.",
            direction: "left",
        },
        {
            heading: "Mental Health Medication",
            subHeading: "It would be really nice if there was one perfect medication for every mental health concern.There are many different types of medications, and they all work differently. On top of that, everybody’s brain is different.",
            direction: "right",
        },
        {
            heading: "Mental Health self-help",
            subHeading: "Therapy and medication aren’t the only ways to improve your mental health.  There are lots of things that you can do on your own! Taking steps to educate yourself, learn your mind and body, and make changes over time in your life can improve your overall well-being.",
            direction: "left",
        },
        {
            heading: "Finding mental health support",
            subHeading: "When you’re worried about your mental health, it’s easy to feel alone. It might feel like no one understands what you’re going through. You might not even fully understand it yourself! Reaching out can be scary, but there’s no need to suffer through mental health struggles on your own.",
            direction: "right",
        },
        
    ];

    // const bgImg = {
    //     backgroundImage:
    //         "url('https://cdn.pixabay.com/photo/2022/06/24/17/35/relaxation-7282116_1280.jpg')",
    //     height: "100vh",
    //     marginTop: "-70px",
    //     fontSize: "",
    //     backgroundSize: "fit",
    //     backgroundRepeat: "no-repeat",
        
    // };

    return (
        <div className="flex flex-col gap-y-3 w-full my-4 z-10">
            
            <span className='text-lg font-bold'>Mental Health Treatment Roadmap</span>
            <Circle />
            {events.map((event, key) => (
                
                <Fragment key={key}>
                    <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto mr-10 ml-10">
                        {event.direction === "left" ? (
                            <EventCard heading={event.heading} subHeading={event.subHeading} />
                        ) : (
                            <div></div>
                        )}

                        <Pillar />

                        {event.direction === 'right' ? (
                            <EventCard heading={event.heading} subHeading={event.subHeading} />
                        ) : (
                            <div></div>
                        )}
                    </div>

                    {key < (events.length - 1) && <Circle />}
                </Fragment>
            ))}

            <Circle />
            </div>
        
    );
};

const Circle = () => {
    return (
        <div className="rounded-full w-4 h-4 bg-green-700 mx-auto"></div>
    );
};

const Pillar = () => {
    return (
        <div className="rounded-t-full rounded-b-full w-3 h-full bg-green-700 mx-auto"></div>
    );
};

const EventCard = ({heading,subHeading}) =>{
    return(
        <div className="flex flex-col gap-y-2 border shadow-md rounded-xl p-4">
            <div className="text-blue-800 font-bold text-lg border-b">{heading}</div>
            <div className="text-md text-left text-gray-800">{subHeading}</div>
        </div>
    )
}

export default TimeLine;
