import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import CardCars from "@components/CardCars";

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
                photo {
                  data {
                    attributes {
                      url
                    }
                  }
                }
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
    <div className="h-fit min-h-screen bg-rose-800">
      <div className="bg-gray-800 min-h-screen h-fit rounded-br-[25%]">
        <h2 className="text-3xl font-bebas text-gray-200">
          {data.category.name} Filtrer par Marques
        </h2>

        <section className="flex flex-col gap-4 h-fit lg:flex-row lg:flex-wrap lg:w-4/5 lg:mx-auto">
          {data.category.data.attributes.cars.data.map((car) => (
            <div className="mx-auto lg:mx-0" key={car.id}>
              <CardCars
                carId={car.id}
                name={car.attributes.title}
                rate={car.attributes.rating}
                carImage={
                  import.meta.env.VITE_BACKEND_URL +
                  car.attributes.photo.data[0].attributes.url
                }
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
