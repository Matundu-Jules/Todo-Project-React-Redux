import * as axios from 'axios'

const apiFirebase = axios.create({
    baseURL: 'https://todo-react18-redux-default-rtdb.firebaseio.com/',
})

export default apiFirebase
