import React from "react";
import Input from "@/components/atoms/Input";
import TextArea from "@/components/atoms/TextArea";

const FormField = ({ 
  label, 
  type = "text", 
  error, 
  required = false,
  className = "",
  ...props 
}) => {
  const InputComponent = type === "textarea" ? TextArea : Input;
  
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <InputComponent
        type={type}
        error={!!error}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default FormField;