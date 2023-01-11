import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Space } from "antd";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { useQuery, gql } from "@apollo/client";
import { useAuthContext } from "../contexts/AuthContext";
import { removeToken } from "../hooks/helpers";

const CATEGORIES = gql`
  query GetCategories {
    categories {
      data {
        id
        attributes {
          name
        }
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
    <Space className="header_space">
      <Link to="/">
        <h1>Rent Cars School</h1>
      </Link>
      <Button className="header_space_brand" href="/" type="link">
        <IoLogoFreebsdDevil size={55} />
      </Button>
      <Space className="auth_buttons">
        {user ? (
          <>
            <Button className="auth_button_login" href="/profile" type="link">
              {user.username}
            </Button>
            <Button
              className="auth_button_signUp"
              type="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button className="auth_button_login" href="/signin" type="link">
              Login
            </Button>
            <Button
              className="auth_button_signUp"
              href="/signup"
              type="primary"
            >
              SignUp
            </Button>
          </>
        )}
      </Space>
      <nav className="categories">
        <span>Filter cars by category:</span>
        {data.categories.data.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`}>
            {category.attributes.name}
          </Link>
        ))}
      </nav>
    </Space>
  );
}

export default SiteHeader;
