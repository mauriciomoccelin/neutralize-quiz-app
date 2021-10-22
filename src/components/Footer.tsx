import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <footer className="text-gray-600 body-font">
        <div className="bg-gray-100">
          <div className="container justify-center mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2021 Copyright:
              <a href="/" className="text-gray-600 ml-1" target="_blank">Tailwind Elements</a>
            </p>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer;