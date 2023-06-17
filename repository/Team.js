import client, { BaseUrl } from "./clientApi";

class TeamAPI {
  getAllTeam() {
    const endPoint = "/team";
    const allData = client
      .get(BaseUrl + endPoint)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });

    return allData;
  }


}

export default new TeamAPI();