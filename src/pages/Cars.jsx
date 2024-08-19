import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cars() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  console.log(cars);
  

  return (
    <section className="container flex items-center justify-center pt-[84px]">
      <Link
        to={"/add-car"}
        className="text-primary-5 bg-primary-5/10 font-medium py-4 px-8 rounded-lg text-base leading-[21px]"
      >
        Add Car
      </Link>

      <div></div>
    </section>
  );
}

export default Cars;
