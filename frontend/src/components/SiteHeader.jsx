import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { useQuery, gql } from "@apollo/client";

import { removeToken } from "../hooks/helpers";
import { useAuthContext } from "../contexts/AuthContext";

const CATEGORIES = gql`
  query GetCategories {
    categories {
      data {
        attributes {
          name
        }
        id
      }
    }
  }
`;

function SiteHeader() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken();
    navigate("/signin", { replace: true });
  };

  const { loading, error, data } = useQuery(CATEGORIES);
  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error fetching categories</p>;

  return (
    <div className="bg-rose-800">
      <nav className="flex justify-around">
        <div className="flex flex-row gap-12">
          <Link className="text-white" to="/">
            <IoLogoFreebsdDevil size={50} />
          </Link>

          <Link to="/">
            <h1 className="text-4xl font-bold text-gray-200">LuxeCar</h1>
          </Link>
        </div>
        <div className="border-l-2 rounded-xl flex flex-nowrap text-white gap-8 text-xl uppercase font-bebas hover:text-gray-800 items-center px-4 bg-gradient-to-r from-gray-800 to-transparent">
          {user ? (
            <>
              <Link className="" to="/profile">
                {user.username}
              </Link>
              <button className="" type="button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="" to="/signin">
                Login
              </Link>
              <Link className="" to="/signup">
                SignUp
              </Link>
            </>
          )}
        </div>
      </nav>
      <div>
        <nav className="sticky top-12 w-full h-24 z-50 bg-gray-800 bottom-0 border-t-2 border-b-2 text-gray-200 pt-8 pl-4">
          {data.categories.data.map((category) => (
            <Link
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border-4 border-white hover:bg-gray-100 hover:text-rose-800 focus:z-10 focus:ring-4 focus:ring-gray-200"
              key={category.id}
              to={`/category/${category.id}`}
            >
              {category.attributes.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default SiteHeader;
