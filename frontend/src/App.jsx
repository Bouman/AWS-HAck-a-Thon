import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// page & layout imports
import Homepage from "./pages/HomePage";
import CarsDetails from "./pages/CarsDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<CarsDetails />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
