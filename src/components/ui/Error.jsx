import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Error = ({ 
  message = "Something went wrong. Please try again.", 
  onRetry,
  className = "" 
}) => {
  return (
    <div className={`text-center py-16 ${className}`}>
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <ApperIcon 
            name="AlertTriangle" 
            className="h-16 w-16 text-error mx-auto mb-4" 
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Oops! Something went wrong
          </h3>
          <p className="text-gray-600">
            {message}
          </p>
        </div>
        
        {onRetry && (
          <Button
            onClick={onRetry}
            variant="primary"
            className="inline-flex items-center gap-2"
          >
            <ApperIcon name="RefreshCw" className="h-4 w-4" />
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
};

export default Error;