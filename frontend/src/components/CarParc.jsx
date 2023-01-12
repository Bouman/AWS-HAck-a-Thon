/* eslint-disable react/prop-types */
import "../pages/cars.scss";
import { GrMapLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { useAuthContext } from "../contexts/AuthContext";

const CARS = gql`
  query GetCarsId {
    cars {
      data {
        id
        attributes {
          title
          ville
          createdBy {
            id
          }
          photo {
            data {
              attributes {
                url
              }
            }
          }
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

function CarParc() {
  const { user } = useAuthContext();
  const id = user?.id;
  const { loading, error, data } = useQuery(CARS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    user &&
    data && (
      <div className="page">
        {data.cars.data
          .filter((el) => el.attributes.createdBy.id === id)
          .map((cars) => (
            <div className="list">
              <div className="city">
                <p>
                  <GrMapLocation className="icon" />
                  {cars.attributes.ville}
                </p>
              </div>
              <div className="info">
                <div className="car_picture">
                  <img
                    src={
                      import.meta.env.VITE_BACKEND_URL +
                      cars.attributes.photo.data[0].attributes.url
                    }
                    alt=""
                  />
                </div>
                <ul>
                  <li>
                    <Link to="/details">{cars.attributes.body}</Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        <hr />
        {data.cars.data.map((cars) => (
          <div className="list">
            <div className="city">
              <p>
                <GrMapLocation className="icon" />
                {cars.attributes.ville}
              </p>
            </div>
            <div className="info">
              <div className="car_picture">
                <img
                  src={
                    import.meta.env.VITE_BACKEND_URL +
                    cars.attributes.photo.data[0].attributes.url
                  }
                  alt=""
                />
              </div>
              <ul>
                <li>
                  <Link to="/details">{cars.attributes.body}</Link>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    )
  );
}

export default CarParc;
