import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Empty = ({ 
  title = "No data available",
  description = "There's nothing to show here yet.",
  actionText = "Get Started",
  onAction,
  icon = "Database",
  className = ""
}) => {
  return (
    <div className={`text-center py-16 ${className}`}>
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <ApperIcon 
            name={icon} 
            className="h-16 w-16 text-gray-400 mx-auto mb-4" 
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600">
            {description}
          </p>
        </div>
        
        {onAction && actionText && (
          <Button
            onClick={onAction}
            variant="primary"
            className="inline-flex items-center gap-2"
          >
            <ApperIcon name="Plus" className="h-4 w-4" />
            {actionText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Empty;