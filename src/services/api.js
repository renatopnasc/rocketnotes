import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-gq63.onrender.com",
});
