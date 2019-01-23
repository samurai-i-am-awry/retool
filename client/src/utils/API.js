import axios from "axios";

const BASEURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";
const KEY = "AIzaSyAeSWk8gxMd0AyLuJOEv-n_ZGpKf0cc9PM";


export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveTool: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  search: function(query) {
    return axios.get(BASEURL + query + "&key=" + KEY);
  }
};
