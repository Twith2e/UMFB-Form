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
    // Collect all the input elements with the 'required' attribute
    const inputElements = document.querySelectorAll("input[required][name]");

    // Validate all required fields are filled
    const isValid = Array.from(inputElements).every((input) => {
      const fieldName = input.name;
      const value = formData[fieldName];

      // Check if the field is required and if it's not empty
      return typeof value === "string"
        ? value.trim() !== ""
        : value !== undefined && value !== null;
    });

    if (!isValid) {
      // Debug missing required fields
      const missingFields = Array.from(inputElements)
        .filter((input) => {
          const fieldName = input.name;
          const value = formData[fieldName];
          return !(typeof value === "string"
            ? value.trim() !== ""
            : value !== undefined && value !== null);
        })
        .map((input) => input.name); // Collect missing field names

      console.error("Missing required fields:", missingFields);
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
