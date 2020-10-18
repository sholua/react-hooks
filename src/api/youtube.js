import axios from "axios";

const KEY = "AIzaSyAGAwjQiCziX2nUzmMdMokyLQPkPt2QdoA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY,
    maxResults: 5,
    type: "video",
  },
});
