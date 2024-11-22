import React, { useState, useEffect } from 'react';
import EventModal from './EventModel';


const Calendar = () => {
  const [events, setEvents] = useState({});
  const [isClient, setIsClient] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const borderColors = ['#ed8080', '#74d5f2', '#eb65cb', '#82ed72', '#b272ed'];

  useEffect(() => {
    setIsClient(true);
    const savedEvents = localStorage.getItem('events');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  const handleSaveEvent = (date, eventText) => {
    const newEvents = { ...events };
    if (newEvents[date]) {
      newEvents[date].push(eventText);
    } else {
      newEvents[date] = [eventText];
    }
    setEvents(newEvents);

    if (isClient) {
      localStorage.setItem('events', JSON.stringify(newEvents));
    }
    setShowInput(false);
    console.log('Updated Events:', newEvents);

  };

  const daysInMonth = new Date(2024, 12, 0).getDate();

  if (!isClient) {
    return <div>Loading...</div>;
  }

  const handleDateClick = (dayStr) => {
    setSelectedDate(dayStr);
    setShowInput(true);
  };

  return (
    <div className="container bg-white mx-auto mt-10 shadow-lg shadow-black">
      <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-tr from-blue-400 to-purple-600 w-fit mx-auto p-3 rounded-lg">My Calendar</h1>
      <div className='grid grid-cols-2'>
        <div className=''> <h1 className='text-center font-bold text-4xl'>December</h1>  </div>
        <div className=''> <h1 className='text-center font-bold text-4xl'>2024</h1>  </div>
      </div>
      <div className='grid grid-cols-7 mt-4 -mb-4'>
        <span className='text-center font-bold text-lg'>Monday</span>
        <span className='text-center font-bold text-lg'>Tuesday</span>
        <span className='text-center font-bold text-lg'>Wednesday</span>
        <span className='text-center font-bold text-lg'>Thursday</span>
        <span className='text-center font-bold text-lg'>Friday</span>
        <span className='text-center font-bold text-lg'>Saturday</span>
        <span className='text-center font-bold text-lg'>Sunday</span>
      </div>
      <div className="grid grid-cols-7 gap-10 p-10">
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day, index) => {
          const dayStr = `2024-12-${day.toString().padStart(2, '0')}`;
          const borderColor = borderColors[index % borderColors.length];
          return (
            <div
              key={day}
              className="relative p-4 bg-white border rounded-lg cursor-pointer hover:bg-blue-100"
              onClick={() => handleDateClick(dayStr)}
              style={{
                borderBottom: `4px solid ${borderColor}`,
                transition: 'background-color 0.3s ease',
              }}
            >
              <div className="text-center font-bold">{day}</div>

              {events[dayStr] && (
                <div className="absolute bottom-2 left-2 right-2 text-xs text-gray-600">
                  {events[dayStr].slice(0, 2).map((event, index) => (
                    <div key={index} className="truncate">{event}</div>
                  ))}
                </div>
              )}

              {/* Hover effect */}
              <style jsx>{`
                .relative:hover {
                  background-color: ${borderColor}; /* Set background to match border color on hover */
                  color: white; /* Change text color on hover */
                }
              `}</style>
            </div>
          );
        })}
      </div>

      {showInput && (
        <EventModal
          selectedDate={selectedDate}
          onSave={handleSaveEvent}
          onClose={() => setShowInput(false)}
        />
      )}
    </div>
  );
};

export default Calendar;
