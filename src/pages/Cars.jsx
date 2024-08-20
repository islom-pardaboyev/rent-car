import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { CarDoor, PassagersIcon } from "../assets/Icons";
import { TbManualGearboxFilled } from "react-icons/tb";
import { IoIosSnow } from "react-icons/io";

function Cars() {
  const [cars, setCars] = useState([]);
  const [showMaxCarCount, setShowMaxCarCount] = useState(4);

  useEffect(() => {
    axios.get("http://localhost:3000/cars")
      .then((res) => setCars(res.data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  const handleShowMoreCars = () => {
    if (showMaxCarCount === 4) {
      setShowMaxCarCount(cars.length);
    } else {
      setShowMaxCarCount(4);
    }
  };

  return (
    <>
      <section className="container flex flex-col items-center justify-center pt-[84px]">
        <Link
          to={"/add-car"}
          className="text-primary-5 bg-primary-5/10 font-medium py-4 px-8 rounded-lg text-base leading-[21px]"
        >
          Add Car
        </Link>

        <div className="container">
          {cars.length ? (
            <>
              <h1 className="text-[38px] leading-[49.4px] text-[#333333] mt-[24px] mb-[64px] font-medium text-center">
                Most popular cars rental deals
              </h1>
              <div className="grid grid-cols-12 gap-6">
                {cars.slice(0, showMaxCarCount).map((car, index) => (
                  <div
                    key={index}
                    className="col-span-3 shadow-[0px_12px_24px_0px_#104C8B29] px-6 py-[26px] rounded-2xl"
                  >
                    <img
                      width={208}
                      className="mx-auto"
                      height={104}
                      src={car.imgSrc}
                      alt=""
                    />
                    <div className="mt-[25px]">
                      <h1 className="leading-[17px] font-bold text-base">
                        {car.carName}
                      </h1>
                      <p className="flex items-center mt-3 gap-[6px]">
                        <FaStar className="text-[#EFBF14]" size={16} />
                        <span className=" leading-[17px] text-xs font-medium ">
                          {car.carRating}{" "}
                          <span className="text-primary-10 font-normal text-xs leading-[17px]">
                            ({car.carViewers} viewers)
                          </span>
                        </span>
                      </p>
                      <div className="flex flex-col gap-2 mt-4">
                        <div className="flex items-center justify-between">
                          <p className="flex items-center gap-[4px]  text-primary-15">
                            <PassagersIcon />
                            <span className="text-xs font-normal capitalize  leading-[17px]">
                              {car.countPassengers} passangers
                            </span>
                          </p>
                          <p className="flex items-center gap-[4px] text-primary-15">
                            <TbManualGearboxFilled />
                            <span className="text-xs font-normal capitalize text-primary-15 leading-[17px]">
                              {car.chooseGearBox}
                            </span>
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="flex items-center gap-[4px]  text-primary-15">
                            <IoIosSnow />
                            <span className="text-xs font-normal capitalize  leading-[17px]">
                              {car.conditsionerType}
                            </span>
                          </p>
                          <p className="flex items-center gap-[4px] text-primary-15">
                            <CarDoor />
                            <span className="text-xs font-normal capitalize text-primary-15 leading-[17px]">
                              {car.countDoor} Doors
                            </span>
                          </p>
                        </div>
                      </div>
                      <hr className="my-6 bg-primary-15" />
                      <div className="flex items-center justify-between text-sm">
                        <p className="leading-[17px]">Price</p>
                        <p className="font-semibold leading-[17px] text-base">
                          ${car.price}
                          <span className="text-primary-20 font-normal text-sm leading-[17px]">
                            /day
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {cars.length > 4 ? (
                <button
                  onClick={handleShowMoreCars}
                  className="px-4 py-2 mt-6 text-white rounded-lg bg-primary-5"
                >
                  {showMaxCarCount === 4 ? "Show All Cars" : "Show Less Cars"}
                </button>
              ) : (
                ""
              )}
            </>
          ) : (
            <p className="fixed top-0 left-0 flex items-center justify-center w-full h-full font-bold -z-10 text-8xl text-neutral-300">
              No Cars Yet
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default Cars;
