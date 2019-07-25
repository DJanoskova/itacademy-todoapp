import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://todo-app-course.firebaseio.com'
})

export default instance
