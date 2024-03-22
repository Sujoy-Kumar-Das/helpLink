import { TRoutesItem } from "../types";

export const routesGenerator = (items: TRoutesItem[]) => {
  const routes = items.reduce((acc: TRoutesItem[], item) => {
    acc.push({ name: item.name, path: item.path, element: item.element });

    return acc;
  }, []);

  return routes;
};
