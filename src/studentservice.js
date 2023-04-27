import axios from 'axios'
const baseurl='http://localhost:8080/students'
const StudentService=()=>{

    return axios.get(baseurl)
}
export default StudentService
