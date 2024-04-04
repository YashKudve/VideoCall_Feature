import React, { Fragment, useState } from "react";

const UnderstandED = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open/close
  const [selectedEvent, setSelectedEvent] = useState(null); // State to track which event's "Read More" was clicked

  const events = [
    {
      number: 1,
      heading: "What is Eating Disorder?",
      subHeading:
        "Eating disorders are mental health conditions that look like unhealthy behaviors, obsessions, and compulsions around food, exercise, and/or body shape. They affect people of all ages, races, backgrounds, socioeconomic statuses, religions, genders, and sexual orientations",
      description: `
      <div class="text-left text-lg">
      <p>Eating disorders are mental health conditions that look like unhealthy behaviors, obsessions, and compulsions around food, exercise, and/or body shape. They affect people of all ages, races, backgrounds, socioeconomic statuses, religions, genders, and sexual orientations. They are the most lethal of any mental health conditions and can have serious health consequences, including osteoporosis, gastric rupture, and Type II Diabetes Mellitus.<br/>

      Most people associate eating disorders with an obsession with being skinny, but they are far more complicated than that. They are thought to result from a combination of biological, psychological, and social factors. Many people with eating disorders have other mental health conditions, including depression, anxiety, PTSD, and other addictions. Trauma, especially sexual trauma, is also very common among individuals with eating disorders. <br/>
      
      While dieting, unhealthy eating, and body image concerns are often dismissed and even promoted in American culture, many of these behaviors will eventually become eating disorders. It’s important to address any symptoms that are having a negative impact on your life and functioning. There is no required severity or body weight that a person must reach before they deserve help or support.</p> <br/>

      <strong>Symptoms of Eating Disorder</strong>
      <ul class="list-disc list-inside">
      <li>Restricting food intake</li>
      <li>Overexercise</li>
      <li>self-induced vomiting</li>
      <li>laxative abuse</li>
      </ul>
      </div>`,
      imageUrl:
        "https://images.unsplash.com/photo-1592806088932-05058af0ad8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVwcmVzc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
      direction: "right",
    },
    {
      number: 2,
      heading: "Different types of eating disorder",
      subHeading: "",
      description: `
     <div class="text-left text-lg">
     <strong>Different types of Eating Disorder are:</strong>
      <ul class="list-disc list-inside">
      <li><strong>Anorexia: </strong>Anorexia involves restricting food intake, significant weight loss, intense fear of weight gain, and a distorted perception of appearance. It’s often accompanied by very specific rules and rituals around food and social isolation.</li>
      <li><strong>Bulimia: </strong>Bulimia involves binging and purging. Binging means a person eats an abnormally large amount of food in a short time frame. They feel ashamed and out of control while eating. Binging is followed by purging in the form of vomiting, laxative or drug use, fasting, or over exercise.</li>
      <li><strong>Binge eating disorder: </strong>Binge eating disorder is diagnosed when a person repeatedly consumes abnormally large amounts of food in short timeframes. It is distinct from overeating in that is causes serious pain and shame and the person feels out of control during binges.</li>
      <li><strong>Other Specified Feeding or Eating Disorder(OSFED): </strong>formerly referred to as Eating Disorder- Not Otherwise Specified (EDNOS), this is a term used when someone has eating disorder behaviors but doesn’t meet the full clinical guidelines for other eating disorders. For example, a person restricts food intake, has an intense fear of gaining weight, and a distorted perception of their appearance. They are not classified as being underweight by their doctor, which means they do not meet full criteria for anorexia despite having all the other signs. They would be considered OSFED.</li>
      </ul>
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
        Eating Disorder
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

export default UnderstandED;
