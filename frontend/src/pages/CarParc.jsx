/* eslint-disable react/prop-types */
import "./cars.scss";
import { GrMapLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

function CarParc() {
  return (
    <div className="page">
      <div className="list">
        <div className="city">
          <p>
            <GrMapLocation className="icon" />
            Toulouse
          </p>
        </div>
        <div className="info">
          <div className="car_picture">
            <img src="" alt="" />
          </div>
          <ul>
            <li>
              <Link to="/details">Ici</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CarParc;
