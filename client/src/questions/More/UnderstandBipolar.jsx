import React, { Fragment, useState } from "react";

const UnderstandBipolar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open/close
  const [selectedEvent, setSelectedEvent] = useState(null); // State to track which event's "Read More" was clicked

  const events = [
    {
      number: 1,
      heading: "What is bipolar disorder?",
      subHeading:
        "Having bipolar disorder isn’t the same as being “moody.” People with bipolar disorder experience extended periods of extreme high energy and mood called mania, and extended periods of extreme low energy and mood called depression.",
      description: `
      <div class="text-left text-lg">
      <p>Having bipolar disorder isn’t the same as being “moody.” People with bipolar disorder experience extended periods of extreme high energy and mood called <strong>mania</strong>, and extended periods of extreme low energy and mood called <strong>depression</strong>.</p>
      <br/>
      <strong>Mania</strong>
      <p>During a manic episode, you might experience some of the following:</p>
      <ul class="list-disc list-inside">
      <li>having lots of energy</li>
      <li>feeling unstoppable</li>
      <li>racing thoughts</li>
      <li>not sleeping</li>
      <li>impulsive behavior, like spending too much money, having risky sex, or abusing drugs and alcohol</li>
      </ul>
      <p><strong>Hypomania</strong> is a less intense form of mania. The symptoms are similar, but its impact on people’s daily lives is not as severe. Hypomania also never includes psychosis.</p>
      <br/>
      <strong>Depression</strong>
      <p>During a depressive episode, you might experience some of the following:</p>
      <ul class="list-disc list-inside">
      <li>feeling worthless, numb, or empty</li>
      <li>low energy</li>
      <li>changes in sleep and eating habits</li>
      <li>thoughts of death or suicide</li>
      </ul>
      </div>`,
      imageUrl:
        "https://images.unsplash.com/photo-1592806088932-05058af0ad8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVwcmVzc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
      direction: "right",
    },
    {
      number: 2,
      heading: "Are there types of bipolar?",
      subHeading:
        "We all have ups and downs, but those with bipolar disorder experience them at extremes, for extended periods of time. These irregular shifts in mood are characterized by periods of mania and depression. There are four main types of bipolar disorder.",
      description: `
     <div class="text-left text-lg">
     <p>We all have ups and downs, but those with bipolar disorder experience them at extremes, for extended periods of time. These irregular shifts in mood are characterized by periods of mania and depression. There are four main types of bipolar disorder. The main differences are in the intensity of the manic and depressive episodes. In between these episodes, people with bipolar disorder usually feel “normal.”</p>
     <strong>Bipolar I</strong>
     <p>People with bipolar I have had at least one manic episode in their lives. Most people with bipolar I also experience depression. There is generally a pattern of cycling between mania and depression, which is where the term “manic depressive” comes from.</p>
     <strong>Bipolar II</strong>
     <p>People diagnosed with bipolar II have had one or more major depressive episodes and at least one episode of hypomania. Hypomania is a less severe type of mania, with highs that do not quite reach “full” mania.</p>
     <strong>Cyclothymia</strong>
     <p>Cyclothymia is similar to bipolar disorder, but less severe. The low and high mood swings never quite reach the intensity or duration of manic or depressive episodes. People with cyclothymia cycle between hypomania and mild depression for at least two years. While mild, the symptoms of cyclothymia may still interfere with daily life and relationships.</p>
     <strong>Not otherwise specified (NOS)</strong>
     <p>Those who experience symptoms of depression, mania, and hypomania but do not fit the criteria for bipolar I, bipolar II, or cyclothymia may be diagnosed as bipolar disorder NOS.</p>

     </div>
      `,
      imageUrl: "",
      direction: "left",
    },
    {
      number: 3,
      heading: "",
      subHeading: "",
      description: `
      <div class="text-left text-lg">
      
      
      
      </div>
      `,
      imageUrl: "",
      direction: "right",
    },
    {
      number: 4,
      heading: "",
      subHeading: "",
      description: `
      <div class="text-left text-lg">
      
      </div>
      
      `,
      imageUrl: "",
      direction: "left",
    },
    {
      number: 5,
      heading: "",
      subHeading: "",
      description: `
      <div class="text-left text-lg">
      
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
        Understanding Bipolar
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

      <div class="flex justify-center">
        <button class="bg-gradient-to-r from-green-600 to-green-800 text-white w-80 h-12 text-lg font-bold hover:bg-green-900 border rounded-2xl">
          Treatment and Recovery &#187;
        </button>
      </div>
    </div>
  );
};

const Circle = () => {
  return <div className="rounded-full w-4 h-4 bg-green-700 mx-auto"></div>;
};

const Pillar = () => {
  return (
    <div className="rounded-t-full rounded-b-full w-3 h-full bg-gradient-to-b from-green-400 to-green-700 mx-auto"></div>
  );
};

const EventCard = ({ number, heading, subHeading, onClick }) => {
  return (
    <div className="flex flex-col gap-y-2 border shadow-lg rounded-xl p-4">
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
        <h2 className="text-xl font-bold text-blue-800">{event.heading}</h2>
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

export default UnderstandBipolar;
