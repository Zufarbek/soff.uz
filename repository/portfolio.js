import client, { BaseUrl } from "./clientApi";

class PortfolioAPI {
  getAllPortfolio() {
    const endPoint = "/portfolio";
    const allData = client
      .get(BaseUrl + endPoint)
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => {
        return err;
      });

    return allData;
  }
  getAllPortfolioId(props) {
    console.log(props);
    const endPoint = `/portfolio/${props}`;
    const allData = client
      .get(BaseUrl + endPoint)
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => {
        return err;
      });

    return allData;
  }
}

export default new PortfolioAPI();