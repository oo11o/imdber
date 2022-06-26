import axios from "axios";

export default async (url) => {
    return await axios.get(url)
        .then(function (response) {
            return {
                status: response.status,
                data: response.data
            };
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}
