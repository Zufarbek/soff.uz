import client, { BaseUrl } from "./clientApi";



class ContactAPI {

    postContact(props) {
        const endPointPut = `/contact`;
        const postData = client
            .post(BaseUrl + endPointPut, props , {
                headers: {
                    "Content-Type ": "application/json",
                },
            })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err;
            });

        return postData;
    }
}
export default new ContactAPI();