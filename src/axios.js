import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-onlinestore-react.cloudfunctions.net/api",
});

export default instance;

// baseURL: "http://localhost:5001/onlinestore-react/us-central1/api";
