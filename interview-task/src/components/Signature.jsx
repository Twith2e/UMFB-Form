import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "./FormContext";

function Signature({ width, text, name, imgName }) {
  const [imagePreview, setImagePreview] = useState(null); // For storing the image preview
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const { formData, handleImageUpload } = useForm(); // Use handleImageUpload from context

  const handleChange = (date) => {
    updateField(name, date);
  };

  const handleImageChange = (e) => {
    handleImageUpload(e); // Use handleImageUpload to manage file input
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClearAndClose = () => {
    setImagePreview(null); // Clear the image preview
    setIsModalOpen(false); // Close the modal
  };

  const openModal = () => {
    if (imagePreview) {
      setIsModalOpen(true); // Open modal only if there is an image preview
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        {/* Label for file input with Image preview */}
        <label
          htmlFor={imgName} // Use imgName for the input id
          className="flex flex-col items-center cursor-pointer"
        >
          <div
            className="w-32 h-32 mb-2 border border-gray-300 flex items-center justify-center" // Fixed size for the image container
            style={{
              backgroundColor: imagePreview ? "transparent" : "#f0f0f0",
            }} // Light background when no image
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Image Preview"
                className="w-full h-full object-cover cursor-pointer"
                onClick={openModal} // Open modal when clicked
              />
            ) : (
              <span className="text-gray-500">Upload Signature</span> // Text when no image is selected
            )}
          </div>
          {/* Hidden file input moved inside the label for better UX */}
          <input
            id={imgName} // Use imgName for the input id
            accept="image/*"
            type="file"
            className="hidden"
            onChange={handleImageChange} // Handle image change
          />
        </label>

        {/* Date Picker */}
        <DatePicker
          selected={formData[name] || ""}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg shadow-sm mt-4 focus:outline-none focus:ring-2 focus:ring-blue-200"
          placeholderText="Select a date"
          name={name}
        />
      </div>

      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-2 rounded-lg shadow-lg max-w-sm">
            {" "}
            {/* Reduced modal size */}
            <img
              src={imagePreview}
              alt="Enlarged Preview"
              className="max-w-full max-h-60 object-contain" // Adjusted size for the image
            />
            <div className="flex justify-between mt-2">
              <button
                onClick={handleImageClearAndClose} // Clear image and close modal when clicked
                className="bg-red-500 text-white p-2 rounded"
              >
                Remove Image
              </button>
              <button
                onClick={() => setIsModalOpen(false)} // Close modal when clicked
                className="bg-gray-300 text-black p-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signature;
