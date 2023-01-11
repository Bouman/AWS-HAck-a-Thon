import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// page & layout imports
import { Col, Layout, Row } from "antd";
import Homepage from "./pages/HomePage";
import CarsDetails from "./pages/CarsDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";
import Profile from "./components/Profile";
import SocialCards from "./components/SocialCards";
import { getToken } from "./hooks/helpers";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const { Header, Content } = Layout;
// apollo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Layout>
          <Row gutter={[0, 32]}>
            <Col span={24}>
              <Header>
                <SiteHeader />
              </Header>
            </Col>
            <Col span={22} offset={1}>
              <Content>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/details/:id" element={<CarsDetails />} />
                  <Route path="/category/:id" element={<Category />} />
                  <Route path="/users" element={<SocialCards />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route
                    path="/profile"
                    element={
                      getToken() ? <Profile /> : <Navigate to="/signin" />
                    }
                  />
                </Routes>
              </Content>
            </Col>
          </Row>
        </Layout>
      </ApolloProvider>
    </Router>
  );
}

export default App;
