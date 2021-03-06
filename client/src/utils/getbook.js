import axios from "axios";

const baseURL = "http://localhost:3001";

export default {
  getGoogleBooks: function (book) {
    
    
    return axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=AIzaSyDllATq3ds5Y1sRa6gpMoXmWGfC46aB7SM&maxResults=20"
    );
  },

  // Gets all books
  getBooks: function () {
    return axios.get(`${baseURL}/api/books`);
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get(`${baseURL}/api/books` + id);
  },

  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post(`${baseURL}/api/books`, bookData);
  },
};
