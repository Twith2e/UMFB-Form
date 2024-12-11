import { useState } from "react";
import { useForm } from "./FormContext";
import { toast, ToastContainer } from "react-toastify";

export default function Modal({ closeModal }) {
  const [inputValue, setValue] = useState(null);
  const { setCount } = useForm();
  const handleSubmit = () => {
    if (inputValue !== null || "") {
      setCount(inputValue);
      sessionStorage.setItem("modalShown", "true");
      closeModal(false);
    } else {
      toast.error("Please fill the input");
    }
  };

  const handleChange = (e) => {
    sessionStorage.setItem("formCount", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div
      className="absolute left-0 top-0 w-full h-full z-50 flex items-center justify-center"
      style={{ height: "100vh", background: "rgba(0, 0, 0, 0.98)" }}
    >
      <ToastContainer />
      <div className="bg-white py-3 px-6 rounded-lg shadow-lg max-w-sm w-full">
        <h3 className="text-center mb-4">How many signatories do you need?</h3>
        <input
          type="number"
          min={1}
          onKeyDown={(e) => {
            if (["e", "E", "+", "-", "0"].includes(e.key)) {
              e.preventDefault();
            }
          }}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        <button
          className="w-full bg-red-900 text-white p-2 rounded"
          onClick={handleSubmit}
        >
          Pick
        </button>
      </div>
    </div>
  );
}
