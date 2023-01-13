import "./Dashboard.scss";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import CarParc from "../components/CarParc";

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className="bg-rose-800">
        <Link className="border-2 h-fit flex flex-row text-lg itels-center bg-gray-800 text-gray-200 p-2 rounded-xl hover:bg-rose-800 mt-20" to="/postcar">
          <BsPlusLg />
          Add a vehicle
        </Link>
      </div>
      <div className="Dashboard">
    <div className="">
        <CarParc />
      </div>
    </div>
    </div>
  );
}
