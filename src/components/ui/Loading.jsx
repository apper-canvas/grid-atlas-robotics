import React from "react";

const Loading = ({ className = "" }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="space-y-8">
        {/* Hero skeleton */}
        <div className="text-center space-y-4">
          <div className="h-16 bg-gray-200 rounded-lg mx-auto max-w-4xl"></div>
          <div className="h-6 bg-gray-200 rounded mx-auto max-w-2xl"></div>
          <div className="flex justify-center gap-4 mt-8">
            <div className="h-12 w-32 bg-gray-200 rounded-lg"></div>
            <div className="h-12 w-32 bg-gray-200 rounded-lg"></div>
          </div>
        </div>

        {/* Features skeleton */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center space-y-4">
              <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto"></div>
              <div className="h-6 bg-gray-200 rounded mx-auto max-w-[200px]"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>

        {/* About skeleton */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded max-w-[300px]"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
            </div>
            <div className="h-12 w-40 bg-gray-200 rounded-lg mt-6"></div>
          </div>
          <div className="h-80 bg-gray-200 rounded-lg"></div>
        </div>

        {/* Testimonials skeleton */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {[1, 2].map((i) => (
            <div key={i} className="p-6 border rounded-lg space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              <div className="flex items-center gap-4 mt-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                  <div className="h-3 bg-gray-200 rounded w-32"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;