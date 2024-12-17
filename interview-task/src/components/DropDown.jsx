import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "./FormContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function DropDown({ stateName, LGAName }) {
  const [allStates, setAllStates] = useState([]);
  const [LGA, setLGA] = useState([]);
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
    loadLGA(e.target.value);
    updateField(stateName, e.target.value);
    updateField(LGAName, "");
  };

  const handleLGAChange = (e) => {
    updateField(LGAName, e.target.value);
  };

  return (
    <div className="row flex flex-col lg:flex-row lg:justify-between">
      <div className="flex flex-col col-12 col-lg-5 gap-2 relative">
        <label
          htmlFor="stateSelect"
          className="font-bold text-sm whitespace-nowrap"
        >
          State:
        </label>

        <select
          id="stateSelect"
          onChange={handleStateChange}
          value={formData[stateName] || ""}
          name={stateName}
          className="block w-full py-2 pl-3 pr-10 text-base border border-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-red-900"
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
        <ExpandMoreIcon
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            pointerEvents: "none",
          }}
        />
      </div>

      <div className="flex flex-col gap-2 col-12 col-lg-5 relative">
        <label
          htmlFor="LGASelect"
          className="font-bold text-sm whitespace-nowrap"
        >
          LGA:
        </label>
        <select
          id="LGASelect"
          onChange={handleLGAChange}
          value={formData[LGAName] || ""}
          className="block w-full py-2 pl-3 pr-10 text-base border border-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-red-900"
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
        <ExpandMoreIcon
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}
