const isActiveLink = (href: string, pathname: string) => {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
};

export default isActiveLink;
