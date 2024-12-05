import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [imageData, setImageData] = useState({});

  const updateField = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updateImage = (name, value) => {
    setImageData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = {};
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      newImages[file.name] = URL.createObjectURL(file);
    }
    setImageData((prev) => ({ ...prev, ...newImages }));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateField,
        imageData,
        updateImage,
        handleImageUpload,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
