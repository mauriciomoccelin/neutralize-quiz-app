import React from "react";

function Loading() {
  return (
    <React.Fragment>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    </React.Fragment>
  );
}

export default Loading;