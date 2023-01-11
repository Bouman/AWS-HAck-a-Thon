import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Homepage() {
  const { loading, error, data } = useFetch("http://localhost:1337/api/cars");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.data.map((cars) => (
        <div key={cars.id} className="review-card">
          <div className="rating">{cars.rating}</div>
          <h2>{cars.attributes.title}</h2>

          <small>console list</small>

          <p>{cars.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${cars.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
