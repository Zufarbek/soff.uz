import client, { BaseUrl } from "./clientApi";

class Auth {
  Register(props) {
    console.log(props);
    const endPoint = "/auth/register";
    const postLogin = client
      .post(BaseUrl + endPoint,
        props, {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((res) => {
        console.log("toking keldi");
        localStorage.setItem("Token", JSON.stringify(res.data.token))
        return res.data;
      })
      .catch((err) => {
        return err;
      });

    return postLogin;

  }
  Login(props) {
    const endPoint = "/auth/login";

    const postLogin = client
      .post(BaseUrl + endPoint, {
        email: props.email,
        password: props.password
      })
      .then((res) => {
        localStorage.setItem("Token", JSON.stringify(res.data.token))
        return res.data;
      })
      .catch((err) => {
        return err;
      });

    return postLogin;
  }

}

export default new Auth();