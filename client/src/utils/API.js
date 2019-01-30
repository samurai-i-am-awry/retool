import axios from "axios";

const BASEURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";
const KEY = "AIzaSyAeSWk8gxMd0AyLuJOEv-n_ZGpKf0cc9PM";

export default {
  // Gets all books
  getTools: function() {
    return axios.get("/api/tool");
  },
  searchTools: function(query) {
    return axios.get("/api/tool/search/" + query);
  },
  // Gets the book with the given id
  getTool: function(id) {
    return axios.get("/api/tool/" + id);
  },
  // Deletes the book with the given id
  deleteTool: function(id) {
    return axios.delete("/api/tool/" + id);
  },
  // Saves a book to the database
  saveTool: function(toolData) {
    console.log(toolData)
    return axios.post("/api/tool", toolData);
  },
  myTools: function(user_email) {
    return axios.get("/api/tool/mytools/" + user_email);
  },
  rentTool: function(id, isRented) {
    console.log("isRented: " + isRented)
    return axios.post("/api/tool/rent/" + id, {currently_rented: isRented})
  },
  setRenter: function(id, renter_email) {
    console.log("isRented: " + renter_email)
    return axios.post("/api/tool/rent/" + id, {renter_email: renter_email})
  },
  getVideos: function(query) {
    return axios.get(BASEURL + query + "&key=" + KEY);
  }
};
