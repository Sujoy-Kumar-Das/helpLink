import About from "../pages/About";
import AllDonations from "../pages/AllDonations";
import Community from "../pages/Community";
import Contact from "../pages/Contact";
import DonationDetail from "../pages/DonationDetail";
import Home from "../pages/Home";
import Volunteer from "../pages/Volunteer";

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
    path: "/volunteer",
    element: <Volunteer />,
  },
  {
    path: "/donation/:id",
    element: <DonationDetail />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
