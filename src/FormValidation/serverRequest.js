import axios from "axios";

export const getData = (data) => {
   return  axios.post('http://192.168.1.115:8087/user/login',data)
        .then(res => {
            console.log(res.data,'res')


            return res.data
        })
        .catch(err => {
            console.log(err.response.data)

        })

}

export const postData = (data) => {
    axios.post('http://192.168.1.115:8087/user/register', data)
        .then(res => {
            console.log(res.data)

        })
        .catch(err => {
            console.log(err.response)

        })
}
