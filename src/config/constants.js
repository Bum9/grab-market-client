export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://bum2-market-server.herokuapp.com"
    : "http://localhost:8080";
