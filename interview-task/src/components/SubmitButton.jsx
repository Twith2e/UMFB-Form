import { useForm } from "./FormContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SubmitButton() {
  const { formData, imageData, validateForm } = useForm();

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
      const response = await fetch("http://localhost:5000/email/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formData,
          imageData,
        }),
      });

      if (response.ok) {
        toast.success("Form Submitted");
      } else {
        const errorText = await response.text();
        toast.error("Error submitting form");
        console.error("Submission error:", errorText);
      }
    } catch (error) {
      toast.error("An error occurred while submitting");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Submit Form
      </button>
      <ToastContainer />
    </>
  );
}
