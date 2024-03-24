import About from "../pages/About";
import AllDonations from "../pages/AllDonations";
import Community from "../pages/Community";
import Contact from "../pages/Contact";
import DonationDetail from "../pages/DonationDetail";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Volunteer from "../pages/Volunteer";
import VolunteerDetail from "../pages/VolunteerDetail";

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
    path: "/volunteer",
    element: <Volunteer />,
  },
  {
    path: "/volunteer/:id",
    element: <VolunteerDetail />,
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
  {
    path: "*",
    element: <NotFound />,
  },
];
