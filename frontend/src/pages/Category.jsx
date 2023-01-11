import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

const CATEGORY = gql`
  query GetCategory($id: ID!) {
    category(id: $id) {
      data {
        id
        attributes {
          name
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
      }
    }
  }
`;

export default function Category() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(CATEGORY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>{data.category.name} Filtrer par Marques</h2>

      {data.category.data.attributes.cars.data.map((car) => (
        <div key={car.id} className="cars-card">
          <div className="rating">{car.rating}</div>
          <h2>{car.title}</h2>

          {car.attributes.categories.data.map((c) => (
            <small key={c.id}>{c.name}</small>
          ))}
          <p>{car.attributes.body.substring(0, 200)}...</p>
          <Link to={`/details/${car.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
}
