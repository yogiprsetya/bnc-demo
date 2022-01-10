import axios from "axios";

export const HTTPClientPublic = () => {
  const client = axios.create({
    baseURL: process.env.API_HOST,
    headers: {
      Accept: "application/json",
    },
  });

  return client;
};
