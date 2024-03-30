import React, { Fragment, useState } from "react";

const UnderstandDepression = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open/close
  const [selectedEvent, setSelectedEvent] = useState(null); // State to track which event's "Read More" was clicked

  const events = [
    {
      number: 1,
      heading: "What is Depression?",
      subHeading:
        "Feeling sad is a normal human experience, but feeling too much sadness can cause distress and life problems. When too much sadness affects your life, you might have depression.",
      description: `
      <div class="text-left">
      <p>Feeling sad is a normal human experience, but feeling too much sadness can cause distress and life problems. When too much sadness affects your life, you might have depression.</p>
      <p>Depression is a type of mental health condition called a mood disorder. Mood disorders occur when changes in mood go beyond the normal ups and downs we all experience from day to day. Episodes of depression last at least two weeks at a time, but sometimes they can last for months or even years.</p>
      <p>Depression goes way beyond just feeling sad. Some of the symptoms that people with depression experience include:</p>
      <ul class="list-disc list-inside">
        <li>Feeling or appearing low, empty inside, or irritable most of the day every day</li>
        <li>Losing interest in activities you would normally enjoy</li>
        <li>Changes in appetite or weight—eating more or less; gaining or losing weight</li>
        <li>Changes in sleep—either not being able to sleep or sleeping too much</li>
        <li>Feelings of worthlessness or guilt</li>
      </ul>
      </div>`,
      imageUrl:
        "https://images.unsplash.com/photo-1592806088932-05058af0ad8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVwcmVzc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
      direction: "right",
    },
    {
      number: 2,
      heading: "What causes Depression?",
      subHeading:
        "Depression is a mental health problem that comes from changes in your brain. The changes relate to how your brain produces and absorbs neurotransmitters, how it’s circuits work, inflammation, and even how it’s built (grey matter).",
      description: `
      <div class="text-left">
      <p>Depression is a mental health problem that comes from changes in your brain. The changes relate to how your brain produces and absorbs neurotransmitters, how it’s circuits work, inflammation, and even how it’s built (grey matter). These biological changes can start because you have a family history of depression, or it can start after changes and stressors in your life.</p> <br/>
      <p>Some people feel depressed but don’t understand why. Like there’s nothing to be sad about but I feel so sad and I can’t control these feelings. If you feel this way – it’s possible you have a genetic predisposition to depression, that depression might run in your family, or that you have what professionals call “clinical depression.” There’s no environmental explanation for it -but your brain is changing in a way that causes depression symptoms.</p>
      </div>
      `,
      imageUrl: "",
      direction: "left",
    },
    {
      number: 3,
      heading: "Am I depressed or just sad?",
      subHeading:
        "Sadness and depression are both common human emotions, but they differ in intensity, duration, and impact on daily life. It's important to recognize the signs and symptoms of each to seek appropriate support and treatment.",
      description: `
      <div class="text-left">
      <p>Everyone feels sad sometimes. It’s natural when we experience moments in life that make us feel overwhelmed, upset, or even hurt. Maybe we just got out of a relationship, we miss someone, or we feel alone. Maybe we tried our hardest but didn’t succeed, or the stress of everyday life is weighing on us. </p> <br/>
      <p>If you’re sad because you lost your job, are going through a breakup, or have lost someone in your life, this is normal. Sadness, even if it feels like extreme sadness, is a natural reaction to events like these. But regular sadness can turn into depression if the feelings don’t get better over time. Or if your mood starts to get in the way of your daily life.</p>
      <p><strong>Sadness:</strong></p>
      <ul class="list-disc list-inside">
        <li>Sadness is a temporary emotional state often triggered by specific events, such as a loss, disappointment, or failure.</li>
        <li>It is a normal part of the human experience and typically resolves on its own with time.</li>
        <li>While sadness may affect mood and behavior, it usually does not significantly impair daily functioning.</li>
      </ul>
      <p><strong>Depression:</strong></p>
      <ul class="list-disc list-inside">
        <li>Depression is a mood disorder characterized by persistent feelings of sadness, hopelessness, and disinterest in activities once enjoyed.</li>
        <li>It lasts for an extended period, typically two weeks or more, and can interfere with various aspects of life, including work, relationships, and self-care.</li>
        <li>Depression often involves physical symptoms such as changes in appetite, sleep disturbances, fatigue, and body aches.</li>
        <li>If you suspect you may be experiencing depression, it's essential to reach out to a healthcare professional for evaluation and support.</li>
      </ul>
      </div>
      `,
      imageUrl: "",
      direction: "right",
    },
    {
      number: 4,
      heading: "Types of intrusive thoughts",
      subHeading:
        "You’re going about your day, and suddenly you’re hit with a thought that’s bizarre, uncomfortable—even shocking. Maybe you’re talking to someone, and you suddenly picture yourself punching them in the face. These are called Intrusive Thoughts",
      description: `
      
      `,
      imageUrl: "",
      direction: "left",
    },
    {
      number: 5,
      heading: "What is depression really like?",
      subHeading:
        "When people think about depression, people may think of being sad. But for many people, depression isn’t sadness. Sometimes it feels like anger, exhaustion, hopelessness, worthlessness, or feeling like they will never be happy again.",
      description: `
      <div class="text-left">
      <p>When people think about depression, people may think of being sad. But for many people, depression isn’t sadness. Sometimes it feels like anger, exhaustion, hopelessness, worthlessness, or feeling like they will never be happy again.
      <br/>
      Here are examples of what people have said depression feels like:</p>
      <ul class="list-disc list-inside">
      <li>Fighting an exhausting battle against yourself </li>
      <li>Drowning and no one sees it, and you feel helpless to the water around you</li>
      <li>A door to an empty room with no escape </li>
      <li>An overwhelming sense of sadness about life and about all that you are and all you do</li>
      </ul>

    <br/>
    <p>Depression is a mood disorder—mood disorders happen when changes in our moods go beyond the normal ups and downs that we experience from day to day. Episodes of depression last at least two weeks at a time, but sometimes they can last for months or even years.<br/>

    Some of the symptoms that people with depression experience include:</p>
    <ul class="list-disc list-inside">
    <li>Feeling or appearing low, empty inside, or irritable most of the day every day</li>
    <li>Changes in sleep—either not being able to sleep or sleeping too much</li>
    <li>Feelings of worthlessness or guilt</li>
    <li>Difficulty thinking, concentrating, or making decisions</li>
    <li>Thoughts of death or suicide</li>
    </ul>
      </div>
      `,
      imageUrl: "",
      direction: "right",
    },
  ];

  const openModal = (event) => {
    setSelectedEvent(event);
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
                onClick={() => openModal(key)}
              />
            ) : (
              <div></div>
            )}
            <Pillar />
            {event.direction === "right" ? (
              <EventCard
                heading={event.heading}
                subHeading={event.subHeading}
                onClick={() => openModal(key)}
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
          event={events[selectedEvent]}
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

const Modal = ({ onClose, event }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80 m-auto transition-opacity delay-1000">
      <div className="bg-white p-4 rounded-3xl transform transition-transform delay-1000 m-10">
        <h2 className="text-xl font-bold">{event.heading}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-bold"></h3>
            {/* <p className="text-justify">{event.description}</p> */}
            <div dangerouslySetInnerHTML={{ __html: event.description }} />
          </div>
          <div>
            <h3 className="text-lg font-bold"></h3>
            <div className="self-center m-auto">
              <img
                className="w-60 h-90 object-cover ml-60"
                src={event.imageUrl}
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

export default UnderstandDepression;
