import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Required from "./RequiredFields";

const FormContext = createContext();

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [imageData, setImageData] = useState([]);
  const [imagePreview, setImagePreview] = useState({});
  const [errors, setErrors] = useState({});
  const [LGA, setLGA] = useState([]);
  const [formCount, setFormCount] = useState(() => {
    const savedCount = localStorage.getItem("formCount");
    return savedCount ? JSON.parse(savedCount) : [{ id: 1 }];
  });
  const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission

  const { allRequiredFields } = Required();

  // Function to validate email
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  useEffect(() => {
    localStorage.setItem("formCount", JSON.stringify(formCount));
  }, [formCount]);

  // Function to generate errors
  function newErrors(formData, allRequiredFields) {
    const errors = {};

    for (const field of allRequiredFields) {
      const value = formData[field];

      if (value === undefined || value === "") {
        errors[field] = "This field is required";
      } else if (
        field.toLowerCase().includes("email") &&
        !validateEmail(value)
      ) {
        errors[field] = "Invalid email address";
      }
    }

    return errors;
  }

  // UseEffect to update errors whenever formData changes, but only if form is submitted
  useEffect(() => {
    if (formSubmitted) {
      const errors = newErrors(formData, allRequiredFields);
      setErrors(errors); // Update errors state only if form is submitted
    }
  }, [formData, formSubmitted, allRequiredFields]); // Track form submission to trigger validation

  // Function to validate form and return if valid
  function validateForm(formData, unrequiredFields) {
    if (typeof formData !== "object" || Array.isArray(formData)) {
      console.error("formData must be an object.");
      return false;
    }

    if (!Array.isArray(unrequiredFields)) {
      console.error("unrequiredFields must be an array.");
      return false;
    }

    const filteredRequiredFields = allRequiredFields.filter(
      (field) => !unrequiredFields.includes(field)
    );

    const errors = newErrors(formData, filteredRequiredFields);

    setErrors(errors); // Ensure errors are always updated with the latest validation

    return Object.keys(errors).length === 0;
  }

  // useEffect to log errors after state change
  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.error("Validation failed. Errors:", errors);
    }
  }, [errors]);

  const loadLGA = async (state) => {
    try {
      const res = await axios.get(
        `https://nga-states-lga.onrender.com/?state=${state}`
      );

      const lgas = Array.isArray(res.data) ? res.data : [];
      setLGA(lgas);
    } catch (error) {
      console.error("Error fetching LGAs:", error);
      setLGA([]); // Ensure fallback
    }
  };

  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: value ? undefined : "This field is required",
    }));
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

  const handleSubmit = () => {
    setFormSubmitted(true); // Set formSubmitted to true when the submit button is clicked
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
        formCount,
        setFormCount,
        handleSubmit, // Expose handleSubmit to be used by the form submit button
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
