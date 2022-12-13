export const API_URL =
  process.env.API_URL ||
  "http://ec2-3-36-209-210.ap-northeast-2.compute.amazonaws.com:8080";

export const getOrderBy = (orderBy?: string) => {
  return orderBy
    ? orderBy === "latest"
      ? { orderBy: { createdAt: "desc" } }
      : orderBy === "expensive"
      ? { orderBy: { price: "desc" } }
      : { orderBy: { price: "asc" } }
    : undefined;
};

export const getContains = (keyword?: string) => {
  return keyword && keyword !== ""
    ? {
        name: { contains: String(keyword) },
      }
    : undefined;
};
