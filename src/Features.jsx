import React from 'react';

const Features = () => {
  return (
    <>
      <div>
        <h3 className="flex w-full justify-center mt-16 text-xl font-bold mb-16 ">
          Features
        </h3>
        <div className="features">
          <ul className="flex w-full flex-col items-center gap-6 text-lg">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
          <div className="btns flex justify-center gap-14 mt-24 font-semibold ">
            <button className="bg-white h-9 w-24 rounded-md cursor-pointer">
              Log In
            </button>
            <button className="bg-white h-9 w-24 rounded-md cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
