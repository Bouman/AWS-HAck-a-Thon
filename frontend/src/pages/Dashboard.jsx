import "./Dashboard.scss";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import CarParc from "../components/CarParc";

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="Dashboard">
        <CarParc />
      </div>
      <div className="SpeedLink">
        <Link className="" to="/postcar">
          <BsPlusLg />
          Add a vehicle
        </Link>
      </div>
    </div>
  );
}
