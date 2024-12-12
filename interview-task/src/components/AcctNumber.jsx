import React, { useState, useRef, useEffect } from "react";
import { useForm } from "./FormContext"; // Ensure this provides formData and updateField

export default function AcctNumber() {
  const [accountNumber, setAccountNumber] = useState(new Array(10).fill(""));
  const inputRefs = useRef([]);
  const { updateField, formData } = useForm();

  // Handle input changes and state updates
  const handleInputChange = (index, value) => {
    const newAccountNumber = [...accountNumber];
    newAccountNumber[index] = value.replace(/[^0-9]/g, ""); // Allow only numeric values
    setAccountNumber(newAccountNumber);

    // Focus the next input if current reaches max length
    if (value.length === 1 && index < accountNumber.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Effect to update the form data, but avoid infinite loops
  useEffect(() => {
    const combinedAccountNumber = accountNumber.join("");

    // Update only if the account number has changed
    if (formData["Specimen Account Number"] !== combinedAccountNumber) {
      updateField("Specimen Account Number", combinedAccountNumber);
    }
  }, [accountNumber, updateField]); // Remove formData dependency

  return (
    <div className="flex flex-col items-center md:flex-row-reverse md:mb-3 md:gap-3">
      <table className="border-separate">
        <tbody>
          <tr className="flex">
            {accountNumber.map((value, index) => (
              <td key={index}>
                <input
                  ref={(el) => (inputRefs.current[index] = el)} // Store references to inputs
                  type="text"
                  className="border border-black outline-none h-8 w-8 text-center"
                  maxLength={1}
                  inputMode="numeric"
                  value={value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <span className="font-semibold">Account No.</span>
    </div>
  );
}
