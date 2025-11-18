import { IDashboardRoute } from "@/interface/dashboard.routes.interface";
import { IUserRole } from "@/interface/user.interface";
import { commonRoutesPaths } from "@/routes/common.route";

// steps for generate routes
// 1 check is it common route or not
// 2 if it is common route let it go
// 3 if the path is equal to "/dashboard" then make the route like "/dashboard/role"
// other wise make the routes like "/dashboard/admin/route"

const routeGenerator = (
  routesPaths: IDashboardRoute[],
  role: IUserRole | undefined
) => {
  return routesPaths.reduce((acc: IDashboardRoute[], item: IDashboardRoute) => {
    if (item.access?.includes(role as IUserRole)) {
      //  checking for match with common route

      if (item.link === "/dashboard") {
        acc.push({
          text: item.text,
          link: `/dashboard/${role}`,
          icon: item.icon,
        });
      } else if (commonRoutesPaths.includes(item.link)) {
        acc.push({
          text: item.text,
          link: item.link,
          icon: item.icon,
        });
      } else {
        acc.push({
          text: item.text,
          link: `/dashboard/${role}${item.link}`,
          icon: item.icon,
        });
      }
    }

    return acc;
  }, []);
};

export default routeGenerator;
