import axios from "axios";

export const HTTPClientPublic = (language: string) => {
  const client = axios.create({
    baseURL: process.env.API_HOST,
    headers: {
      Accept: "application/json",
      "Accept-Language": language,
    },
  });

  return client;
};
