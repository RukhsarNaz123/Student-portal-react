export const host =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api/v1"
    : "https://student-portal-web-engg.herokuapp.com/api/v1"; //TODO: needs to modify
