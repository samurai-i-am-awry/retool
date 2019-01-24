import axios from "axios";

const BASEURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";
const KEY = "AIzaSyAeSWk8gxMd0AyLuJOEv-n_ZGpKf0cc9PM";

export default {
  // Gets all books
  getTool: function() {
    return axios.get("/api/tool");
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
    return axios.post("/api/tool", toolData);
  }
};
