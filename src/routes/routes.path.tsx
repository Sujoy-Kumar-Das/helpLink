import About from "../pages/About";
import AllDonations from "../pages/AllDonations";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import DonationDetail from "../pages/DonationDetail";
import Home from "../pages/Home";

export const routesPath = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/all-donations",
    element: <AllDonations />,
  },
  {
    path: "/donation/:id",
    element: <DonationDetail />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
