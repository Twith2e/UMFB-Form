import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "./FormContext";

export default function DropDown() {
  const [allStates, setAllStates] = useState([]);
  const [LGA, setLGA] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedLGA, setSelectedLGA] = useState("");
  const { formData, updateField } = useForm();

  const fetchStates = async () => {
    const res = await axios.get("https://nga-states-lga.onrender.com/fetch");
    setAllStates(res.data);
  };

  const loadLGA = async (state) => {
    const res = await axios.get(
      `https://nga-states-lga.onrender.com/?state=${state}`
    );
    setLGA(res.data);
  };

  useEffect(() => {
    fetchStates();
  }, []);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    loadLGA(e.target.value);
    updateField("Proprietor State of Origin", e.target.value);
    setSelectedLGA(""); // Reset LGA selection on state change
  };

  const handleLGAChange = (e) => {
    setSelectedLGA(e.target.value);
    updateField("Proprietor LGA", e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        {/* State Dropdown */}
        <label
          htmlFor="stateSelect"
          className="font-semibold text-lg text-gray-700"
        >
          Select State:
        </label>
        <select
          id="stateSelect"
          onChange={handleStateChange}
          value={selectedState}
          className="block w-full py-2 pl-3 pr-10 text-base border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-red-900"
        >
          <option value="" disabled>
            Select a state
          </option>
          {allStates?.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        {/* LGA Dropdown */}
        <label
          htmlFor="LGASelect"
          className="font-semibold text-lg text-gray-700"
        >
          Select LGA:
        </label>
        <select
          id="LGASelect"
          onChange={handleLGAChange}
          value={selectedLGA}
          className="block w-full py-2 pl-3 pr-10 text-base border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-red-900"
        >
          <option value="" disabled>
            Select an LGA
          </option>
          {LGA?.map((lga, index) => (
            <option key={index} value={lga}>
              {lga}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
