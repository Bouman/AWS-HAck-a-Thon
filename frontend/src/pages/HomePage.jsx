import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CARS = gql`
  query GetCars {
    cars {
      data {
        id
        attributes {
          title
          body
          rating
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default function Homepage() {
  const { loading, error, data } = useQuery(CARS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.cars.data.map((cars) => (
        <div key={cars.attributes.id} className="review-card">
          <div className="rating">{cars.attributes.rating}</div>
          <h2>{cars.attributes.title}</h2>
          <small />
          <p>{cars.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${cars.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
