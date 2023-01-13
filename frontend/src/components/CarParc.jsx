/* eslint-disable react/prop-types */
import "../pages/cars.scss";
import { GrMapLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { useAuthContext } from "../contexts/AuthContext";

const CARS = gql`
  query GetCarsId($id: ID!) {
    usersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          cars {
            data {
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
      }
    }
  }
`;

function CarParc() {
  const { user } = useAuthContext();
  const id = user?.id;

  const { loading, error, data } = useQuery(CARS, {
    variables: {id},
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    user &&
    data && (
      <div id="dashborad" className="text-lg py-20">
        {data.usersPermissionsUser.data.attributes.cars.data
          .map((cars) => (
            <div className="w-1/2 mx-auto border-4 rounded-xl bg-rose-800 pt-2 text-center flex flex-col">
       

              <div className="city">
                <p className="text-3xl font-bebas py-2">
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
      </div>
    )
  );
}

export default CarParc;
