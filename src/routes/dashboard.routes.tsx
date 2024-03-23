import AllDonationsDashboard from "../pages/AllDonationsDashboard";
import CreateDonation from "../pages/CreateDonation";
import CreateTestimonial from "../pages/CreateTestimonial";
import Dashboard from "../pages/Dashboard";
import LeaderBoard from "../pages/LeaderBoard";

export const dashboardPaths = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Leader Board", path: "/dashboard/leader-board" },
  { name: "All Donations", path: "/dashboard/all-donations" },
  { name: "create donation", path: "/dashboard/create-donation" },
  { name: "create testimonial", path: "/dashboard/create-testimonial" },
];

export const dashboardRoutes = [
  { index: true, element: <Dashboard /> },
  { path: "leader-board", element: <LeaderBoard /> },
  { path: "all-donations", element: <AllDonationsDashboard /> },
  { path: "create-donation", element: <CreateDonation /> },
  { path: "create-testimonial", element: <CreateTestimonial /> },
];
