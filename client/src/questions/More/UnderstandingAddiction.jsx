import React, { Fragment, useState } from "react";

const UnderstandAddiction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal open/close
  const [selectedEvent, setSelectedEvent] = useState(null); // State to track which event's "Read More" was clicked

  const events = [
    {
      number: 1,
      heading: "What is Addiction?",
      subHeading:
        "Addiction is a complex condition characterized by compulsive drug or substance use, despite harmful consequences. It typically involves a strong and often uncontrollable urge to consume substances or engage in behaviors, even when they are detrimental to one's physical health, mental well-being, relationships, and overall functioning.",
      description: `
      <div class="text-left text-lg">
      <strong>Addiction is a medical condition</strong>
      <p>Sometimes people talk about addiction in a way that makes it seem like a moral failure—like people who struggle with addiction are “selfish” or “bad.” But addiction is actually a disorder of the brain. Addiction “hijacks” the reward pathways of your brain, making it physically more difficult to make healthy choices about your substance use. This means that addiction is a medical condition, just like heart disease or diabetes. It’s also a type of mental illness. </p>

    <br/>
    <strong>Key Signs to recognize addiction</strong>
    <ul class="list-disc list-inside">
    <li>You can’t stop using drugs or alcohol.</li>
    <li>You experience intense cravings.</li>
    <li>You have trouble managing your emotions.</li>
    <li>Your drug or alcohol use interferes with your daily life or your relationships.</li>
    <li>You have less and less awareness of the negative consequences.</li>
    </ul>
    <br/>

    <strong>Is it just drugs and alcohol?</strong>
    <p>The current definitions of “addiction” generally refer only to drugs and alcohol. But more and more mental health professionals are recognizing that anything that stimulates the reward pathways in the brain can be addictive. These “behavioral addictions” might include sex, gambling, food, and even spending too much time on the Internet. Whatever the behavior, the pattern is the same: you can’t seem to stop on your own, the behavior interferes with your life and relationships, and you lose your awareness of the negative consequences.</p>
      </div>`,
      imageUrl:
        "https://images.unsplash.com/photo-1592806088932-05058af0ad8d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVwcmVzc2lvbnxlbnwwfHwwfHx8MA%3D%3D",
      direction: "right",
    },
    {
      number: 2,
      heading: "Can you be addicted to a behavior?",
      subHeading:
        "Traditionally, the term “addiction” has been applied to people whose drug or alcohol use has become a serious problem. But today, many mental health specialists agree that behaviors can be addictive, too",
      description: `
     <div class="text-left text-lg">
     <p>Traditionally, the term “addiction” has been applied to people whose drug or alcohol use has become a serious problem. But today, many mental health specialists agree that behaviors can be addictive, too. Treatments have been developed for sex addiction, gambling addiction, food addiction, and many others.</p>
     <br/>
     <p>People also throw the word “addiction” around a lot in everyday conversation: “I’m so addicted to chocolate!” It can make it hard to understand where to draw the line between being addicted to something and just doing it a lot. Especially since most of these behaviors are fine in moderation—some are even healthy (like sex) or even necessary (like food)! So how can you tell when your behavior is becoming a problem?</p> <br/>
     <strong>Key Signs to recognize addiction</strong>
     <ul class="list-disc list-inside">
     <li>You can’t stop using drugs or alcohol.</li>
     <li>You experience intense cravings.</li>
     <li>You have trouble managing your emotions.</li>
     <li>Your drug or alcohol use interferes with your daily life or your relationships.</li>
     <li>You have less and less awareness of the negative consequences.</li>
     </ul>
     <br/>

     <strong>What kind of things can be addictive?</strong> <br/>
     <p>Addiction is a mental illness that involves the reward pathways of your brain. [2] Anything that activates these reward pathways can become addictive. Some things, like sex and gambling, are more likely to do this than others. But really, pretty much anything that feels good can become addictive. It depends less on the behavior itself, and more on how that behavior makes you feel.</p>
     
     </div>
      `,
      imageUrl: "",
      direction: "left",
    },
    {
      number: 3,
      heading: "If I drink a lot, does that make me an alcoholic?",
      subHeading:
        "No one understands your body and your experiences better than you. What drinking “a lot” looks like to you may not be the same for someone else and vice versa. Instead of thinking about if you’re drinking a lot—think about whether or not you have control over your drinking and how much drinking causes problems in your life.",
      description: `
      <div class="text-left text-lg">
      <p>No one understands your body and your experiences better than you. What drinking “a lot” looks like to you may not be the same for someone else and vice versa. Instead of thinking about if you’re drinking a lot—think about whether or not you have control over your drinking and how much drinking causes problems in your life.</p> <br/>
      <p>Determining whether you have a problem with alcohol is a deeply personal experience that requires self-reflection, self-love, and acceptance. There are also factors to take into consideration like when and why you drink.</p> <br/>

      <strong>How much is "a lot"?</strong>
      <ul class="list-disc list-inside">
      <li>Moderate drinking is up to one drink per day for women or up to two drinks per day for men.</li>
      <li>Anything more than 4 drinks in a single day for women, or 5 drinks in a day for men, is considered “high-risk” drinking. If you drink that much in the space of 2 hours, that’s considered binge drinking.</li>
      <li> Keep in mind that a “drink” refers to a can of beer, a glass of wine, or a shot of liquor.</li>
      <li>Many cocktails contain 2 or 3 shots. For example, a single Long Island Iced Tea can count as 4-5 drinks!</li>
      </ul>
      <br/>

      <strong>Should I cut back?</strong>
      <p>Trying to cut back and seeing whether or not you’re able to is a good way of finding out if you have a problem. Whether or not to quit drinking entirely is a question that only you can answer.

      Think about the pros and cons of your drinking. Drinking might make it easier to socialize with new people and deal with stress. But it also may lead to conflict with others, making poor decisions, long-term health problems— or keeps you from being “present” with those you care about.</p>

      
      
      </div>
      `,
      imageUrl: "",
      direction: "right",
    },
    {
      number: 4,
      heading: "Treating Internet Addiction",
      subHeading:
        "The Internet is a wild and wonderful place which has forever changed the way we live, learn, and work – but when a person can’t find a balance between their time online and their time offline, it can mean problems for their mental health.",
      description: `
      <div class="text-left text-lg">
      <p>The Internet is a wild and wonderful place which has forever changed the way we live, learn, and work – but when a person can’t find a balance between their time online and their time offline, it can mean problems for their mental health.
<br/>
      For some people, going online becomes an addiction.
      <br/>
      First, you need to know that there is no one definition for internet addiction.  However, it is generally agreed that people who are addicted to the Internet have trouble filling personal and professional obligations because of their online activities, and that their use of the Internet causes strain on relationships with family and friends. People who are addicted to the Internet also often experience negative emotions or withdrawal symptoms when their Internet access is restricted.</p> <br/>

      <strong>Internet addiction can be treated in the following ways:</strong>
      <ul class="list-disc list-inside">
      <li>Talk therapy is almost always incorporated into the treatment of Internet addiction. Cognitive-behavioral therapy (CBT) and group therapy are common.</li>
      <li>Medication may be used to help manage symptoms of underlying mental illness and control intrusive thoughts about going online.</li>
      <li>Exercise may be incorporated into Internet addiction treatment to ease the effects of reduced dopamine in the brain resulting from restricted Internet use.</li>
      <li>Internet addiction treatment aims to create boundaries and balance around Internet use rather than eliminating it entirely. However, if there is a certain app, game, or site that seems to be the focus of the addiction, stopping its use may be part of treatment.</li>
      </ul>
      </div>
      
      `,
      imageUrl: "",
      direction: "left",
    },
    {
      number: 5,
      heading: "Why can’t I stop using drugs or alcohol?",
      subHeading:
        "The truth is that stopping is difficult. While using drugs or alcohol might begin as a choice, addiction is not—it is a condition that takes a lot of time to overcome, heal, and recover from. It takes some people many times to quit for good, but they do it. And you can do it too.",
      description: `
      <div class="text-left text-lg">
      <p>The truth is that stopping is difficult. While using drugs or alcohol might begin as a choice, addiction is not—it is a condition that takes a lot of time to overcome, heal, and recover from. It takes some people many times to quit for good, but they do it. And you can do it too.</p>

<strong>Why can’t I stop?</strong>
<p>Things like our minds and bodies, friends, trauma, and our environments may all play a role in why it’s hard to stop using.Using may be a habit that’s been developed over time to help numb the pain or feelings we’re experiencing when we don’t want to feel them. If we’ve lived through trauma, abuse, or neglect, drugs or alcohol may be the thing that helps us cope with these experiences. And we may not be ready to address the hurt.</p>
<h3>Our Brains</h3>
<p>Biology also impacts addiction because we self-medicate through addictions.  We use a substance because it feels good and does something for our brains. Your drug of choice is often connected to what you want to feel—happy, relaxed, numb, energized, etc.</p>

<h3>Peer pressure from friends and family</h3>
<p>Peer pressure is when our peers—or people who are around our age or who have similar experiences to our own—influence our thoughts, actions, and behaviors. Good peer pressure is supportive and positive. It can help you discover and develop new skills, interests, and hobbies. Good pressure can also help you create a positive support system of people who encourage and help you when you’re trying to stop using drugs or alcohol. While bad peer pressure is negative. It can make you feel pressured to do things that you wouldn’t want to normally do or that are uncomfortable for you.</p>
<strong>What can I do to stop?</strong>
      <ul class="list-disc list-inside">
      <li>Think about the pros and cons.</li>
      <li>Be attentive to triggers and stress.</li>
      <li>Replace the habit.</li>
      <li>Talk to someone.</li>
      <li>Place yourself in a healthier environment.</li>
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
        Understanding Addiction
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

export default UnderstandAddiction;
