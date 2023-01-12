import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// page & layout imports
import Homepage from "./pages/HomePage";
import CarsDetails from "./pages/CarsDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <Router>
      <SiteHeader />
      <main className="bg-yellow-400">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<CarsDetails />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </main>
      <footer className="p-4 bg-rose-800 shadow md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white font-bebas">
              Flowbite
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">
          © 3{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </Router>
  );
}

export default App;
