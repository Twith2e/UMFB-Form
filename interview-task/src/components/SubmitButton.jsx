export default function SubmitButton() {
  const handleSubmit = async () => {
    console.log("clicked");

    try {
      const response = await fetch("http://localhost:5000/email/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }), // Send context data to backend
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Email sent successfully!");
      } else {
        toast.error(`Failed to send email: ${result.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the email.");
    }
  };

  return <button onClick={handleSubmit}>Submit Form</button>;
}
