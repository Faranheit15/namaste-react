import React from "react";

const Contact = () => {
  return (
    <div className="m-4 p-4">
      <h1 className="text-3xl m-2 p-2">Contact Us</h1>
      <form>
        <input
          type="text"
          className="search-box border border-solid rounded-md m-4"
          placeholder="Name"
        />
        <input
          type="text"
          className="search-box border border-solid rounded-md m-4"
          placeholder="Message"
        />
        <button
          className="clear-btn px-4 py-2 bg-red-100 rounded-xl m-4"
          onClick={() => {}}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
