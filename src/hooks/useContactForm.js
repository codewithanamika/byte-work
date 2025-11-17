import { useState } from "react";

export function useContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ 
      ...prev, 
      [e.target.name]: e.target.value 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("message sent");
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}
