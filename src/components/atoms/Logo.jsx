import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <div className="h-10 w-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center shadow-lg">
          <ApperIcon name="Bot" className="h-6 w-6 text-white" />
        </div>
        <div className="absolute -top-1 -right-1 h-3 w-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-sm animate-pulse"></div>
      </div>
      <div className="font-display font-bold text-xl text-gray-900">
        Atlas
      </div>
    </div>
  );
};

export default Logo;