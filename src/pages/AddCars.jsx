import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoMdCloudUpload } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function AddCars() {
  const [imgSrc, setImgSrc] = useState();
  const [knownImg, setKnownImg] = useState(false);
  const navigate = useNavigate();

  const getChoosenImgSrc = (e) => {
    setImgSrc(URL.createObjectURL(e.target.files[0]));
    setKnownImg(true);
  };

  const airConditioningTypes = [
    { id: 1, title: "Air Conditioning" },
    { id: 2, title: "Automatic Climate Control" },
    { id: 3, title: "Dual-Zone Climate Control" },
    { id: 4, title: "Tri-Zone Climate Control" },
    { id: 5, title: "Manual Air Conditioning" },
    { id: 6, title: "Rear Air Conditioning" },
  ];

  const gearBoxChoose = [
    {
      id: 1,
      name: "Mechanical",
    },
    {
      id: 2,
      name: "Automatic",
    },
  ];

  function handleFormSubmit(e) {
    e.preventDefault();
    const {
      carName,
      price,
      carRating,
      countPassengers,
      conditsionerType,
      chooseGearBox,
      countDoor,
    } = e.target.elements;
    const data = {
      id: Math.floor(Math.random() * 10),
      carViewers: 2.436,
      imgSrc: imgSrc,
      carName: carName.value,
      price: price.value,
      carRating: carRating.value,
      countDoor: countDoor.value,
      conditsionerType: conditsionerType.value,
      chooseGearBox: chooseGearBox.value,
      countPassengers: countPassengers.value,
    };

    axios.post("http://localhost:3000/cars", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setTimeout(() => {
      navigate("/");
    }, 700);
    toast.success("Car Addes Successfully");
  }
  return (
    <form
      onSubmit={handleFormSubmit}
      className="container flex flex-col items-center justify-center h-screen"
    >
      <div className="flex items-center justify-between w-full">
        <label className="">
          <div className={`${knownImg ? "hidden" : ""}`}>
            <input onChange={(e) => getChoosenImgSrc(e)} type="file" hidden />
            <span className="flex items-center justify-center gap-3 p-3 font-medium text-white rounded-lg cursor-pointer hover:opacity-80 bg-sky-500 hover:bg-primary-5">
              {" "}
              <IoMdCloudUpload size={"2rem"} /> <p>Upload Car Img</p>
            </span>
          </div>
          <img width={600} src={imgSrc} alt="" />
        </label>
        <div className="flex flex-col w-[40%]">
          <h1 className="font-bold text-[2rem] text-center">
            Add Card Details
          </h1>
          <div className="flex flex-col gap-4 mt-5">
            <label className="flex flex-col gap-1">
              <span>Car Name</span>
              <input
                required
                type="text"
                name="carName"
                className="p-2 border rounded-md outline-none border-black/50"
                placeholder="Car Name"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="">Price</span>
              <input
                required
                type="text"
                name="price"
                className="p-2 border rounded-md outline-none border-black/50"
                placeholder="Price"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="">Car Rate</span>
              <input
                required
                type="text"
                name="carRating"
                className="p-2 border rounded-md outline-none border-black/50"
                placeholder="Car Rate"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="">Passagers</span>
              <input
                required
                type="text"
                name="countPassengers"
                className="p-2 border rounded-md outline-none border-black/50"
                placeholder="Passagers"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="">Conditsioner</span>
              <select
                required
                type="text"
                name="conditsionerType"
                className="p-2 border rounded-md outline-none border-black/50"
              >
                <option defaultValue>Choose Air Conditioring</option>
                {airConditioningTypes.map((item) => (
                  <option key={item.id} defaultValue={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1">
              <span className="">Gear Box</span>
              <select
                required
                type="text"
                name="chooseGearBox"
                className="p-2 border rounded-md outline-none border-black/50"
              >
                <option defaultValue>Choose Gear Box</option>
                {gearBoxChoose.map((item) => (
                  <option key={item.id} defaultValue={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1">
              <span className="">Doors</span>
              <input
                name="countDoor"
                required
                type="number"
                className="p-2 border rounded-md outline-none border-black/50"
                placeholder="Doors"
              />
            </label>
          </div>
        </div>
      </div>
      <button className="px-10 py-2 mt-8 font-medium text-white rounded-md bg-sky-500 hover:bg-primary-5">
        Add Car
      </button>
    </form>
  );
}

export default AddCars;
