import React from "react";
import { CiUser } from "react-icons/ci";
import { FaCar, FaStar } from "react-icons/fa";

function AddCars() {
  //   function handleFormSubmit(e) {
  //     e.preventDefault();
  //     const { name, email } = e.target.elements;
  //     const data = {
  //       name: name.value,
  //       email: email.value,
  //     };
  //     fetch("http://localhost:3000/todos", {
  //       method: "post",
  //       body: JSON.stringify(data),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   }
  return (
    <div className="flex items-center justify-center w-screen bg-black/10 h-screen">
      <form className="w-[500px] h-[600px] p-6 rounded-lg shadow-lg bg-white">
        <h1 className="text-center text-3xl font-medium mb-3">Add Cars</h1>
        <div className="flex flex-col gap-3">
          <label className=" w-full border p-2 border-black rounded-md flex items-center gap-3">
            <FaCar className=" top-3 bg-white left-3" />
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Car Name"
            />
          </label>
          <label className=" w-full border p-2 border-black rounded-md flex items-center gap-3">
            <FaStar className="text-yellow-400 top-3 bg-white left-3" />
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Car Rate"
            />
          </label>
          <label className=" w-full border p-2 border-black rounded-md flex items-center gap-3">
            <CiUser className="font-medium top-3 bg-white left-3" />
            <input
              type="number"
              className="w-full outline-none"
              placeholder="Passengers"
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default AddCars;
