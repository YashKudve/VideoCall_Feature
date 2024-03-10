import React, { Fragment, useState } from "react";

const T2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open/close
  const [selectedEvent, setSelectedEvent] = useState(null); // State to track which event's "Read More" was clicked

  const events = [
    {
      number: 1,
      heading: "What is Depression?",
      subHeading:
        "Feeling sad is a normal human experience, but feeling too much sadness can cause distress and life problems. When too much sadness affects your life, you might have depression.",
      direction: "right",
    },
    {
      number: 2,
      heading: "What causes Depression?",
      subHeading:
        "Depression is a mental health problem that comes from changes in your brain. The changes relate to how your brain produces and absorbs neurotransmitters, how it’s circuits work, inflammation, and even how it’s built (grey matter).",
      direction: "left",
    },
    {
      number: 3,
      heading: "Mental Health Medication",
      subHeading:
        "It would be really nice if there was one perfect medication for every mental health concern.There are many different types of medications, and they all work differently. On top of that, everybody’s brain is different.",
      direction: "right",
    },
    {
      number: 4,
      heading: "Mental Health self-help",
      subHeading:
        "Therapy and medication aren’t the only ways to improve your mental health.  There are lots of things that you can do on your own! Taking steps to educate yourself, learn your mind and body, and make changes over time in your life can improve your overall well-being.",
      direction: "left",
    },
    {
      number: 5,
      heading: "Finding mental health support",
      subHeading:
        "When you’re worried about your mental health, it’s easy to feel alone. It might feel like no one understands what you’re going through. You might not even fully understand it yourself! Reaching out can be scary, but there’s no need to suffer through mental health struggles on your own.",
      direction: "right",
    },
  ];

  const openModal = (index) => {
    setSelectedEvent(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-y-3 w-full my-4 z-10">
      <span className="text-3xl font-bold bg-green-700 text-white p-7 rounded-lg">
        Understanding Depression
      </span>
      <Circle />
      {events.map((event, key) => (
        <Fragment key={key}>
          <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto mr-10 ml-10">
            {event.direction === "left" ? (
              <EventCard
                number={event.number}
                heading={event.heading}
                subHeading={event.subHeading}
                onClick={() => openModal(key)} // Pass the openModal function as onClick prop
              />
            ) : (
              <div></div>
            )}
            <Pillar />
            {event.direction === "right" ? (
              <EventCard
                heading={event.heading}
                subHeading={event.subHeading}
                onClick={() => openModal(key)} // Pass the openModal function as onClick prop
              />
            ) : (
              <div></div>
            )}
          </div>
          {key < events.length - 1 && <Circle />}
        </Fragment>
      ))}
      <Circle />
      {isModalOpen && selectedEvent !== null && (
        <Modal
          onClose={closeModal}
          heading={events[selectedEvent].heading}
          subHeading={events[selectedEvent].subHeading}
        />
      )}

      <button className="bg-green-700 text-white w-auto h-auto m-auto]">
        Treatment and Recovery &#187;
      </button>
    </div>
  );
};

const Circle = () => {
  return <div className="rounded-full w-4 h-4 bg-green-700 mx-auto"></div>;
};

const Pillar = () => {
  return (
    <div className="rounded-t-full rounded-b-full w-3 h-full bg-green-700 mx-auto"></div>
  );
};

const EventCard = ({ number, heading, subHeading, onClick }) => {
  return (
    <div className="flex flex-col gap-y-2 border shadow-md rounded-xl p-4">
      <div className="bg-red-800 text-white rounded-full w-10 h-10">
        {number}
      </div>
      <div className="text-blue-800 font-bold text-lg border-b">{heading}</div>
      <div className="text-md text-left text-gray-800">{subHeading}</div>
      <button
        onClick={onClick}
        className="text-blue-500 hover:text-blue-700 focus:outline-none"
      >
        Read More
      </button>
    </div>
  );
};

const Modal = ({ onClose, heading }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80 m-auto transition-opacity delay-1000">
      <div className="bg-white p-4 rounded-3xl transform transition-transform delay-1000 m-10">
        <h2 className="text-xl font-bold">{heading}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-bold"></h3>
            <p className="text-justify">
              Feeling sad is a normal human experience, but feeling too much
              sadness can cause distress and life problems. When too much
              sadness affects your life, you might have depression. Depression
              is a type of mental health condition called a mood disorder. Mood
              disorders occur when changes in mood go beyond the normal ups and
              downs we all experience from day to day. Episodes of depression
              last at least two weeks at a time, but sometimes they can last for
              months or even years. <br /> Depression goes way beyond just
              feeling sad. Some of the symptoms that people with depression
              experience include:
              <br />
              <ul typeof="disc">
                <li>
                  Feeling or appearing low, empty inside, or irritable most of
                  the day every day
                </li>
                <li>Losing interest in activities you would normally enjoy</li>
                <li>
                  Changes in appetite or weight—eating more or less; gaining or
                  losing weight
                </li>
                <li>
                  Changes in sleep—either not being able to sleep or sleeping
                  too much
                </li>
                <li>Feelings of worthlessness or guilt</li>
              </ul>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold"></h3>
            <div className="self-center m-auto">
              <img
                className="w-60 h-90 object-cover ml-60"
                src="https://images.unsplash.com/photo-1592806088932-05058af0ad8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVwcmVzc2lvbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="Depress Image"
              />
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default T2;
