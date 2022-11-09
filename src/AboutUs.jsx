import React from 'react';

const AboutUs = () => {
  return (
    <>
      <div className="h-screen flex flex-col ">
        <h3 className="flex w-full justify-center mt-32 text-xl font-bold mb-16">
          About
        </h3>
        <div className="flex ml-auto items-center mr-auto border-solid border-2 border-main-color rounded-md h-48 w-80">
          <p className='text-center ml-5 mr-5'>
          Wondering how much you spend monthly on bills or you want to lower your spendings on bills then you are in the right place, Here you can track every single cent that goes into your bills.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
