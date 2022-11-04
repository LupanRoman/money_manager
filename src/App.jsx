import React from 'react';

const App = () => {
  const openMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.links');

    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  return (
    <>
      <div>
        <div className="navBar bg-slate-500 h-16">
          <nav className="flex justify-between h-16 items-center ">
            <h4 className="ml-6 text-lg font-bold">Money Manager</h4>
            <div
              onClick={openMenu}
              className="hamburger block cursor-pointer sm:hidden"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <div className="links fixed -left-full top-16 gap-0 flex-col bg-slate-500 w-full text-center sm:left-0 sm:bg-transparent sm:top-0">
              <ul className="sm:flex sm:h-16 sm:justify-end sm:items-center sm:gap-6">
                <li className="mt-2 sm:mt-0 font-medium text-lg">Features</li>
                <li className="mt-2 sm:mt-0  font-medium text-lg">About Us</li>
                <li className="mt-2 sm:mt-0 sm:mb-0 sm:mr-6 mb-2 font-medium text-lg">
                  Contact Us
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default App;
