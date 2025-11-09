const getPathLinksArray = (
  pathName: string
): { id: string; text: string; link: string }[] => {
  const splitPathName = pathName.split("/");

  const updatedPathNames = splitPathName
    .slice(1, splitPathName.length - 1)
    .filter((path) => path !== "")
    .map((path) => ({
      id: crypto.randomUUID(),
      text: path,
      link: `/${path}`,
    }));

  return updatedPathNames;
};

export default getPathLinksArray;
