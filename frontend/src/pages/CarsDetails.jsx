import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CARS = gql`
  query GetCars($id: ID!) {
    car(id: $id) {
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

export default function CarsDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(CARS, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="cars-card">
      <div className="rating">{data.car.data.attributes.rating}</div>
      <h2>{data.car.data.attributes.title}</h2>

      {data.car.data.attributes.categories.data.map((c) => (
        <small key={c.id}>{c.attributes.name}</small>
      ))}

      <p>{data.car.body}</p>
    </div>
  );
}
