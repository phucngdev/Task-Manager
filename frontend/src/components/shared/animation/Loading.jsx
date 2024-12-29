import React from "react";

const Loading = () => {
  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0">
        <div className="flex justify-center items-center h-screen w-screen bg-gray-500 opacity-75">
          <div className="animate-spin size-20 rounded-full border-4 border-gray-600 border-e-0"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
