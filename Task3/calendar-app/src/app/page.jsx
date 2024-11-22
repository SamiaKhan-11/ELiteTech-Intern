'use client';
import Calendar from "@/components/Calender";
import EventModal from "@/components/EventModel";
import { useEffect, useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});
  const [isClient, setIsClient] = useState(false);

  // Handle saving an event
  const handleSaveEvent = (date, eventText) => {
    const newEvents = { ...events };
    if (newEvents[date]) {
      newEvents[date].push(eventText); // Add new event to existing events
    } else {
      newEvents[date] = [eventText]; // Create new array if no events exist for this date
    }
    setEvents(newEvents); // Update events in state
    if (isClient) {
      localStorage.setItem('events', JSON.stringify(newEvents)); // Save to localStorage
    }
    console.log(newEvents); // Log the updated events for debugging
  };

  // Handle when a date is clicked
  const handleDateClick = (day) => {
    setSelectedDate(day); // Set the clicked date
    setShowModal(true); // Show the event modal
  };

  // Close the event modal
  const closeModal = () => {
    setShowModal(false);
  };


  // Load saved events from localStorage
  useEffect(() => {
    setIsClient(true); // Mark the component as rendered on the client

    // Load events from localStorage if available, only run after client-side render
    const savedEvents = localStorage.getItem('events');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents)); // Load saved events into state
    }
  }, []);

  
  if (!isClient) {
    return <div>Loading...</div>; // Show a loading state while waiting for the client render
  }

  return (
    <div className="container mx-auto p-4 bg-gray-300 h-screen max-w-full">
     
      
      {/* Pass events to Calendar component */}
      <Calendar events={events} onDateClick={handleDateClick} />

    </div>
  );
}
