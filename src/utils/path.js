export const basePath = "";

export const publicPath = (path) => {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
};