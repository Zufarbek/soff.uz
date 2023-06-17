import axios from "axios";

export const BaseUrl = "http://localhost:5000/api/v1";

const client = axios.create({
  baseURL: BaseUrl,
  headers: { "X-Custom-Header": "foobar" },
});

export default client;