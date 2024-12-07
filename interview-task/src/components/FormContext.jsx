import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [imageData, setImageData] = useState([]);
  const [imagePreview, setImagePreview] = useState({});
  const [errors, setErrors] = useState({});

  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: value ? undefined : "This field is required",
    }));
  };

  function validateForm() {
    // Collect all the names of the input fields dynamically
    const inputElements = document.querySelectorAll("input[name]");
    const requiredFields = Array.from(inputElements).map((input) => input.name);

    // Validate all required fields are filled
    const isValid = requiredFields.every((field) => {
      const value = formData[field];
      // Ensure value is a string before calling .trim() or just check if it's truthy
      return typeof value === "string"
        ? value.trim() !== ""
        : value !== undefined && value !== null;
    });

    if (!isValid) {
      // Debug missing fields
      const missingFields = requiredFields.filter(
        (field) =>
          !(typeof formData[field] === "string"
            ? formData[field].trim() !== ""
            : formData[field] !== undefined && formData[field] !== null)
      );
      console.error("Missing fields:", missingFields);
    }

    console.log("Form Data:", formData);
    console.log("Validation status:", isValid);
    return isValid;
  }

  const updateImage = (image) => {
    setImageData((prev) => [...prev, image]); // Append to the array
  };

  const retainImage = (name, value) => {
    setImagePreview((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (event, name) => {
    const files = event.target.files;

    const promises = Array.from(files).map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve({
            base64: reader.result.split(",")[1], // Extract Base64 string
            mimeType: file.type, // Get MIME type
            name,
          });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises)
      .then((uploadedImages) => {
        console.log(uploadedImages);
        setImageData((prev) => [...prev, ...uploadedImages]); // Merge new images
      })
      .catch((err) => console.error("Error uploading images:", err));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateField,
        imageData,
        updateImage,
        handleImageUpload,
        retainImage,
        imagePreview,
        errors,
        validateForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
