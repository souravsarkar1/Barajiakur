import axios from 'axios'
const { DATA_REQUEST, DATA_SUCCESS, DATA_FAIL } = require("./actionTypes")

export const getData = () => (dispatch) => {
    dispatch({ type: DATA_REQUEST });
    axios.get(`http://localhost:8080/data`).then((res) => {
        console.log(res.data);
        dispatch({ type: DATA_SUCCESS, payload: res.data })
    }).catch((err) => {
        dispatch({ type: DATA_FAIL })
    })
}