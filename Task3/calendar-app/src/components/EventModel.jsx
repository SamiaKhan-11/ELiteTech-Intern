import { useState } from 'react';

const EventModal = ({ selectedDate, onSave, onClose }) => {
  const [eventText, setEventText] = useState('');

  // Handle saving the event and closing the modal
  const handleSave = () => {
    if (eventText.trim()) {
      onSave(selectedDate, eventText);  // Save the event via onSave callback
      setEventText('');                  // Clear the event text field
      onClose();                   // Close the modal
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-center mb-4">Add Event on {selectedDate}</h2>

        {/* Event Text Area */}
        <textarea
          value={eventText}
          onChange={(e) => setEventText(e.target.value)}
          placeholder="Enter event details..."
          className="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-between">
          {/* Save Button */}
          <button 
            onClick={handleSave} 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Save Event
          </button>

          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
