import { useForm } from "./FormContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";

export default function SubmitButton() {
  const { formData, imageData, validateForm } = useForm();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default behavior
    console.log("Form Data:", formData);
    console.log("Image Data:", imageData);

    const isFormValid = validateForm();
    console.log("Is form valid:", isFormValid); // Debug validation result

    if (!isFormValid) {
      toast.error("Fill all inputs");
      return; // Prevent submission
    }

    try {
      setIsPending(true);
      const response = await fetch("http://localhost:5000/email/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formData,
          imageData,
        }),
      });

      if (response.status === 200) {
        toast.success("Form Submitted");
      } else {
        setError("Error Submitting");
        toast.error(error);
        console.error("Submission error:", errorText);
      }
    } catch (error) {
      toast.error("An error occurred while submitting");
      console.error("Error:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded"
        disabled={isPending ? true : false}
      >
        Submit Form
      </button>
      <ToastContainer />
    </>
  );
}
