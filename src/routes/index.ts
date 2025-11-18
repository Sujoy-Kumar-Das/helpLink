import adminRoutes from "./admin.routes";
import commonRoutes from "./common.route";

const dashboardRoutes = [...commonRoutes, ...adminRoutes];

console.log({ dashboardRoutes });

export default dashboardRoutes;
