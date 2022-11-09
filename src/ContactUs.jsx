import React from 'react';

const ContactUs = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <h3 className="flex w-full justify-center mt-32 text-xl font-bold mb-16">
          Contact Us
        </h3>

        <div className="flex flex-col w-full ">
          <div className="ml-auto text-center mr-auto border-solid border-2 border-main-color rounded-md h-14 w-80 ">
            <p className="ml-5 mr-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. quis.
            </p>
          </div>

          <div className="flex flex-col">
            {/* <label htmlFor="Email" className="mt-2 font-semibold">
              Email
            </label> */}

            <input
              placeholder="Email"
              id="Email"
              type="email"
              name="Email"
              className="border-solid border-2 border-main-color rounded-sm w-80 ml-auto mr-auto mt-7 outline-none"
            />

            {/* <label htmlFor="Message" className="ml-7 mt-2 font-semibold">
              Message
            </label> */}

            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              className="border-solid border-2 border-main-color rounded-sm w-80 h-32 ml-auto mr-auto mt-7 outline-none resize-none leading-none"
            ></textarea>
          </div>
        </div>

        <div className="flex mt-16 w-full justify-center">
          <button className="btn bg-main-color h-9 w-24 rounded-md cursor-pointer">
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
