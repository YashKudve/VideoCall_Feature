import React, { Fragment, useState } from "react";

const UnderstandAnxiety = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open/close
  const [selectedEvent, setSelectedEvent] = useState(null); // State to track which event's "Read More" was clicked

  const events = [
    {
      number: 1,
      heading: "What is Anxiety?",
      subHeading:
        "Anxiety is an emotion that you feel when you’re worried about something. Your body tenses up, and your mind becomes fixated on the thing you’re worried about. It can be hard to concentrate on anything else.",
      description: `
      <div class="text-left">
      <p>Anxiety is an emotion that you feel when you’re worried about something. Your body tenses up, and your mind becomes fixated on the thing you’re worried about. It can be hard to concentrate on anything else. Anxiety can also affect your appetite and make it hard to sleep.</p> <br/>

      <p>A little anxiety can be useful. For example, if you’re anxious about an upcoming exam, it might motivate you to study so that you feel more prepared. But anxiety can easily get out of hand. If you’re so anxious that you can’t concentrate on studying, the anxiety is no longer useful.</p> <br/>

      <p>When anxiety gets so out of hand that it starts to interfere with your daily life, you might have an anxiety disorder. Anxiety disorders are a type of mental health condition. Some examples include:</p>

      <ul class="list-disc list-inside">
        <li>Generalized anxiety disorder (GAD).</li>
        <li>Social anxiety.</li>
        <li>Phobias</li>
      </ul>
    <br/>
    <p><strong>Symptoms of an anxiety disorder</strong></p>
    <ul class="list-disc list-inside">
    <li>Feeling restless and irritable.</li>
    <li>Difficulty concentrating.</li>
    <li>Muscle pain, tightness, or soreness</li>
    <li>Trouble falling asleep or staying asleep</li>
  </ul>
      </div>`,
      imageUrl:
        "https://images.unsplash.com/photo-1592806088932-05058af0ad8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVwcmVzc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
      direction: "right",
    },
    {
      number: 2,
      heading: "How common is anxiety?",
      subHeading: "",
      description: `
     
      `,
      imageUrl: "",
      direction: "left",
    },
    {
      number: 3,
      heading: "What causes Anxiety?",
      subHeading:
        "Like other mental health conditions, anxiety disorders don’t have one single cause. Instead they have a variety of causes, called risk factors. The more risk factors you have, the more likely you are to develop anxiety",
      description: `
      <div class="text-left">
      <p>Like other mental health conditions, anxiety disorders don’t have one single cause. Instead they have a variety of causes, called risk factors. The more risk factors you have, the more likely you are to develop anxiety. Sometimes, anxiety develops gradually. Other times, it doesn’t appear until a stressful event triggers it. <br/>

      There are many risk factors and triggers, but here are a few examples:</p> <br/>
      
      <ul class="list-disc list-inside">
        <li><strong>Environment:</strong> Living in a stressful environment makes anxiety more likely. Things like living in poverty or having an abusive family put a lot of stress on your brain. They can make you feel like the world is an unsafe place.</li>

        <li><strong>Social life:</strong> Feeling embarrassed or unsure of yourself in social situations can lead to social anxiety. Being isolated can also lead to anxiety, because as humans we depend on other people to get our needs met.</li>

        <li><strong>Stressful events:</strong> Experiencing something traumatic (like falling off a ledge) can lead to fear and anxiety around that experience (like a fear of heights).</li>

        <li><strong>Childhood trauma:</strong>  Even if you’re no longer in a stressful environment, things that happened to you as a child can have an impact later in life. Anxiety can be one symptom of complex PTSD.</li>

        <li><strong>Unhealthy habits:</strong> like not getting enough sleep, or not eating. Your brain needs sleep, nutrients, and healthy habits to function properly.</li>

        <li><strong>Drugs and Alcohol: </strong>Abusing drugs and alcohol can trigger anxiety—especially stimulants like tobacco and cocaine, which make your brain more sensitive to stressful events. People often use drugs and alcohol to cope with anxiety, but in the long run they make it harder to recover from anxiety.</li>
      </ul>
      
      </div>
      `,
      imageUrl: "",
      direction: "right",
    },
    {
      number: 4,
      heading: "What’s the difference between anxiety and being stressed?",
      subHeading:
        "The words stress and anxiety are sometimes used interchangeably. So how can you tell the difference between common stress and an anxiety disorder? Both share many of the same physical symptoms, such as increased heart rate, muscle tension, or rapid breathing.",
      description: `
      <div class="text-left">
      <p>The words stress and anxiety are sometimes used interchangeably. So how can you tell the difference between common stress and an anxiety disorder? Both share many of the same physical symptoms, such as increased heart rate, muscle tension, or rapid breathing. In both cases, your body is releasing hormones to trigger these symptoms. <br/>

      Stress is a normal, proportional reaction to a stressful situation or external pressures. It’s normal to feel stressed about a final exam or job interview. <br/>
      
      When we talk about anxiety as in anxiety disorders, anxiety is a condition characterized by feelings of apprehension or unexplained thoughts of impending doom. <br/>
      
      Another way to tell the difference between stress and an anxiety disorder is noticing how long your feelings of stress last. When stress lingers for days or weeks and prevents you from carrying out day-to-day activities, then you may be experiencing anxiety. You could be avoiding certain places or situations in fear of what might happen. You may even feel anxious about the fact that you’re anxious. If you are having these concerns, you are not alone. Anxiety disorders are common and manageable.</p>
      </div>
      
      `,
      imageUrl: "",
      direction: "left",
    },
    {
      number: 5,
      heading: "What is trauma?",
      subHeading:
        "Sometimes when we see or experience something really scary, shocking, or harmful, the effects can stay with us for a long time after. If this is a familiar experience for you, you may be dealing with trauma. Anything that is highly stressful to you can be traumatic.",
      description: `
      <div class="text-left">
      <p>Sometimes when we see or experience something really scary, shocking, or harmful, the effects can stay with us for a long time after. If this is a familiar experience for you, you may be dealing with trauma. Anything that is highly stressful to you can be traumatic. Trauma is different for everyone—what seems normal to someone else might be traumatic for you. <br/> <br/>

      A traumatic experience can be a threat to your physical safety, like a car accident. It could be something more emotional or social. Trauma can be a one-time event, like a violent attack. Or it can be ongoing, like childhood neglect. Things like abuse, natural disasters, sudden death, bullying, poverty, and discrimination can all induce a trauma response.</p>
      <br/><br/>
      <strong>Common Emotional Symptoms</strong>
      <ul class="list-disc list-inside">
      <li>Fear, anxiety </li>
      <li>Shock, disbelief</li>
      <li>Sadness, hopelessness </li>
      <li>Feeling disconnected or numb.</li>
      <li>Confusion, difficulty focusing</li>
      </ul>

    <br/> <br/>
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
        Understanding Anxiety (Pending)
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

export default UnderstandAnxiety;
