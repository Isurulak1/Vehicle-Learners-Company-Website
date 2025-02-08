import React, { useState } from "react";

const InstructorDashboard = () => {
  const [selectedLearner, setSelectedLearner] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [schedules, setSchedules] = useState([
    { date: "", time: "", location: "" },
  ]);

  // Predefined learners (Replace with API call)
  const registeredLearners = ["John Doe", "Jane Smith", "Alex Johnson"];

  // Predefined vehicle types
  const vehicleTypes = ["Van", "Wheel Bike", "Bus", "Prime Mover"];

  // Function to handle schedule changes
  const handleScheduleChange = (index, field, value) => {
    const newSchedules = [...schedules];
    newSchedules[index][field] = value;
    setSchedules(newSchedules);
  };

  // Function to add a new schedule entry
  const addSchedule = () => {
    setSchedules([...schedules, { date: "", time: "", location: "" }]);
  };

  // Handle form submission
  const handleAssign = (e) => {
    e.preventDefault();
    console.log("Assigned Data", {
      learner: selectedLearner,
      vehicleType,
      vehicleNumber,
      schedules,
    });

    // Add API call here to store assigned data
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Assign Vehicle & Schedule</h2>
      <form onSubmit={handleAssign} className="flex flex-col space-y-4">
        
        {/* Select Learner */}
        <label className="font-medium">Select Learner</label>
        <select
          className="border p-2"
          value={selectedLearner}
          onChange={(e) => setSelectedLearner(e.target.value)}
          required
        >
          <option value="">-- Select a Learner --</option>
          {registeredLearners.map((learner, index) => (
            <option key={index} value={learner}>
              {learner}
            </option>
          ))}
        </select>

        {/* Select Vehicle Type */}
        <label className="font-medium">Vehicle Type</label>
        <select
          className="border p-2"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
          required
        >
          <option value="">-- Select Vehicle Type --</option>
          {vehicleTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        {/* Enter Vehicle Number */}
        <label className="font-medium">Vehicle Number</label>
        <input
          type="text"
          placeholder="Enter Vehicle Number"
          className="border p-2"
          onChange={(e) => setVehicleNumber(e.target.value)}
          required
        />

        {/* Multiple Date, Time & Location Fields */}
        <label className="font-medium">Schedule</label>
        {schedules.map((schedule, index) => (
          <div key={index} className="border p-3 rounded bg-gray-100 space-y-2">
            <input
              type="date"
              className="border p-2 w-full"
              value={schedule.date}
              onChange={(e) => handleScheduleChange(index, "date", e.target.value)}
              required
            />
            <input
              type="time"
              className="border p-2 w-full"
              value={schedule.time}
              onChange={(e) => handleScheduleChange(index, "time", e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Enter Training Location"
              className="border p-2 w-full"
              value={schedule.location}
              onChange={(e) => handleScheduleChange(index, "location", e.target.value)}
              required
            />
          </div>
        ))}

        {/* Button to Add More Dates */}
        <button
          type="button"
          className="bg-green-500 text-white p-2 rounded"
          onClick={addSchedule}
        >
          + Add More Dates
        </button>

        {/* Submit Button */}
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Assign Schedule
        </button>
      </form>
    </div>
  );
};

export default InstructorDashboard;
