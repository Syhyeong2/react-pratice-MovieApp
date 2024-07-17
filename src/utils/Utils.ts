export const createRoutes = (pathname: string) => {
  if (pathname === "/") {
    return "";
  } else if (pathname.startsWith("/coming-soon")) {
    return "/coming-soon";
  } else if (pathname.startsWith("/now-playing")) {
    return "/now-playing";
  } else {
    return "";
  }
};
