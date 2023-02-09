import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-back.onrender.com",
});

export default instance;