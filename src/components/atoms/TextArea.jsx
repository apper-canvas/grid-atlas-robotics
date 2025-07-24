import React, { forwardRef } from "react";
import { cn } from "@/utils/cn";

const TextArea = forwardRef(({ 
  className = "",
  rows = 4,
  error = false,
  ...props 
}, ref) => {
  const baseClasses = "w-full px-4 py-3 border-2 rounded-lg bg-white text-gray-900 placeholder:text-gray-500 transition-all duration-200 focus:outline-none focus:ring-0 resize-y";
  
  const stateClasses = error 
    ? "border-red-300 focus:border-red-500" 
    : "border-gray-200 focus:border-primary-500 hover:border-gray-300";

  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(baseClasses, stateClasses, className)}
      {...props}
    />
  );
});

TextArea.displayName = "TextArea";

export default TextArea;