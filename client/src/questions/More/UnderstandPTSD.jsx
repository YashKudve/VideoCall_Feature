import React, { Fragment, useState } from "react";

const UnderstandPTSD = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open/close
  const [selectedEvent, setSelectedEvent] = useState(null); // State to track which event's "Read More" was clicked

  const events = [
    {
      number: 1,
      heading: "What is posttraumatic stress disorder (PTSD)?",
      subHeading:
        "If you have gone through a traumatic experience, it’s normal to feel lots of emotions about it. These can include distress, fear, helplessness, guilt, shame, or anger. Many people start to feel better later, but sometimes these feelings don’t go away.",
      description: `
      <div class="text-left text-lg">
      <p>Posttraumatic stress disorder (PTSD) is a common mental health condition that appears after experiencing or witnessing a traumatic event. Examples of events might include natural disasters, violent attacks, car accidents, or childhood abuse or neglect. The same event can affect people differently—what’s traumatic for you might not be traumatic for someone else.<br/>

      PTSD usually develops after a single, brief traumatic event. Some forms of trauma occur over long periods of time and can lead to a related condition, Complex PTSD.</p>
      <strong>Symptoms of PTSD:</strong>

      <ul class="list-disc list-inside">
      <li><strong>Repeatedly thinking about the trauma.</strong> Thoughts about the trauma may come to mind at surprising or inconvenient times. You might have nightmares or flashbacks about the event.</li>
      <li><strong>Being constantly alert or on guard.</strong> You may be easily startled or angered, irritable or anxious, and preoccupied with staying safe. You might become hyper-aware of your surroundings and see danger everywhere.</li>
      <li><strong>Avoiding reminders of the trauma.</strong> You may not want to talk about the event or be around people or places that remind you of the event. You may even forget details about the event or suppress your memories.</li>
      <li><strong>Intense negative emotions and beliefs.</strong> You may feel depressed, anxious, guilty, or angry. You might blame yourself for the trauma, or believe that no one can be trusted.</li>
      </ul>
      <br/>
      <p>Most people who experience a traumatic event have symptoms like these for a few days after the event. But for people with PTSD, symptoms last for over one month and interfere with daily life.</p>
      </div>`,
      imageUrl:
        "https://images.unsplash.com/photo-1592806088932-05058af0ad8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVwcmVzc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
      direction: "right",
    },
    {
      number: 5,
      heading: "What is trauma?",
      subHeading:
        "Sometimes when we see or experience something really scary, shocking, or harmful, the effects can stay with us for a long time after. If this is a familiar experience for you, you may be dealing with trauma. Anything that is highly stressful to you can be traumatic.",
      description: `
        <div class="text-left text-lg">
        <p>Sometimes when we see or experience something really scary, shocking, or harmful, the effects can stay with us for a long time after. If this is a familiar experience for you, you may be dealing with trauma. Anything that is highly stressful to you can be traumatic. Trauma is different for everyone—what seems normal to someone else might be traumatic for you. <br/> <br/>
  
        A traumatic experience can be a threat to your physical safety, like a car accident. It could be something more emotional or social. Trauma can be a one-time event, like a violent attack. Or it can be ongoing, like childhood neglect. Things like abuse, natural disasters, sudden death, bullying, poverty, and discrimination can all induce a trauma response.</p>
        <br/>
        <strong>Common Emotional Symptoms</strong>
        <ul class="list-disc list-inside">
        <li>Fear, anxiety </li>
        <li>Shock, disbelief</li>
        <li>Sadness, hopelessness </li>
        <li>Feeling disconnected or numb.</li>
        <li>Confusion, difficulty focusing</li>
        </ul>
  
      <br/>
      <strong>Common Physical Symptoms</strong>
      <ul class="list-disc list-inside">
      <li>Trouble sleeping, nightmares</li>
      <li>Fatigue, exhaustion</li>
      <li>Racing heart, fast breathing</li>
      <li>Feeling on edge</li>
      <li>Body aches/pains, muscle tension</li>
      
      </ul>
        </div>
        `,
      imageUrl: "",
      direction: "left",
    },
    {
      number: 3,
      heading: "Who can get PTSD?",
      subHeading:
        "When we think of PTSD, we think a lot about veterans. But PTSD is a common mental health condition, and can affect anyone.",
      description: `
      <div class="text-left text-lg">
      <p>When we think of PTSD, we think a lot about veterans. But PTSD is a common mental health condition, and can affect anyone.
        <br/>
      Some people who get PTSD include:</p>
      <ul class="list-disc list-inside">
      <li>Anyone who was a victim, witnessed or has been exposed to a life-threatening situation.</li>
      <li>Survivors of violent acts, such as domestic violence, rape, sexual, physical and/or verbal abuse or physical attacks.</li>
      <li>Survivors of unexpected dangerous events, such as a car accident, natural disaster, or terrorist attack.</li>
      <li>Combat veterans or civilians exposed to war.</li>
      <li>People who have learned of or experienced an unexpected and sudden death of a friend or relative.</li>
      <li>Children and adults who have been repeatedly bullied or cyberbullied.</li>
      </ul>
      
      
      </div>
      `,
      imageUrl: "",
      direction: "right",
    },
    {
      number: 4,
      heading: "What is Complex PTSD?",
      subHeading:
        "People often develop posttraumatic stress disorder (PTSD) after experiencing a single, brief traumatic event—like a car accident, a natural disaster, or a violent attack. But trauma comes in many forms. People who experience continuous trauma over a long period of time may develop a special type of PTSD called Complex PTSD, or C-PTSD.",
      description: `
      <div class="text-left text-lg">
      <p>People often develop posttraumatic stress disorder (PTSD) after experiencing a single, brief traumatic event—like a car accident, a natural disaster, or a violent attack. But trauma comes in many forms. People who experience continuous trauma over a long period of time may develop a special type of PTSD called Complex PTSD, or C-PTSD.
        <br/>
      Types of long-term trauma that may cause C-PTSD include:</p>
      <ul class="list-disc list-inside">
      <li>Physical and emotional abuse</li>
      <li>Racism, sexism, homophobia, transphobia, and other forms of marginalization</li>
      <li>Sex work and human trafficking</li>
      <li>Ethnic cleansing, which may include forced migration and concentration camps</li>
      </ul>
      <br/>
      <strong>What does Complex PTSD look like?</strong>
      <p>Complex PTSD affects people in 7 “domains”:</p>

      <ul class="list-disc list-inside">
      <li>Attachment: trouble developing healthy boundaries; isolating yourself; not trusting other people</li>
      <li>Biology: chronic pain and other medical problems; lack of coordination</li>
      <li>Emotional regulation: trouble labeling and expressing your feelings</li>
      <li>Dissociation: memory loss; feeling detached from your own mind or body; trouble knowing what is real</li>
      <li>Behavioral control: impulse control; trouble following rules or making decisions; anger problems; eating disorders; misusing drugs and alcohol</li>
      <li>Thinking: trouble concentrating, learning, or completing tasks
      </li>
      <li>Self-concept: feeling like you don’t know who you are; low self-esteem or body-image; guilt and shame</li>
      </ul>
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
        Understanding PTSD
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

export default UnderstandPTSD;
