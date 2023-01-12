import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import "./carsDetails.scss";

const CARS = gql`
  query GetCars($id: ID!) {
    car(id: $id) {
      data {
        id
        attributes {
          title
          body
          year
          seats
          km
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
`;

export default function CarsDetails() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(CARS, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="text-black-500 h-screen border-4 bg-white">
      <div className="newContainer">
        <div className="pictures">
          {data.car.data.attributes.photo.data.map((d) => (
            <div key={`${d.id}img`} className="picture_one">
              <img
                src={import.meta.env.VITE_BACKEND_URL + d.attributes.url}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="title">
          <h1>{data.car.data.attributes.title}</h1>
          <h6>
            Année : {data.car.data.attributes.year} •{" "}
            {data.car.data.attributes.km}km • Nombres de sieges :{" "}
            {data.car.data.attributes.seats}
          </h6>
        </div>
        <div className="line" />
        <div className="tech_info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quo
          tempora! Nam provident suscipit est maxime commodi. Itaque consequatur
          est ipsa aperiam doloremque accusamus dolores architecto cupiditate
          sapiente consequuntur debitis, expedita quia officia totam repudiandae
          velit, at eligendi iure exercitationem perferendis odio corporis
          cumque nemo porro! Animi earum sequi ipsum nulla officia quod natus,
          labore eligendi tempore recusandae? Provident omnis doloremque quam
          perspiciatis, vitae placeat ipsa exercitationem minus iusto a quae
          illum eligendi quia aut quidem expedita accusantium dignissimos
          laboriosam, aspernatur dicta. Voluptas perferendis maxime, recusandae
          rerum illum sequi deleniti distinctio molestiae nihil, laudantium
          maiores
        </div>
        <div className="line" />
        <div className="description">{data.car.data.attributes.body}</div>
      </div>
    </div>
  );
}
