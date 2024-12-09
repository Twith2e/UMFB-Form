import { createContext, useContext, useState } from "react";
import axios from "axios";

const FormContext = createContext();

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [imageData, setImageData] = useState([]);
  const [imagePreview, setImagePreview] = useState({});
  const [errors, setErrors] = useState({});
  const [LGA, setLGA] = useState([]);

  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: value ? undefined : "This field is required",
    }));
  };

  function validateForm(formData, unrequiredFields) {
    console.log("Form Data:", formData);
    console.log("Unrequired Fields:", unrequiredFields);

    // Ensure formData is an object and unrequiredFields is an array
    if (typeof formData !== "object" || Array.isArray(formData)) {
      console.error("formData must be an object.");
      return false;
    }

    if (!Array.isArray(unrequiredFields)) {
      console.error("unrequiredFields must be an array.");
      return false;
    }

    // Check if formData is empty (i.e., no fields at all)
    if (Object.keys(formData).length === 0) {
      console.error("Form is empty. Validation failed.");
      return false; // Return false if formData is empty
    }

    // Iterate over all the required fields (those not in the unrequiredFields array)
    // Assuming you have a list of all field names (required and optional) for your form
    const requiredFields = ["name", "email", "message"]; // Example, replace with your actual required fields

    for (const field of requiredFields) {
      // If the field is required and it's not in the unrequiredFields list
      if (!unrequiredFields.includes(field)) {
        const value = formData[field];

        // Check if the value is empty or undefined
        if (value === undefined || value === "") {
          console.error(
            `Validation failed: ${field} is required and is empty.`
          );
          return false; // Form is invalid if any required field is empty
        }
      }
    }

    // If we reach here, all required fields are valid
    return true;
  }

  // const exampleData = {
  //   name: "John Doe",
  //   email: "", // Empty email, which should fail validation if it's required
  //   message: "Hello world!",
  // };

  // for (const [key, value] of Object.entries(exampleData)) {
  //   if (!value || value.trim() === "") {
  //     console.error(`Validation failed: ${key} is required and is empty.`);
  //     return false; // Return false if any required field is empty
  //   }
  // }

  const loadLGA = async (state) => {
    try {
      const res = await axios.get(
        `https://nga-states-lga.onrender.com/?state=${state}`
      );

      // Ensure the response is an array, even if the data is not as expected
      const lgas = Array.isArray(res.data) ? res.data : [];

      // Update the LGA state with a validated array
      setLGA(lgas);
    } catch (error) {
      console.error("Error fetching LGAs:", error);

      // In case of an error, set LGA to an empty array to prevent mapping errors
      setLGA([]);
    }
  };

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
        loadLGA,
        LGA,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
