import React from 'react';
import Bill from './assets/bill.png';
import Monitor from './assets/monitor.png';
import Organize from './assets/organize.png';

const Features = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <h3 className="flex w-full justify-center mt-32 text-xl font-bold mb-16 ">
          Features
        </h3>
        <div className="features">
          <ul className="flex text-center flex-col items-center gap-6 text-lg ml-8 mr-8">
            <li className="flex">
              <img src={Bill} alt="icon of a bill" className="h-9 w-9 mr-2" />
              Track bills and see how much you spend
            </li>
            <li className="flex">
              <img src={Monitor} alt="" className="h-9 w-9 mr-2" />
              Get statistic data and analysis
            </li>
            <li className="flex">
              <img src={Organize} alt="" className="h-9 w-9 mr-2" />
              Organize your budget for your bills
            </li>
          </ul>
          <div className="btns flex justify-center gap-14 mt-24 font-semibold ">
            <button className="btn bg-main-color h-9 w-24 rounded-md cursor-pointer">
              Log In
            </button>
            <button className="btn bg-main-color h-9 w-24 rounded-md cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
