import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import carImagetest from "../assets/imagecar.webp";

function CardCars({ name, rate, carId, carImage }) {
  return (
    <div className="overflow-hidden max-w-sm bg-rose-800 border-b-4 rounded-lg border-rose-800 shadow-md ">
      <div className="overflow-hidden">
        <Link to={`/details/${carId}`}>
          <img
            className="h-full hover:scale-125 hover:rotate-5 transition ease-in-out delay-150"
            src={carImage}
            alt=""
          />
        </Link>
      </div>
      <div className="p-5 bg-white rounded-br-[50%] ">
        <hr className="bg-rose-800 h-1 rounded my-2" />
        <h5 className="mb-2 text-4xl font-bebas font-medium tracking-tight text-gray-900">
          - {name} -
        </h5>
        <div className="flex">
          <p className="w-1/3 font-bebas">{rate}/10</p>
          <Link
            to={`/details/${carId}`}
            className="transition ease-in-out delay-150 inline-flex items-center px-3 py-2 text-medium font-bebas text-center text-gray-300 bg-rose-800 rounded-lg hover:bg-rose-900 hover:scale-110 tran focus:ring-4 focus:outline-none focus:ring-rose-400 "
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

function InputFilter({ name, type }) {
  return (
    <div className="relative my-4">
      <input
        type={type}
        id="floating_standard"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        min="0"
      />
      <label
        htmlFor="floating_standard"
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {name}
      </label>
    </div>
  );
}

function ButtonFilter({ name, func }) {
  return (
    <input
      type="button"
      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-2 border-rose-800 hover:bg-gray-100 hover:text-rose-800 focus:z-10 focus:ring-4 focus:ring-gray-200"
      onClick={func}
      value={name}
    />
  );
}

function CheckBoxFilter({ name }) {
  return (
    <div className="flex items-center mr-4">
      <input
        checked
        id="red-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="red-checkbox"
        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {name}
      </label>
    </div>
  );
}

function ToggleInput({ labelName }) {
  const [isChecked, setIsChecked] = useState(true);

  // add your condition and response here
  // ===>
  //

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        defaultChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-rose-800" />
      <span className="ml-3 text-sm font-medium text-gray-900">
        {labelName}
      </span>
    </label>
  );
}

export default function Homepage() {
  const { loading, error, data } = useFetch("http://localhost:1337/api/cars");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <div className="bg-rose-800 w-full flex flex-col lg:flex-row h-fit">
      {/* {data.data.map((cars) => (
        <div key={cars.id} className="review-card">
          <div className="rating">{cars.rating}</div>
          <h2>{cars.attributes.title}</h2>

          <small>console list</small>

          <p>{cars.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${cars.id}`}>Read more</Link>
        </div>
      ))} */}
      <section className="z-10 bg-gradient-to-r from-rose-800 to-gray-900 lg:w-2/5 border-b-4 border-rose-500">
        <div className="hidden lg:block flex border-4 rounded-xl h-fit w-[80%] bg-gradient-to-b from-gray-800 to-transparent mx-auto py-4 sticky top-0">
          <h2 className="font-bebas font-12 pl-12 text-white text-4xl">
            Filter by
          </h2>
          <div className="w-[80%] mx-auto mt-4">
            <InputFilter name="Price" type="number" />
            <InputFilter name="qzdqzd" type="text" />
            <ToggleInput labelName="test" />
            <div className="border-2 p-4 flex flex-wrap">
              <ButtonFilter name="Bonjour" func={() => {}} />
              <ButtonFilter name="Bonjour" func={() => {}} />
              <ButtonFilter name="Bonjour" func={() => {}} />
              <ButtonFilter name="Bonjour" func={() => {}} />
              <ButtonFilter name="Bonjour" func={() => {}} />
            </div>
            <div>
              <CheckBoxFilter />
            </div>
          </div>
        </div>
        <div className="rounded-xl h-16 lg:block w-[90%] bg-white mx-auto my-4 lg:hidden ">
          mobile view filter
        </div>
      </section>
      <section className="min-h-screen z-0 py-10 bg-gray-900 flex flex-wrap w-full justify-center gap-4 lg:w-3/4 rounded-br-[200px] border-b-4 border-rose-500">
        {data.data.map((cars) => (
          <div className="h-fit" key={cars.id}>
            <CardCars
              name={cars.attributes.title}
              desc={cars.attributes.body.substring(0, 200)}
              rate={cars.attributes.rating}
              carId={cars.id}
              carImage={carImagetest}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
