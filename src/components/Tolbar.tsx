import React from "react";

function Tolbar() {
  return (
    <React.Fragment>
     <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left justify-center py-4 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0">
          <a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">Home</a>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Tolbar;