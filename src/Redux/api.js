import axios from 'axios'

const api = ({dispatch}) => (next) => (action) => {

    if (action.type !== 'wieldy/data') {
        next(action)
        return
    }

    next(action)

    const {url, method, data, onSuccess, onFail,headers} = action.payload

    axios({
        baseURL: 'http://143.198.173.194',
        url,
        method,
        data,
        headers
    })
        .then(res => {
            dispatch({
                type: onSuccess,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: onFail,
                payload: err
            })
        })
}

export default api