import React, { Fragment, useState } from "react";

const UnderstandADHD = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open/close
  const [selectedEvent, setSelectedEvent] = useState(null); // State to track which event's "Read More" was clicked

  const events = [
    {
      number: 1,
      heading: "What is ADHD?",
      subHeading:
        "Not being able to focus makes life difficult. You may find yourself easily distracted and unable to complete daily tasks such as chores, schoolwork, and work projects. Or struggling to focus on the right things. This feeling is absolutely frustrating and can interfere with your academics, relationships, and overall enjoyment of life.",
      description: `
      <div class="text-left text-lg">
      <p>Not being able to focus makes life difficult. You may find yourself easily distracted and unable to complete daily tasks such as chores, schoolwork, and work projects. Or struggling to focus on the right things. This feeling is absolutely frustrating and can interfere with your academics, relationships, and overall enjoyment of life.</p><br/>
      Not being able to focus makes life difficult. You may find yourself easily distracted and unable to complete daily tasks such as chores, schoolwork, and work projects. Or struggling to focus on the right things. This feeling is absolutely frustrating and can interfere with your academics, relationships, and overall enjoyment of life. <br/>

      <strong>Symptoms of ADHD</strong>
      <p>There are three main characteristics of ADHD: inattention, hyperactivity, and impulsivity. There are also three types of ADHD: predominantly inattentive type, predominantly hyperactive/impulsive type, and combined type– experiencing aspects of both inattention and hyperactive-impulsive types.</p>

      <strong>Inattention</strong>
      <ul class="list-disc list-inside">
      <li>Often fails to give close attention or makes careless mistakes.</li>
      <li>Often has trouble holding attention on tasks and/or activities.</li>
      <li>Avoid or dislikes tasks that require sustained mental effort.</li>
      <li>Is often easily distracted.</li>
      </ul>

      <strong>Hyperactivity</strong>
      <ul class="list-disc list-inside">
      <li>Excessive fidgeting, tapping, or talking</li>
      <li>Extreme restlessness or difficulty sitting still</li>
      <li>Interrupting others or finding it hard to wait your turn</li>
      <li>Moves around constantly even in situations where it’s not appropriate</li>
      </ul>


      </div>`,
      imageUrl:
        "https://images.unsplash.com/photo-1592806088932-05058af0ad8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVwcmVzc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
      direction: "right",
    },
    {
      number: 2,
      heading: "What causes ADHD?",
      subHeading:
        "ADHD is a common mental health condition. Over time, more and more people are getting diagnosed with ADHD. That’s mostly because more people are aware of ADHD than they used to be.",
      description: `
     <div class="text-left text-lg">
     <p>ADHD is a common mental health condition. Over time, more and more people are getting diagnosed with ADHD. That’s mostly because more people are aware of ADHD than they used to be.</p>
     <p>Like other mental health conditions, there’s no single explanation for ADHD. Instead, there are a variety of risk factors. The more risk factors you have, the more likely you are to develop ADHD.</p>

     <p>Some of the risk include:</p>
     <ul class="list-disc list-inside">
      <li><strong>Brain chemistry and structure:</strong> People with ADHD often show differences in parts of the brain that deal with attention, behavior, and impulse control. However, it’s not possible to reliably distinguish an “ADHD brain” from an average brain. The brain chemicals most relevant to ADHD are dopamine and norepinephrine.</li>
      <li><strong>Sleep deprivation: </strong>Not getting enough sleep, or getting low-quality sleep, can cause ADHD or make symptoms worse. People with ADHD often stay up much later than the average person, making it hard to get enough sleep every night.</li>
      <li><strong>Environment: </strong>Children who are exposed to heavy metals like lead and mercury are more likely to develop ADHD early on. Premature birth and other difficulties during pregnancy can also have an effect.</li>
      <li><strong>Other mental health conditions: </strong>People with ADHD often also deal with things like depression, anxiety or bipolar disorder. Often, treating one mental health condition can help relieve the symptoms of another.</li>
      <li><strong>Highly stimulating technology: </strong>Highly stimulating technology: Some people blame things like smartphones and video games for ADHD. The evidence for this is mixed, but people with ADHD do often spend more time with smartphones, video games, and the Internet.</li>
      </ul>

     </div>
      `,
      imageUrl: "",
      direction: "left",
    },
    {
      number: 3,
      heading: "Are there different types of ADHD?",
      subHeading:
        "From time to time we all may have trouble focusing or remembering things due to life experiences, anxiety or other mental health conditions, or other circumstances. But people living with one of the three different types of ADHD—attention-deficit/ hyperactivity disorder—may experience inattention, forgetfulness, hyperactivity, or impulsivity in their daily lives.",
      description: `
      <div class="text-left text-lg">
      <strong>Hyperactive-impulsive type ADHD</strong>
      <p>Hyperactive-impulsive type ADHD is the least common type of ADHD, but it tends to be the most visible. [1] This type of ADHD presents as symptoms of hyperactivity and impulsivity without symptoms of inattention. Someone living with hyperactive-impulsive type of ADHD may feel restless and fidget frequently.</p>

      <strong>Inattentive type ADHD</strong>
      <p>People with inattentive type ADHD experience mainly the inattentive symptoms of ADHD. These include lack of focus and being distracted without symptoms of hyperactivity and impulsivity. This type of ADHD often goes undiagnosed because it’s not as noticeable or disruptive as the hyperactive-impulsive type. For example, children with hyperactive-impulsive type ADHD may interrupt in class making their symptoms hard to ignore. But children with inattentive type ADHD may just look like they’re daydreaming a lot.</p>

      <strong>Combined type ADHD</strong>
      <p>Combined type is the most common type of ADHD. [1] This type of ADHD is called “combined” because it includes both the inattentive and hyperactive-impulsive symptoms of ADHD. This means that someone who has combined type shows ADHD symptoms that are inattentive, hyperactive, and impulsive. Someone living with combined type may experience forgetting daily tasks such as chores and being easily distracted in addition to feeling restless, talking excessively, and/or feeling impatient.</p>
      </div>
      `,
      imageUrl: "",
      direction: "right",
    },
    {
      number: 4,
      heading: "Do I have ADHD?",
      subHeading:
        "With so much information about ADHD (attention-deficit/ hyperactivity disorder) on the Internet, you may find that you share experiences that are similar to people living with ADHD",
      description: `
      <div class="text-left text-lg">
      <strong>What does ADHD feel like?</strong>
<p>ADHD presents in three types of symptoms: inattention, hyperactivity, and/or impulsivity. A person living with ADHD may have one, two, or all three of these types of symptoms. <br/>

The experiences of living with ADHD vary from person to person. Someone may feel frustrated because they can’t get things right the first time. Or a person may be annoyed because they often lose important items like their keys, wallet, or phone. Someone else may become hyper-focused and fixated on ideas, hobbies, or topics and then quickly lose interest. While ADHD may feel or look different for different people, here is a list of common symptoms of ADHD: </p>
<ul class="list-disc list-inside">
      <li>Often fails to give close attention or makes careless mistakes</li>
      <li>Often has trouble holding attention on tasks and/or activities</li>
      <li>Avoid or dislikes tasks that require sustained mental effort</li>
      <li>Extreme restlessness or difficulty sitting still</li>
      </ul>
      </div>
      
      `,
      imageUrl: "",
      direction: "left",
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
        Understanding ADHD
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

export default UnderstandADHD;
