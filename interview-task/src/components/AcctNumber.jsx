import React, { useState, useRef, useEffect } from "react";
import { useForm } from "./FormContext"; // Make sure useForm is providing formData

export default function AcctNumber() {
  const [accountNumber, setAccountNumber] = useState(new Array(10).fill(""));
  const inputRefs = useRef([]);
  const { updateField, formData } = useForm(); // Ensure formData is being destructured here

  // Function to handle input changes and update the state
  const handleInputChange = (index, value) => {
    const newAccountNumber = [...accountNumber];
    newAccountNumber[index] = value.replace(/[^0-9]/g, ""); // Ensure only numeric values
    setAccountNumber(newAccountNumber);

    // Automatically focus the next input if the current input reaches maxlength
    if (value.length === 1 && index < accountNumber.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Effect to update the form data whenever accountNumber changes
  useEffect(() => {
    const combinedAccountNumber = accountNumber.join("");

    // Only update if the combined account number is different from formData.accountNumber
    if (combinedAccountNumber !== formData.accountNumber) {
      updateField("accountNumber", combinedAccountNumber); // Update only when meaningful
    }
  }, [accountNumber, updateField, formData.accountNumber]); // Ensure formData is accessed correctly

  return (
    <div className="flex flex-col items-center">
      <table className="border-separate">
        <tbody>
          <tr className="flex">
            {accountNumber.map((value, index) => (
              <td key={index}>
                <input
                  ref={(el) => (inputRefs.current[index] = el)} // Store reference to each input
                  type="text"
                  className="border border-black outline-none h-8 w-8 text-center"
                  maxLength={1}
                  inputMode="numeric"
                  value={value}
                  onInput={(e) => handleInputChange(index, e.target.value)}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <span>Account No.</span>
    </div>
  );
}
