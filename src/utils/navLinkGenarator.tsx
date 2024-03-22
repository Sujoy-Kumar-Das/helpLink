import { publicRoutes } from "../routes/public.routes";
import { userRoutes } from "../routes/private.routes";
import { routesGenerator } from "./routesGenarator";

const navLinkGenerator = (token: string | null) => {
  let navItems;

  if (token) {
    navItems = routesGenerator(userRoutes);
  } else {
    navItems = routesGenerator(publicRoutes);
  }

  return navItems;
};

export default navLinkGenerator;
