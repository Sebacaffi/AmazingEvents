import axios from "axios";

const Logout = () => {
    axios.defaults.withCredentials = true
    axios.post("http://localhost:3000/api/logout")
    .then(response => {
        window.location.href = "/login"
    })
    .catch(err => console.log(err))
}

export default Logout;