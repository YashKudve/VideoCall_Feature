import React from 'react';

const TimelineItem = ({ date, event }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="text-gray-600 font-medium">{date}</div>
      </div>
      <div className="bg-gray-200 p-4 rounded-md">
        <div className="text-gray-800">{event}</div>
      </div>
    </div>
  );
};

const Timeline = ({ items }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {items.map((item, index) => (
          <TimelineItem key={index} date={item.date} event={item.event} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const timelineItems = [
    { date: '2022-01-01', event: 'Event 1' },
    { date: '2022-03-15', event: 'Event 2' },
    { date: '2022-07-20', event: 'Event 3' },
    { date: '2022-11-10', event: 'Event 4' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-8">Timeline</h1>
      <Timeline items={timelineItems} />
    </div>
  );
};

export default App;
