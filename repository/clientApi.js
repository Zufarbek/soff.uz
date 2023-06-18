import axios from "axios";

export const BaseUrl = "https://soff.husandev.uz/api/v1";

const client = axios.create({
  baseURL: BaseUrl,
  headers: { "X-Custom-Header": "foobar" },
});

export default client;